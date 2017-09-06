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
    var play = false;  // true will auto play false will not
    var playing;
    var lastSlide = 4; // total number of slides

    // initially hides all slides except for first slide
    for(var i = 2; i <= lastSlide; i++){
        $(slideVar + i).hide();
    }

    // // initial picture shown
    // $(slideVar + initial).fadeIn();

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
        if(current < lastSlide){
            $(slideVar + current).hide();
            $(slideVar + (current+1)).fadeIn();
            current += 1;
        }else if(current = lastSlide){
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
            $("#slide-" + lastSlide).fadeIn();
            current = lastSlide;
        }
    });

    // function to play slides automatically
    function autoPlay(){
         playing = setInterval(function(){
                if(current < lastSlide){
                    $(slideVar + current).hide();
                    $(slideVar + (current+1)).fadeIn();
                    current += 1;
                }else if(current = lastSlide){
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