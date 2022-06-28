$(document).ready(function () {
    var final_result = 0;
    // Radio Buttons Click Capture
    $('input:radio').click(function () {
         debugger;
        var sum = 0 ;
        var class_name = $(this).attr('class').split(' ')[1];
        var value = $("." + class_name + ":checked").val();
        if (class_name == 'suporte-social') {
            if (value == 'alone') {
                $('#sectionB_suportSocial').show()
                value = 0;
                $('#q1').hide()
                $('#sectionB_suportSocial').find('input:radio').prop('checked', false);
            }
            else {
                value = findSum(this);
				
                $('#sectionB_suportSocial').hide()
                $(this).closest('.questions').next('.questions').show()
                $('#q1').show()
                
            }
        }else {
            sum = findSum(this);
            
            $(this).closest('.questions').next('.questions').show()
            value = sum;
			
        }
		
        $(this).closest('.questions').find('.show-value span').html(value)
    });// End

    // Result Calculation
    $('#geriatricForm').submit(function (e) {
        e.preventDefault();
        var temp = 0;
        $("#geriatricForm input[type=radio]:checked").each(function() {
            console.log(this.value);
            if(this.value != 'alone'){
                temp += parseFLOAT(this.value);
            }
        });
		
		var value_Status = getResultAccToRange((temp / 10))
		localStorage.setItem("Result", value_Status);
        $('#final-result').html(value_Status);
		openPageAccordingly((temp / 10))
    });// End

    // Start
    function parseFLOAT(value) {
        if (!isNaN(value) && value != 'undefined' && value != undefined) {
            return parseFloat(value)
        } else {
            return 0;
        }
    }
    
    function findSum(tis){
        var sum = 0 ;
        $(tis).closest('.questions').find('input:radio').each(function(i,e){
            var selected_value = $("." + $(e).attr('class').split(' ')[1] + ":checked").val();
            if($(e).is(":checked")){
                sum += parseFLOAT(selected_value);
            }
        })
        return sum;
    }
	
	function getResultAccToRange(value){
		var status = '';
		var num = parseFLOAT(value);
		if(num >= 0 && num < 0.5 ){
			status = " <span style='color:Yellow'>Normal</span>"
		}
		else if(num >= 0.5 && num < 1){
			status =  " <span style='color:green'>Moderate</span>"
		}
		else if (num >= 1){
			status =  " <span style='color:red'>Severe</span>"	
		}
		return value + status;
	}	
	function openPageAccordingly(value){
		var num = parseFLOAT(value);
		if(num >= 0 && num < 0.5 ){
			window.open('Normal.html')
		}
		else if(num >= 0.5 && num < 1){
			window.open('Moderate.html')
		}
		else if (num >= 1){
            window.open('Severe.html')
		}
		
	}
	
});