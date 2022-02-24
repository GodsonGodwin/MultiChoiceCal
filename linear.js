$('document').ready(function(){
   
   //GETTING THE INPUT 

let variableValue;
let constantValue;
let resultValue;
let equation;

$('#variable').keyup(function(){
   variableValue = $('#variable').val();

})

$('#constant').keyup(function(){
   constantValue = $('#constant').val();
})

$('#RHS').keyup(function(){
   resultValue = $('#RHS').val();
})

//OUTPUTING THE EQUATION
$('.output').click(function(){
    if (constantValue < 0){
       equation =`${variableValue}x + (${constantValue}) = ${resultValue}`
       $('#output-value').text(equation).css('float', 'left');
    }
       else{
           equation =`${variableValue}x + ${constantValue} = ${resultValue}`
       $('#output-value').text(equation).css('float', 'left');

       }
})

//Evaluating the equation using a general formula
let solution 
$('.solve').click(function(){
    if (constantValue < 0){
       solution = (`${resultValue}` - `${constantValue}`) / `${variableValue}`;
       $('#solution').text(solution).css('padding' ,'5px');
       
    }
       else{
       solution = (`${resultValue}` - `${constantValue}`) / `${variableValue}`;
       $('#solution').text(solution).css('padding-right' ,'20px');
       
       console.log(solution);

    }
    
})

//RESETING THE DOM
$('.reset').click(function(){
   $('.linearInput').val(this).empty();
   $('#outPut > p ').val(this).empty();
   $('#solution').text(this).empty();
   
})

})
