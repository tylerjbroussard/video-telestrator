//var videoPlayer = document.getElementById("mainVideo");

//var video01 = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv";

//var playVideo = function (a) {
//    videoPlayer.pause();            
//    videoPlayer.setAttribute("src", (a));                            
//};

//playVideo(video01);

(function () {
    'use strict';

    var videoPlayer = document.getElementById("mainVideo");
    var video01 = "https://mediaplatstorage1.blob.core.windows.net/windows-universal-samples-media/elephantsdream-clip-h264_sd-aac_eng-aac_spa-aac_eng_commentary-srt_eng-srt_por-srt_swe.mkv";

    videoPlayer.pause();
    videoPlayer.setAttribute("src", (video01));    
})();