 // GETTING THE INPUT

    //Equation 1
    let x1;
    let y1;
    let z1;
    let equation1;
      $('#X1').keyup(function(){
         x1 = Number($('#X1').val());
      })
 
      $('#Y1').keyup(function(){
         y1 = Number($('#Y1').val());
      })
 
      $('#Z1').keyup(function(){
         z1 = Number($('#Z1').val());
      })
 
      //Equation 2
      let x2;
      let y2;
      let z2;
      let equation2;
      $('#X2').keyup(function(){
         x2 = Number($('#X2').val());
      })
 
      $('#Y2').keyup(function(){
         y2 = Number($('#Y2').val());
      })
 
      $('#Z2').keyup(function(){
         z2 = Number($('#Z2').val());
      })
     
      //OUTPUTING THE EQUATION
      $('.output').click(function(){
         $('#outPut').css({
            height: '80px'});
     
            $('.solve').css({
             height: '75px',
             fontSize: '25px'});
     
             $('.simulEquation > h2').css({
                textAlign: 'center',
                 marginTop: '25px'});

          if(y1 < 0){
             equation1 =`${x1}x + (${y1})y = ${z1} ...Eq(1) `
             $('#output-value').html(equation1).css({
                 float: 'left',
                 fontSize: '20px',
                 paddingLeft:'20px'});
          }

          else{
             equation1 =`${x1}x + ${y1}y = ${z1} ...Eq(1) `
             $('#output-value').html(equation1).css({
                 float: 'left',
                 fontSize: '20px',
               paddingLeft:'20px'});
          }
 
          //Equation 2

          if (y2 < 0){
             equation2 =`${x2}x + (${y2})y = ${z2}  ...Eq(2) `
             $('#output-value2').html(equation2).css({
              float: 'left',
              fontSize: '20px',
              paddingLeft:'20px'});
          }
 
          else{
             equation2 =`${x2}x + ${y2}y = ${z2}  ...Eq(2)`
             $('#output-value2').html(equation2).css({
              float: 'left',
              fontSize: '20px',
              paddingLeft:'20px'});
 
          }
 
     })
 
     //EValuating the equation

      $('.solve').click(function(){
         let deta = (x1 * y2) - (x2 * y1);
         let detax =  (z1 * y2) - (z2 * y1);
         let detay =  (x1 * z2) - (x2 * z1);
         let solutionx = detax / deta;
         let solutiony = detay / deta;
        
    
         $('#solution').html(`x = ${solutionx.toFixed(2)}, y = ${solutiony.toFixed(2)}`).css('padding-right' ,'20px');
         
      });

     //RESETING THE DOM
$('.reset').click(function(){
   $('.simultaneousInput').val(this).empty();
   $('#outPut > p ').val(this).empty();
   $('#solution').text(this).empty();
})
 
 
