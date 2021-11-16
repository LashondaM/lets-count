"use strict";
var nbr = 0;
var strings = []; // an empty array of strings in typescript
var change = function (n) {
    nbr += n;
    display();
};
var display = function () {
    var num = document.getElementById("num");
    if (num != null) {
        num.value = nbr.toString();
        // num.style.width = "200px";
        num.style.color = (nbr % 2 == 0) ? "blue" : "black";
        num.style.fontWeight = (nbr % 1 == 0) ? "bold" : "normal";
    }
};
