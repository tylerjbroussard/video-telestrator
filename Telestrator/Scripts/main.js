const fileInput = document.querySelector('input[type="file"]');
var videoPlayer = document.getElementById("mainVideo"),
    testVideo = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv",
    playButton = document.getElementById("pressPlay"),
    pauseButton = document.getElementById("pressPause"),
    screenShotButton = document.getElementById("pressScreenShot"),
    loadOnBody = document.getElementById("bodyLoad"),
    pickVideoButton = document.getElementById("videoPick"),
    inputButton = document.getElementById("hiddenInput"),
    pickVideo = function () {

        inputButton.click();

        const selectedFile = fileInput.files.item(0);

        const reader = new FileReader();

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }

        reader.addEventListener("load", function () {
            videoPlayer.src = reader.result;
        }, false);


    }; 

//IIFE to play media
(function () {
    'use strict';
    videoPlayer.setAttribute("src", testVideo);
    playButton.addEventListener("click", function () {
        videoPlayer.play();
    }, false);
    pauseButton.addEventListener("click", function () {
        videoPlayer.pause();
    }, false);
    pickVideoButton.addEventListener("click", function () {
        pickVideo();
    }, false);
})();
