/**
 * Created by larryg on 5/4/17.
 */
"use strict";
$(document).ready(function () {

    // click event to animate menu into view
    $("#logoCircle, #menuClick").click(function(){
        $("#menuContainer").fadeToggle(3000);
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

    })

});