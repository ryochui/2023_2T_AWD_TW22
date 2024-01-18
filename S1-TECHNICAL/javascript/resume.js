// Display color choices
var div = document.getElementById('section-nine');
var display = 0;

function showChoices(){
    if(display == 1){
        div.style.display = 'none';
        display = 0;
    }
    else{
        div.style.display = 'flex';
        display = 1;
    }
}

// Buttons
var red = document.getElementById('change-button-red');
var blue = document.getElementById('change-button-blue');
var green = document.getElementById('change-button-green');
var original = document.getElementById('change-original')

// Elements with main color
var svgPath = document.getElementsByClassName('svg-path');
var profileBioDesign = document.getElementsByClassName('profile-bio-design');
var contentBoxHeader = document.getElementsByClassName('content-box-header');
var circleTwo = document.getElementsByClassName('circle-two');
var skillBarOne = document.getElementsByClassName('skill-bar-one');
var skillBarTwo = document.getElementsByClassName('skill-bar-two');
var skillBarThree = document.getElementsByClassName('skill-bar-three');
var skillBarFour = document.getElementsByClassName('skill-bar-four');
var skillBarFive = document.getElementsByClassName('skill-bar-five');
var skillBarSix = document.getElementsByClassName('skill-bar-six');

// Elements with accent color
var circleOne = document.getElementsByClassName('circle');
var oblong = document.getElementsByClassName('oblong');

// Page background color
var backgroundColOne = document.getElementsByClassName('resume-body');
var backgroundColTwo = document.getElementsByClassName('resume-whitespace');
var backgroundColThree = document.getElementsByClassName('resume');

// Red Choice
red.addEventListener("click", ()=>{
    var colorRed = '#FF5C5C';
    var accentRed = '#FF9494';
    var backgroundRed = '#FFDFDF';
 
    for (var i = 0; i < svgPath.length; i++) {
        svgPath[i].style.fill = colorRed;
    }
 
    for (var i = 0; i < profileBioDesign.length; i++) {
        profileBioDesign[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < contentBoxHeader.length; i++) {
        contentBoxHeader[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < circleTwo.length; i++) {
        circleTwo[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarOne.length; i++) {
        skillBarOne[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarTwo.length; i++) {
        skillBarTwo[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarThree.length; i++) {
        skillBarThree[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarFour.length; i++) {
        skillBarFour[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarFive.length; i++) {
        skillBarFive[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < skillBarSix.length; i++) {
        skillBarSix[i].style.backgroundColor = colorRed;
    }

    for (var i = 0; i < circleOne.length; i++) {
        circleOne[i].style.backgroundColor = accentRed;
    }

    for (var i = 0; i < oblong.length; i++) {
        oblong[i].style.backgroundColor = accentRed;
    }

    for (var i = 0; i < backgroundColOne.length; i++) {
        backgroundColOne[i].style.backgroundColor = backgroundRed;
    }

    for (var i = 0; i < backgroundColTwo.length; i++) {
        backgroundColTwo[i].style.backgroundColor = backgroundRed;
    }

    for (var i = 0; i < backgroundColThree.length; i++) {
        backgroundColThree[i].style.backgroundColor = backgroundRed;
    }
 
 });

// Blue Choice
blue.addEventListener("click", ()=>{
    var colorBlue = '#8D99E6';
    var accentBlue = '#A5CAE8';
    var backgroundBlue = '#DBD8FF';
 
    for (var i = 0; i < svgPath.length; i++) {
        svgPath[i].style.fill = colorBlue;
    }
 
    for (var i = 0; i < profileBioDesign.length; i++) {
        profileBioDesign[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < contentBoxHeader.length; i++) {
        contentBoxHeader[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < circleTwo.length; i++) {
        circleTwo[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarOne.length; i++) {
        skillBarOne[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarTwo.length; i++) {
        skillBarTwo[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarThree.length; i++) {
        skillBarThree[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarFour.length; i++) {
        skillBarFour[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarFive.length; i++) {
        skillBarFive[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < skillBarSix.length; i++) {
        skillBarSix[i].style.backgroundColor = colorBlue;
    }

    for (var i = 0; i < circleOne.length; i++) {
        circleOne[i].style.backgroundColor = accentBlue;
    }

    for (var i = 0; i < oblong.length; i++) {
        oblong[i].style.backgroundColor = accentBlue;
    }

    for (var i = 0; i < backgroundColOne.length; i++) {
        backgroundColOne[i].style.backgroundColor = backgroundBlue;
    }

    for (var i = 0; i < backgroundColTwo.length; i++) {
        backgroundColTwo[i].style.backgroundColor = backgroundBlue;
    }

    for (var i = 0; i < backgroundColThree.length; i++) {
        backgroundColThree[i].style.backgroundColor = backgroundBlue;
    }
 
 });

// Green Choice
green.addEventListener("click", ()=>{
    var colorGreen = '#94E68D';
    var accentGreen = '#B1EFAB';
    var backgroundGreen = '#DBEFDF';
 
    for (var i = 0; i < svgPath.length; i++) {
        svgPath[i].style.fill = colorGreen;
    }
 
    for (var i = 0; i < profileBioDesign.length; i++) {
        profileBioDesign[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < contentBoxHeader.length; i++) {
        contentBoxHeader[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < circleTwo.length; i++) {
        circleTwo[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarOne.length; i++) {
        skillBarOne[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarTwo.length; i++) {
        skillBarTwo[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarThree.length; i++) {
        skillBarThree[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarFour.length; i++) {
        skillBarFour[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarFive.length; i++) {
        skillBarFive[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < skillBarSix.length; i++) {
        skillBarSix[i].style.backgroundColor = colorGreen;
    }

    for (var i = 0; i < circleOne.length; i++) {
        circleOne[i].style.backgroundColor = accentGreen;
    }

    for (var i = 0; i < oblong.length; i++) {
        oblong[i].style.backgroundColor = accentGreen;
    }

    for (var i = 0; i < backgroundColOne.length; i++) {
        backgroundColOne[i].style.backgroundColor = backgroundGreen;
    }

    for (var i = 0; i < backgroundColTwo.length; i++) {
        backgroundColTwo[i].style.backgroundColor = backgroundGreen;
    }

    for (var i = 0; i < backgroundColThree.length; i++) {
        backgroundColThree[i].style.backgroundColor = backgroundGreen;
    }
 
 });
 
 // Original
 original.addEventListener("click", ()=>{
    var colorOriginal = '#FFA03A';
    var accentOriginal = '#FEB2A6';
    var backgroundOriginal = '#EFE2DB';
 
    for (var i = 0; i < svgPath.length; i++) {
        svgPath[i].style.fill = colorOriginal;
    }
 
    for (var i = 0; i < profileBioDesign.length; i++) {
        profileBioDesign[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < contentBoxHeader.length; i++) {
        contentBoxHeader[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < circleTwo.length; i++) {
        circleTwo[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarOne.length; i++) {
        skillBarOne[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarTwo.length; i++) {
        skillBarTwo[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarThree.length; i++) {
        skillBarThree[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarFour.length; i++) {
        skillBarFour[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarFive.length; i++) {
        skillBarFive[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < skillBarSix.length; i++) {
        skillBarSix[i].style.backgroundColor = colorOriginal;
    }

    for (var i = 0; i < circleOne.length; i++) {
        circleOne[i].style.backgroundColor = accentOriginal;
    }

    for (var i = 0; i < oblong.length; i++) {
        oblong[i].style.backgroundColor = accentOriginal;
    }

    for (var i = 0; i < backgroundColOne.length; i++) {
        backgroundColOne[i].style.backgroundColor = backgroundOriginal;
    }

    for (var i = 0; i < backgroundColTwo.length; i++) {
        backgroundColTwo[i].style.backgroundColor = backgroundOriginal;
    }

    for (var i = 0; i < backgroundColThree.length; i++) {
        backgroundColThree[i].style.backgroundColor = backgroundOriginal;
    }
 
 });