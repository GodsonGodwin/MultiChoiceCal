$('document').ready(function(){
   
    
    //AREA OF RECTANGLE*******************************************
        
        //GETTING INPUT
    let length = 0;
    let breadth = 0;

 $('#length').keyup(function(){
     length = Number($('#length').val());
 
 })
 
 $('#breadth').keyup(function(){
     breadth = Number($('#breadth').val());
 })

 //GETTING OUTPUT
 $('.output').click(function(){
       area =`Area = length x breadth `;
       areainfo = `= ${length} * ${breadth}`;
       $('#outPut').css({
           height: '80px',
           fontSize: '25px'});

           $('.solve').css({
            height: '75px',
            fontSize: '25px'});

            $('.areaRect > h2').css({
               textAlign: 'center',
                marginTop: '25px'});

       $('#rectOutput-value').html(area).css({
           float:'left',
           paddingLeft: '20px'});

       $('#rectOutput-value2').html(areainfo).css({
           textAlign: 'left',
           marginLeft:'80px'
        });
    })
    
    $('#rectSolve').click(function(){
        let solution = length * breadth;
           $('#solution').text(solution).css('padding' ,'5px');
           
        })

       
// AREA OF SQUARE**************************************************************

//GETTING INPUT
let side = 0;

$('#side').keyup(function(){
 side = Number($('#side').val());

})

//GETTING OUTPUT
$('.output').click(function(){
   area =`Area = S&#xb2 `;
   areainfo = `= ${side}&#xb2 `;
   $('#outPut').css({
       height: '80px',
       fontSize: '25px'});

       $('.solve').css({
        height: '75px',
        fontSize: '25px'});

        $('.areaRect > h2').css({
           textAlign: 'center',
            marginTop: '25px'});

   $('#squareOutput-value').html(area).css({
       float:'left',
       paddingLeft: '20px'});

   $('#squareOutput-value2').html(areainfo).css({
       textAlign: 'left',
       marginLeft:'80px'});


$('#squareSolve').click(function(){
    let solution = side * side;
       $('#solution').text(solution).css('padding' ,'5px');
       
    })

})

//AREA OF CIRCLE*****************************************************

let radius = 0;

$('#radius').keyup(function(){
 radius = Number($('#radius').val());

})

//GETTING OUTPUT
$('.output').click(function(){
   area =`Area = &#960r&#xb2 `;
   areainfo = `= &#960 x ${radius}&#xb2 `;
   $('#outPut').css({
       height: '80px',
       fontSize: '25px'});

       $('.solve').css({
        height: '75px',
        fontSize: '25px'});

        $('.areaRect > h2').css({
           textAlign: 'center',
            marginTop: '25px'});

   $('#circleOutput-value').html(area).css({
       float:'left',
       paddingLeft: '20px'});

   $('#circleOutput-value2').html(areainfo).css({
       textAlign: 'left',
       marginLeft:'80px'});


$('#circleSolve').click(function(){
    let solution = Math.PI * radius * radius;
       $('#solution').text(solution.toFixed(2)).css('padding' ,'5px');
       
    })

})

//AREA OF TRIANGLE*****************************************************

let triBreadth = 0;
let height = 0;

$('#tri-breadth').keyup(function(){
 triBreadth = Number($('#tri-breadth').val());

})

$('#height').keyup(function(){
    height = Number($('#height').val());
   
   })

//GETTING OUTPUT
$('.output').click(function(){
   area =`Area = <sup>1</sup>&frasl;<sub>2</sub> x bh `;
   areainfo = `= <sup>1</sup>&frasl;<sub>2</sub> x ${triBreadth} x ${height} `;
   $('#outPut').css({
       height: '80px',
       fontSize: '25px'});

       $('.solve').css({
        height: '75px',
        fontSize: '25px'});

        $('.areaRect > h2').css({
           textAlign: 'center',
            marginTop: '25px'});

   $('#triOutput-value').html(area).css({
       float:'left',
       paddingLeft: '20px'});

   $('#triOutput-value2').html(areainfo).css({
       textAlign: 'left',
       marginLeft:'80px'});


$('#triSolve').click(function(){
    let solution = 0.5 * triBreadth * height;
       $('#solution').text(solution.toFixed(2)).css('padding' ,'5px');
       
    })

})

//AREA OF TRAPEZIUM *****************************************************

let traBreadth = 0;
let oppSide = 0;
let traHeight = 0;

$('#tra-breadth').keyup(function(){
    traBreadth = Number($('#tra-breadth').val());

})

$('#opp-side').keyup(function(){
    oppSide = Number($('#opp-side').val());
   
   })

$('#tra-height').keyup(function(){
    traHeight = Number($('#tra-height').val());
   
   })

//GETTING OUTPUT
$('.output').click(function(){
   area =`Area = <sup>1</sup>&frasl;<sub>2</sub> x (a + b)h `;
   areainfo = `= <sup>1</sup>&frasl;<sub>2</sub> x (${traBreadth} + ${oppSide}) x ${traHeight} `;
   $('#outPut').css({
       height: '80px',
       fontSize: '20px'});

       $('.solve').css({
        height: '75px',
        fontSize: '25px'});

        $('.areaRect > h2').css({
           textAlign: 'center',
            marginTop: '25px'});

   $('#traOutput-value').html(area).css({
       float:'left',
       paddingLeft: '20px'});

   $('#traOutput-value2').html(areainfo).css({
       textAlign: 'left',
       marginLeft:'30px'});


$('#traSolve').click(function(){
    let solution = 0.5 * (traBreadth + oppSide) * traHeight ;
       $('#solution').text(solution.toFixed(2)).css('padding' ,'5px');
       
    })

});

//AREA OF CONE

let coneRadius = 0;
let coneLength = 0

$('#cone-radius').keyup(function(){
 coneRadius = Number($('#cone-radius').val());

})

$('#cone-length').keyup(function(){
    coneLength = Number($('#cone-length').val());
   
   })

//GETTING OUTPUT
$('.output').click(function(){
   area =`Area = &#960r&#xb2 + &#960rl `;
   areainfo = `= &#960 x ${coneRadius}&#xb2 + &#960 x ${coneRadius} x ${coneLength} `;
   $('#outPut').css({
       height: '80px',
       fontSize: '20px'});

       $('.solve').css({
        height: '75px',
        fontSize: '25px'});

        $('.areaRect > h2').css({
           textAlign: 'center',
            marginTop: '25px'});

   $('#coneOutput-value').html(area).css({
       float:'left',
       paddingLeft: '20px'});

   $('#coneOutput-value2').html(areainfo).css({
       textAlign: 'left',
       marginLeft:'30px'});


$('#coneSolve').click(function(){
    let solution = (Math.PI * coneRadius * coneRadius) + (Math.PI * coneRadius * coneLength);
       $('#solution').text(solution.toFixed(2)).css('padding' ,'5px');
       
    })

})


    //RESETING THE DOM
$('.reset').click(function(){
$('.areaRect > input').val(this).empty();
$('#outPut > p ').val(this).empty();
$('#solution').text(this).empty();
})

})