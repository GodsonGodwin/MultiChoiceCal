 //Getting the document ready
 $('.sidebar').hide();

    $.ajax({
       url:'/standard/standard.html',
       type:'GET',
       success: function(data){
           $('#keyboard').html($(data));
       }
    });
    var calType = $(('a[href="standard"]')).text();
    $('#calculatorType').html(calType);



 $('document').ready(function(){
    
     /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
     $(".openbtn").click(function (e) {
        $(".openbtn").hide();
         $('.sidebar').show();
         $("#mySidebar").css('width', '350px');
         $("#main").css('width', '350px');

     })

     /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
     $(".closebtn").click(function (e) {
        $(".openbtn").show();
         $("#mySidebar").css('width', '0px');
         $("#main").css('width', '0px');

     })

     $(".sidebar").mouseleave(function (e) {
        $(".openbtn").show();
         $("#mySidebar").css('width', '0px');
         $("#main").css('width', '0px');

     })     

     $(('a[href="area"')).hover(function(){
         $('#myDropdown').css('display', 'block');

     })

     $("#myDropdown").mouseleave(function (e) {
        $(".dropdown-content").css('display', 'none');

     })

     //ABOUT
     $('a[href="about"]').click(function (e) {
        e.preventDefault();
            $(".about").animate({
              backgroundPositionX: "100px", 
              backgroundPositionY: "2000px"
            }).show();

            $(".close").click(function (e) {
                $(".about").hide();
        
             })
        
     })
    
    // STANDARD CALCULATOR
    $(('a[href="standard"]')).click(function(e){
        e.preventDefault();
        $.ajax({
           url:'/standard/standard.html',
           type:'GET',
           success: function(data){
               $('#keyboard').html($(data));
           }
        });
        var calType = $(('a[href="standard"]')).text();
        $('#calculatorType').html(calType);
    })


    // LINEAR EQUATION
     $(('a[href="linearEquation"]')).click(function(e){
         e.preventDefault();
         $.ajax({
            url:'/linear/linear.html',
            type:'GET',
            success: function(data){
                $('#keyboard').html($(data));
            }
         });
         var calType = $(('a[href="linearEquation"]')).text();
         $('#calculatorType').html(calType);
         
     })

     //SIMULTANEOUS EQUATION
     $(('a[href="simulEquation"]')).click(function(e){
        e.preventDefault();
        $.ajax({
            url:'/simult/twoVariable.html',
            type:'GET',
            success: function(data){
                $('#keyboard').html($(data));
            }
         });
         var calType = $(('a[href="simulEquation"]')).text();
         $('#calculatorType').html(calType);
    
        })


        //QUARDAtIC EQUATION
     $(('a[href="quadraticEquation"]')).click(function(e){
        e.preventDefault();
        $.ajax({
            url:'/quadratic/quadratic.html',
            type:'GET',
            success: function(data){
                $('#keyboard').html($(data));
            }
         });
         var calType = $(('a[href="quadraticEquation"]')).text();
         $('#calculatorType').html(calType);
    
        })

        //RECtANGLE
        $(('a[href="rectangle"]')).click(function(e){
            e.preventDefault();
            $.ajax({
                url:'/area/rect.html',
                type:'GET',
                success: function(data){
                    $('#keyboard').html($(data));
                }
             });
             var calType = 'Area of ' + $(('a[href="rectangle"]')).text();
             $('#calculatorType').html(calType);
        
            })

        //SQUARE
        $(('a[href="square"]')).click(function(e){
            e.preventDefault();
            $.ajax({
                url:'/area/square.html',
                type:'GET',
                success: function(data){
                    $('#keyboard').html($(data));
                }
             });
             var calType = 'Area of ' + $(('a[href="square"]')).text();
             $('#calculatorType').html(calType);
        
            })

            //CIRCLE
            $(('a[href="circle"]')).click(function(e){
                e.preventDefault();
                $.ajax({
                    url:'/area/circle.html',
                    type:'GET',
                    success: function(data){
                        $('#keyboard').html($(data));
                    }
                 });
                 var calType = 'Area of ' + $(('a[href="circle"]')).text();
                 $('#calculatorType').html(calType);
            
                })

                //TRIANGLE
                $(('a[href="triangle"]')).click(function(e){
                    e.preventDefault();
                    $.ajax({
                        url:'/area/triangle.html',
                        type:'GET',
                        success: function(data){
                            $('#keyboard').html($(data));
                        }
                     });
                     var calType = 'Area of ' + $(('a[href="triangle"]')).text();
                     $('#calculatorType').html(calType);
                
                    })

                     //TRAPEZIUM
                $(('a[href="trapezium"]')).click(function(e){
                    e.preventDefault();
                    $.ajax({
                        url:'/area/trapezium.html',
                        type:'GET',
                        success: function(data){
                            $('#keyboard').html($(data));
                        }
                     });
                     var calType = 'Area of ' + $(('a[href="trapezium"]')).text();
                     $('#calculatorType').html(calType);
                
                    })

                    //PARALLELOGRAM
                    $(('a[href="parallel"]')).click(function(e){
                        e.preventDefault();
                        $.ajax({
                            url:'/area/rect.html',
                            type:'GET',
                            success: function(data){
                                $('#keyboard').html($(data));
                            }
                         });
                         
                         var calType = 'Area of ' + $(('a[href="parallel"]')).text();
                         $('#calculatorType').html(calType);
                        
                         setTimeout(function(){
                            var placeHolder = $('#length');
                            var placeHolder2 = $('#breadth');

                            $(placeHolder).attr("placeholder", "Breadth");
                            $(placeHolder2).attr("placeholder", "Height");

                            $('.output').click(function(){
                                area =`Area = breadth x height `;
                                $('#rectOutput-value').html(area).css({
                                    float:'left',
                                    paddingLeft: '20px'});

                             })

                        }, 1000);

                    
                        })

                         //AREA OF CONE
                $(('a[href="cone"]')).click(function(e){
                    e.preventDefault();
                    $.ajax({
                        url:'/area/cone.html',
                        type:'GET',
                        success: function(data){
                            $('#keyboard').html($(data));
                        }
                     });
                     var calType = 'Area of ' + $(('a[href="cone"]')).text();
                     $('#calculatorType').html(calType);
                
                    })
                       
                        
                })

                    

                        

                        
    

   