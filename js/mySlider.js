/**
 * Created by larryg on 5/12/17.
 */
"use strict";
$(document).ready(function () {
    "use strict";

    /*-----------variable declarations---------------*/

    var initial = 1; //sets initial frame being shown
    var slideVar = "#slide-"; //variable for slides
    var current = initial; // tracks  current slide
    var speed = 3800;  // sets speed for auto play of slides
    var play = true;  // true will auto play false will not
    var playing;


    // initial picture shown
    $(slideVar + initial).fadeIn();

    // will auto play slides if play is true
    if(play) {
        autoPlay();
        //will pause autoplay on hover and restart on mouse exit
        $("#sliderContainer").hover(function () {
            stop();
        }, function () {
            play = true;
            autoPlay();
        });
    }


    // function for next button click
    $("#next").click(function(){
        if(current < 6){
            $(slideVar + current).hide();
            $(slideVar + (current+1)).fadeIn();
            current += 1;
        }else if(current = 6){
            $(slideVar + current).hide();
            $("#slide-1").fadeIn();
            current = 1;
        }
    });

    // function for prev button click
    $("#prev").click(function(){
        if(current > 1){
            $(slideVar + current).hide();
            $(slideVar + (current-1)).fadeIn();
            current -= 1;
        }else if(current = 1){
            $(slideVar + current).hide();
            $("#slide-6").fadeIn();
            current = 6;
        }
    });

    // function to play slides automatically
    function autoPlay(){
         playing = setInterval(function(){
                if(current < 6){
                    $(slideVar + current).hide();
                    $(slideVar + (current+1)).fadeIn();
                    current += 1;
                }else if(current = 6){
                    $(slideVar + current).hide();
                    $("#slide-1").fadeIn();
                    current = 1;
                }
            }, speed);
    }

        // function to stop auto play
    function stop(){
        clearInterval(playing);
    }

});