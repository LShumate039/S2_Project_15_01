"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: 
   Date:   
   
   Filename: mpl_links.js

*/


window.onload = function () {

    //gives allSelcet value 
    var allSelect = document.forms.govLinks;

    // this lets all the websites load and appear 
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            window.location.href = e.target.value;

        }
    }
}