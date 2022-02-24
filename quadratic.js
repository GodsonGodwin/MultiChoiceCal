$('document').ready(function(){
   
    //GETTING THE INPUT 
 
 let firstTerm = 0;
 let middleTerm = 0;
 let constant = 0;
 let equation = 0;
 
 $('#firstTerm').keyup(function(){
    firstTerm = Number($('#firstTerm').val());
 
 })
 
 $('#middleTerm').keyup(function(){
    middleTerm = Number($('#middleTerm').val());
 })
 
 $('#constant').keyup(function(){
    constant = Number($('#constant').val());
 })
 
 
 //OUTPUTING THE EQUATION
 function outputData(){
    if (middleTerm < 0 || constant < 0){
        equation =`${firstTerm}x&#xb2 + (${middleTerm})x + (${constant}) = 0 `
        $('#output-value').html(equation).css({
            fontSize: '25px',
            float:'left'});
     }
        else{
            equation =`${firstTerm}x&#xb2 + ${middleTerm}x + ${constant} = 0 `
        $('#output-value').html(equation).css({
            fontSize: '25px',
            float:'left'});;
        }
 }

 //Checking for input 1
 $('.output').click(function(){
    if (firstTerm == 1 && middleTerm > 0 && constant > 0){
        equation =`x&#xb2 + ${middleTerm}x + ${constant} = 0 `;
        $('#output-value').html(equation).css({
            fontSize: '25px',
            float:'left'});
     }

     else if (firstTerm == 1 && middleTerm < 0 ){
     equation =`x&#xb2 + (${middleTerm})x + (${constant}) = 0 `;
        $('#output-value').html(equation).css({
            fontSize: '25px',
            float:'left'});
        }

        else if (firstTerm == 1 && constant < 0){
            equation =`x&#xb2 + (${middleTerm})x + (${constant}) = 0 `;
               $('#output-value').html(equation).css({
                   fontSize: '25px',
                   float:'left'});
        }
     
            else{
                return outputData();
            }
 });
 
 //Evaluating the equation using a general formula
 $('.solve').click(function(){
    let solution1 = 0;
    let solution2 = 0;
    let test1 = (`${-middleTerm}`);
    let test2 = Math.sqrt((`${middleTerm * middleTerm}`) -  (4 * firstTerm * constant));
    let test3 =   (2 * `${firstTerm}`);

        solution1 = (`${test1}` - `${-test2}`) / `${test3}`;
        solution2 = (`${test1}` - `${test2}`) / `${test3}`;

                if (isNaN(solution1, solution2)) {
                    return $('#solution').html(`No real solution`).css('padding-right' ,'15px');
                }
                else{
                return $('#solution').html(`x = ${solution1.toFixed(2)}, x = ${solution2.toFixed(2)}`).css('padding-right' ,'15px');;
                }
     
 })
 
 //RESETING THE DOM
 $('.reset').click(function(){
$('.equation > input').val(this).empty();
$('#outPut > p ').val(this).empty();
$('#solution').text(this).empty();
 })
 
 })
 