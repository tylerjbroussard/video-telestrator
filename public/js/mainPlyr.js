// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
//const player = new Plyr('#player');
const player = new Plyr('#player');
window.player = player;
const videoDiv = $('#videoSpace');
const urlSubmit = $('#urlSubmit');
const iframevideo = $('#iframeVideo');
const s_youTube = 'youtube';
var s_userInput; 

var getId = function(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) 
    {
        return match[2];
    } else 
    {
        return 'error';
    }
};


var addVideo = function(vendor, videoId){
    videoDiv.html(`<h1>Test</h1><div id="player" data-plyr-provider="${vendor}" data-plyr-embed-id="${videoId}">`);    

    //const player has to be redeclared 
    
    // Expose player so it can be used from the console
};


urlSubmit.click(function(){
    s_userInput = $('#urlBar').val(); 
    var s_videoId = getId(s_userInput);
    addVideo(s_youTube, s_videoId);
});


