/*this is a function declaration, function is cBehave and argument is x,y
 the trouble is that the parameter is being changed by the function but the value is not being passed globally to the variable outside,
 
 I think the solution is found in making the spreadsheet cells objects instead of a primitive parameter
 
 this assignment does work globally as a object*/

var aOne = { value: '0' };
var aTwo = { value: '0' };
var aThree = { value: '0' };
var aFour = { value: '0' };
var aFive = { value: '0' };
var bOne = { value: '0' };
var bTwo = { value: '0' };
var bThree = { value: '0' };
var bFour = { value: '0' };
var bFive = { value: '0' };
var cOne = { value: '0' };
var cTwo = { value: '0' };
var cThree = { value: '0' };
var cFour = { value: '0' };
var cFive = { value: '0' };
var dOne = { value: '0' };
var dTwo = { value: '0' };
var dThree = { value: '0' };
var dFour = { value: '0' };
var dFive = { value: '0' };
var eOne = { value: '0' };
var eTwo = { value: '0' };
var eThree = { value: '0' };
var eFour = { value: '0' };
var eFive = { value: '0' };


function cBehave(x, y) {
    var cell_assign = document.getElementById(x).value;
    (y).value = cell_assign;
    console.log(y);
}

//this is a subtraction function

function cSubtract(x, y) {
    return Number((x).value) - Number((y).value);
}

//this is a addition function

function cAddition(x, y) {
    return Number((x).value) + Number((y).value);
}

//this is a division function

function cDivision(x, y) {
    return Number((x).value) / Number((y).value);
}

//this is a multiplication function

function cMultiply(x, y) {
    return Number((x).value) * Number((y).value);
}

//this is script for the dynamic video player app in conjunction with videojs

var videocontainer = document.getElementById('videoclip'); //this id video clip should be the id of the video tag
var videosource = document.getElementById('mp4video'); //this id mp4video is the id of the child source tag within the parent video tag
var newmp4 = "video/manateefun.mp4";
var newposter = "images/Manatee Fun Screenshot_2.jpg";

var videobutton = document.getElementById("videolink1"); //this id is the id for your anchor tag to switch videos

videobutton.addEventListener("click", function (event) {
    videocontainer.pause();
    videosource.setAttribute('src', newmp4);
    videocontainer.load();
    //if you get ride of the videocontainer.play this will load the mp4 with the newposter
    videocontainer.play();
}, false);