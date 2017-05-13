/**
 * Created by larryg on 5/12/17.
 */
"use strict";
$(document).ready(function () {
    "use strict";

    var initial = 1; //sets initial frame being shown
    var slideVar = "#slide-"; //variable for slides
    var current = initial; // tracks  current slide
    var speed = 3800;  // sets speed for auto play of slides
    var play = true;  // true will auto play false will not
    var playing;



    $(slideVar + initial).fadeIn();   // initial picture shown

    // will play slides if play is true
    if(play) {
        autoPlay();
        //will pause autoplay on hover and restart on enter
        $("#slide-1, #slide-2, #slide-3, #slide-4").hover(function () {
            stop();
        }, function () {
            play = true;
            autoPlay();
        });
    }

    // currently not used  tracking current with counters keep case of future need
    function currentSlide(){
        for(var i = 1; i <= 4; i++) {
            var display = $(slideVar + i).css("display");
            if (display === "inline") {
                current = i;
            }
        }
            return current;
    }

    // function for next button click
    $("#next").click(function(){
        if(current < 4){
            $(slideVar + current).hide();
            $(slideVar + (current+1)).fadeIn();
            current += 1;
        }else if(current = 4){
            $(slideVar + current).hide();
            $("#slide-1").fadeIn();
            current = 1;
        }
    });

    $("#prev").click(function(){
        if(current > 1){
            $(slideVar + current).hide();
            $(slideVar + (current-1)).fadeIn();
            current -= 1;
        }else if(current = 1){
            $(slideVar + current).hide();
            $("#slide-4").fadeIn();
            current = 4;
        }
    });

    // function to play slides automatically
    function autoPlay(){
         playing = setInterval(function(){
                if(current < 4){
                    $(slideVar + current).hide();
                    $(slideVar + (current+1)).fadeIn();
                    current += 1;
                }else if(current = 4){
                    $(slideVar + current).hide();
                    $("#slide-1").fadeIn();
                    current = 1;
                }
            }, speed);
    }

        // to stop auto play
    function stop(){
        clearInterval(playing);
    }

});