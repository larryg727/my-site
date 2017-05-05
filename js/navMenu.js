/**
 * Created by larryg on 5/4/17.
 */
"use strict";
$(document).ready(function () {

    var section;

    //function to check if variable object in viewport
    $.fn.inView = function () {
        //Window Object
        var win = $(window);
        //Object to Check
        var obj;
        obj = $(section);
        //the top Scroll Position in the page
        var scrollPosition = win.scrollTop();
        //the end of the visible area in the page, starting from the scroll position
        var visibleArea = win.scrollTop() + win.height();
        //the end of the object to check
        var objEndPos = (obj.offset().top + obj.outerHeight()) - 100;
        return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
    };

    //only runs scroll animations on screens above tis size
    if ($(window).width() > 767) {
        $(window).scroll(function () {
            section = "#aboutSec";
            if ($("#aboutSec").inView()) {
                $("#aboutSec").parent().removeClass("unactiveSec");
                $("#aboutPic").animate({
                    right: "0"
                }, 1000);
                $("#aboutInfo").slideDown(1500);
                $("#skillSec").slideDown(1500);
                $("#aboutInfo").css("display", "inline-block");
            }
        });
    }

    // scroll funtions to remove dark overlay on sections when scroll
    $(window).scroll(function () {
        section = "#portBack";
        if ($("#portBack").inView()) {
            $("#portBack").removeClass("unactiveSec");

        }
    });

    $(window).scroll(function () {
        section = "#blogBack";
        if ($("#blogBack").inView()) {
            $("#blogBack").removeClass("unactiveSec");

        }
    });

    $(window).scroll(function () {
        section = "#contactBack";
        if ($("#contactBack").inView()) {
            $("#contactBack").removeClass("unactiveSec");

        }
    });

    // initialize slider
    $(".portfolioSlider").slick({
        dots: true,
        autoplay:true,
         speed: 500,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    // click event to animate menu into view
    $("#logoCircle, #menuClick").click(function () {
        $("#menuContainer").fadeIn(3000);
        $("#menuClick").css("visibility", "hidden");
        $("#contactBtn").animate({
            top: "415px",
            right: "485px"
        }, 1000);
        $("#aboutBtn").animate({
            top: "483px",
            right: "370px"
        }, 1000);
        $("#logoCircle").animate({
            top: "180px"
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