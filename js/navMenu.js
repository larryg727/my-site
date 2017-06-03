/**
 * Created by larryg on 5/4/17.
 */
"use strict";
$(document).ready(function () {

    /*-----------variable declarations---------------------*/

    var section; // variable for to specify section for scroll functions
    var mobileTop; // variable to adjust the mobile nav animations for different screen sizes


    /*---------------functions----------------------------*/

    //function at screen load for welcome section animations
    function welcomeAnimation() {
        $("#welcome").fadeIn(2000);

        $("#nameSay").fadeIn(200);
        if ($(window).width() > 725) {
            $("#nameSay").animate({
                top: "240px"
            }, 2400)
        } else if ($(window).width() > 460) {
            $("#nameSay").animate({
                top: "140px"
            }, 2400)
        } else if ($(window).width() > 380) {
            $("#nameSay").animate({
                top: "120px"
            }, 2400)
        } else {
            $("#nameSay").animate({
                top: "115px"
            }, 2400)
        }
        setTimeout(function () {
            $('#intro').slideDown(1300);
        }, 1450);
    }


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
        var objEndPos = (obj.offset().top + obj.outerHeight()) * .95;
        return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
    };

    // scroll function that makes about section active and initializes animations
    function aboutSection() {
        $(window).scroll(function () {
            section = "#aboutSec";
            if ($("#aboutSec").inView()) {
                $("#aboutSec").parent().removeClass("unactiveSec");
                if ($(window).width() > 850) {
                    $("#aboutPic").animate({
                        left: "55%"
                    }, 1000);
                }
                $("#aboutInfo").slideDown(1500);
                $("#aboutInfo").css("display", "inline-block");
            }
        });
    }


    //function to remove overlay and intialize animation on scroll section
    // function skillSection() {
    //     $(window).scroll(function () {
    //         section = "#skillSec";
    //         if ($("#skillSec").inView()) {
    //             $("#skillSec").removeClass("unactiveSec");
    //             $(".skillImg").slideDown(1300);
    //             $(".skillImg").css("display", "inline-block");
    //         }
    //     });
    // }

    // scroll functions to remove dark overlay on sections when scroll
    function makeActive(sectionId) {
        $(window).scroll(function () {
            section = sectionId;
            if ($(sectionId).inView()) {
                $(sectionId).removeClass("unactiveSec");

            }
        });
    }


    //function for desktop nav menu animations
    function desktopNavAni() {
        $("#menuContainer").fadeIn(3000);
        $("#menuClick").css("visibility", "hidden");
        $("#icon1").animate({
            right: "50%",
            "margin-right": "115px"
        }, 1000);
        $("#icon2").animate({
            right: "50%",
            top: "10px",
            "margin-right": "45px"
        }, 1100);
        $("#icon3").animate({
            right: "50%",
            top: "10px",
            "margin-right": "-25px"
        }, 1200);
        $("#icon4").animate({
            right: "50%",
            top: "10px",
            "margin-right": "-95px"
        }, 1300);
        $("#icon5").animate({
            right: "50%",
            top: "10px",
            "margin-right": "-165px"
        }, 1400);
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
        $("#headerContactIcons").css("display", "block");
        // timeout prevents hover from interrupting initial animation
        setTimeout(function () {
            $(".menuBtn").hover(function () {
                $(this).stop(true, false).animate({"font-size": "1.3em"});
            }, function () {
                $(this).stop(true, false).animate({"font-size": "1em"});
            });
        }, 2000);
    }


    // function for mobile nav menu animations
    function mobileNavAni() {
        $("#mobileNav").slideDown();
        $("#menuClick").css("visibility", "hidden");
        $("#icon1").animate({
            right: "50%",
            "margin-right": "115px",
            top: mobileTop
        }, 1000);
        $("#icon2").animate({
            right: "50%",
            top: mobileTop,
            "margin-right": "45px"
        }, 1100);
        $("#icon3").animate({
            right: "50%",
            top: mobileTop,
            "margin-right": "-25px"
        }, 1150);
        $("#icon4").animate({
            right: "50%",
            top: mobileTop,
            "margin-right": "-95px"
        }, 1250);
        $("#icon5").animate({
            right: "50%",
            top: mobileTop,
            "margin-right": "-165px"
        }, 1350);
    }

    /*-----calling functions to initialize animations and event listeners------*/

    // click event to animate menus into view depending on window size
    $("#logoCircle, #menuClick").click(function () {
        if ($(window).width() > 725) {
            desktopNavAni();
        } else if ($(window).width() > 460) {
            mobileTop = "220px";
            mobileNavAni();
        } else if ($(window).width() > 390) {
            mobileTop = "210px";
            mobileNavAni();
        } else {
            mobileTop = "200px";
            mobileNavAni();
        }

    });

    $('#blogMore').click(function (){
        $(this).hide();
        $('#hidden').slideDown();
    });

    welcomeAnimation();
    aboutSection();
    // skillSection();
    makeActive("#skillSec");
    makeActive("#portBack");
    makeActive("#blogBack");
    makeActive("#contactBack");

});