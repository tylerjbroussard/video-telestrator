var videoPlayer = document.getElementById("mainVideo"),
    video01 = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv",
    playButton = document.getElementById("pressPlay"),
    pauseButton = document.getElementById("pressPause"),
    screenShotButton = document.getElementById("pressScreenShot"),
    loadOnBody = document.getElementById("bodyLoad"),
    pickVideoButton = document.getElementById("videoPick"),
    fileInput = document.getElementById("hiddenInput"),

    //fix this section
    pickVideo = function () {
        //const openPicker = new FileReader();  
        alert("test");
        fileInput.click();
    }; 

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
    pickVideoButton.addEventListener("click", function () {
        alert("test");
    }, false);
})();
