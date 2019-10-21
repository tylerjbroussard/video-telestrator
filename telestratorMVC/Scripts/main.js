//the pickVideo feature needs to be updated for web delivery

//variable list
var videoPlayer = document.getElementById("mainVideo"),
    video01 = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv",
    playButton = document.getElementById("pressPlay"),
    pauseButton = document.getElementById("pressPause"),
    screenShotButton = document.getElementById("pressScreenShot"),
    loadOnBody = document.getElementById("bodyLoad"),
    videoButton = document.getElementById("videoOpen"),
    pickVideo = function () {
        var openPicker = new Windows.Storage.Pickers.FileOpenPicker(); //fix needed
        openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail; //fix
        openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.videosLibrary;//fix 
        openPicker.fileTypeFilter.replaceAll([".mp4", ".mkv", ".avi"]);//fix

        openPicker.pickSingleFileAsync().then(
            function (file) {
                //var video = document.getElementById("mainVideo");
                videoPlayer.src = URL.createObjectURL(file, { oneTimeOnly: true });
            });
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
    videoButton.addEventListener("click", pickVideo, false);
})();
