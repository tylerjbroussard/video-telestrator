/*

var draw = function () {
    var canvas = document.getElementById('canvas');
    //var canvas = element.getElementsByClassName('canvas')[0];
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // you can begin to fill with your own code, example code commented

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);


    }
};
*/

//source from the downloadLink below, allows user to draw on canvas and download to png.

//https://codepo8.github.io/canvas-images-and-pixels/#download-attribute

//https://github.com/muaz-khan/RecordRTC/tree/master/Canvas-Recording

//https://recordrtc.org/

//https://docs.microsoft.com/en-us/uwp/api/Windows.Media.Playback.MediaPlayer

//https://github.com/Microsoft/Windows-universal-samples/tree/master/Samples/BackgroundMediaPlayback

//this whole thing is just an event listener

window.addEventListener('load', function (event) {
    //var sourceimage = document.querySelector('img');
    var canvas = document.querySelector('canvas');
    //var downloadLink = document.querySelector('a');
    var context = canvas.getContext('2d');
    var mouseX = 0, mouseY = 0, mousedown = false;
    canvas.width = 480;
    canvas.height = 270;
    canvas.style.background = "#dddddd";

    //this block defines the pencil color
    context.fillStyle = '#D3BA0E';

    //this function defines the draw feature, which is the strange two pixels it writes
        function draw(event) {
        if (mousedown) {
            var x = event.layerX;
            var y = event.layerY;
            //x = (Math.ceil(x / 10) * 10) - 10;y = (Math.ceil(y / 5) * 5) - 5;

            //this statment defines the pencil size
            context.fillRect(x, y, 5, 5);
        }
    }

    //this four statement block defines the download image downloadLink and inserts it into the html
    var downloadLink = document.createElement('a');
    downloadLink.innerHTML = 'download image';
    downloadLink.href = "#";
    downloadLink.download = "mypainting.jpeg";
    document.body.insertBefore(downloadLink, canvas);

    //these four statements add event listeners for mouse events

    //  1)
    canvas.addEventListener('mouseover', function (event) {
        document.body.classList.add('painted');
    }, false);

    //  2)
    canvas.addEventListener('mousemove', draw, false);

    //  3)
    canvas.addEventListener('mousedown', function (event) {
        mousedown = true;
    }, false);

    //  4)
    canvas.addEventListener('mouseup', function (event) {
        downloadLink.href = canvas.toDataURL('image/jpeg', 1.0);
        mousedown = false;
    }, false);
}, false);