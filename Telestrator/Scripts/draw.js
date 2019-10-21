//variable list
var canvas,
    stage,
    drawingCanvas,
    oldPt,
    oldMidPt,
    title,
    color,
    stroke,
    colors,
    index,
    drawButton = document.getElementById("pressDraw"),
    loadOnBody = document.getElementById("bodyLoad"),
    clearButton = document.getElementById("pressClear");

    
//IIFE to play media
(function () {
    'use strict';
    drawButton.addEventListener("click", init, false);
    clearButton.addEventListener("click", function () {
        stage.clear();
    }, false);
})();

function init() {
    canvas = document.getElementById("myCanvas");
    index = 0;

    //pen color
    colors = ["yellow"];

    //check to see if we are running in a browser with touch support
    stage = new createjs.Stage(canvas);
    stage.autoClear = false;
    stage.enableDOMEvents(true);

    createjs.Touch.enable(stage);
    createjs.Ticker.framerate = 24;

    drawingCanvas = new createjs.Shape();

    stage.addEventListener("stagemousedown", handleMouseDown);
    stage.addEventListener("stagemouseup", handleMouseUp);

    title = new createjs.Text("Canvas Here", "36px Arial", "yellow");
    title.x = 100;
    title.y = 200;
    stage.addChild(title);

    stage.addChild(drawingCanvas);
    stage.update();
}

function handleMouseDown(event) {
    if (!event.primary) { return; }
    if (stage.contains(title)) {
        stage.clear();
        stage.removeChild(title);
    }
    color = colors[(index++) % colors.length];
    stroke = 5;
    oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
    oldMidPt = oldPt.clone();
    stage.addEventListener("stagemousemove", handleMouseMove);
}

function handleMouseMove(event) {
    if (!event.primary) { return; }
    var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

    drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

    oldPt.x = stage.mouseX;
    oldPt.y = stage.mouseY;

    oldMidPt.x = midPt.x;
    oldMidPt.y = midPt.y;

    stage.update();
}

function handleMouseUp(event) {
    if (!event.primary) { return; }
    stage.removeEventListener("stagemousemove", handleMouseMove);
}