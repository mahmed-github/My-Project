//Shahrukh

var ngacc = document.getElementsByClassName("ngaccordion");
var ngi;

for (ngi = 0; ngi < ngacc.length; ngi++) {
  ngacc[ngi].addEventListener("click", function() {
    this.classList.toggle("active");
    var ngpanel = this.nextElementSibling;
    if (ngpanel.style.display === "block") {
      ngpanel.style.display = "none";
    } else {
      ngpanel.style.display = "block";
    }
  });
}

/* Screen Tool */

  var answers = ["A","C","B","B","C","D","A","C","D","A"], 
      tot = answers.length;
  function getCheckedValue( radioName ){
    var radios = document.getElementsByName(radioName );
    // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
    // return the checked value
  }
  function getScore(){
    var score = 0;
    for (var i=0; i<tot; i++)
      if(getCheckedValue("question"+i)===answers[i]) score += 1;
    // increment only
    return score;
  }
  function returnScore(){
  //  console.log(tot)
    var formValid = false;
    for(var s=0; s<tot;s++){
      var radios=0;
      radios = document.getElementsByName("question"+i);
      var i = 0;
      while (!formValid && i < radios.length) {
        if (radios[i].checked){ formValid = true}else{formValid = false}
        i++;
      }
      // return formValid;
    }
    //if (formValid) document.getElementById('result').innerHTML="Your score is "+ getScore() +"/"+ tot;
    if (formValid){document.getElementById('result').innerHTML=getScore();
    	//("#stmyModal").    
         $("#stmyModal").modal('show');
	 }
    //if (!formValid) alert("Must Check All Option!");
    if(!formValid){
    	$(".stError").show();
    }
    
    //alert("Your score is "+ getScore() +"/"+ tot);
  }
  

/*################ Geritric Screening  ################ */
$("input[type=radio]").click(function() {
        //debugger
        var total = 0.0;
        $("input[type=radio]:checked").each(function() {
            total += parseFloat($(this).val());
        });
    	//alert(total)
        $("#answer").val(total/10);
    });
    
    function alone()
    {
        
        //  Category 1 Start 
        if(document.getElementById('C1Q1A').checked) {
            document.getElementById('C1Q2Hide').style.display='block';
            document.getElementById('res1').innerHTML="..";
        }
        if(document.getElementById('C1Q1B').checked) {
            document.getElementById('C1Q2Hide').style.display='none';
            document.getElementById('res1').innerHTML="..";
            let C1Q1B = document.getElementById('C1Q1B').value;
            document.getElementById('res1').innerHTML= C1Q1B;
        }
        if(document.getElementById('C1Q1C').checked) {
            document.getElementById('C1Q2Hide').style.display='none';
            document.getElementById('res1').innerHTML=".."; 
            let C1Q1C = document.getElementById('C1Q1C').value;
            document.getElementById('res1').innerHTML= C1Q1C;
        }
        if(document.getElementById('C1Q2A').checked) {
            
            let C1Q2A = document.getElementById('C1Q2A').value;
            document.getElementById('res1').innerHTML= C1Q2A;
        }
        if(document.getElementById('C1Q2B').checked) {
            
            let C1Q2B = document.getElementById('C1Q2B').value;
            document.getElementById('res1').innerHTML= C1Q2B;
        }
    }






