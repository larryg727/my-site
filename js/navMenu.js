/**
 * Created by larryg on 5/4/17.
 */
"use strict";
$(document).ready(function () {
    // initialize slider
    $(".portfolioSlider").slick({
        dots: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    // click event to animate menu into view
    $("#logoCircle, #menuClick").click(function () {
        $("#menuContainer").fadeToggle(3000);
        $("#menuClick").css("visibility", "hidden");
        $("#contactBtn").animate({
            top: "415px",
            right: "485px"
        }, 1000);
        $("#aboutBtn").animate({
            top: "483px",
            right: "370px"
        }, 1000);
        $("#homeBtn").animate({
            top: "505px",
            right: "245px"
        }, 1000);
        $("#portfolioBtn").animate({
            top: "483px",
            right: "120px"
        }, 1000);
        $("#blogBtn").animate({
            top: "420px",
            right: "10px"
        }, 1000);

        // timeout prevents hover from interrupting initial animation
        setTimeout(function(){
            $(".menuBtn").hover(function () {
                $(this).stop(true, false).animate({"font-size": "1.3em"});
            }, function () {
                $(this).stop(true, false).animate({"font-size": "1em"});
            });
        }, 2000);

    });



});