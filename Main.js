$(document).ready(function(){

var fromTop = 0;

/*example in jsbin http://jsbin.com/fiwaxeduco/edit?html,css,js,output*/

/*4/15/2011  5/30/2011  5/31/2011  6/1/2011  1/5/2012  1/6/2012  1/13/2013*/

  $(window).scroll(function(){

   fromTop = $(window).scrollTop();
   console.log(fromTop);




    if(fromTop > 3000 ){
       // if we have scrolled MORE than 3000 pixels use this image

      $("#wrapper").css({"border":"10px solid green"});
      $("body").css({"background-color":"lightblue"});



      $("#dragonShield").css({
           "background-image" : "images/Fyrune Cooperative Symbol.png"
           });

      $("#dragonShield").text("April 15, 2011");


    } else {
      // else if we have scrolled LESS than 3000 pixels use this image

      $("#wrapper").css({"border":"1px solid black"});
      $("body").css({"background-color":"darkred"});

      $("#dragonShield2").css({
         "background-image" : "images/DS2Logo2.png"
       });
      $("#dragonShield2").text("May 30, 2011");



    }//end if statement

    if(fromTop < 8600){
         $("#dragonShield").css({
     "top" : 100 + fromTop * 1.065 +"px"
   });
    } else {
       $("#dragonShield2").css({
     "top" : 8600 +"px"
   });
    }

  });

});
