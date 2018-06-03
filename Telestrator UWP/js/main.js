//variable list
var videoPlayer = document.getElementById("mainVideo"),
    video01 = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv",
    playButton = document.getElementById("pressPlay"),
    pauseButton = document.getElementById("pressPause"),
    drawButton = document.getElementById("pressDraw"),
    screenShotButton = document.getElementById("pressScreenShot"),
    clearButton = document.getElementById("pressClear");


//IIFE to play media
(function () {
    'use strict';
    videoPlayer.setAttribute("src", (video01));
    playButton.addEventListener("click", function () {
        videoPlayer.play()
    }, false);
    pauseButton.addEventListener("click", function () {
        videoPlayer.pause()
    }, false);
})();