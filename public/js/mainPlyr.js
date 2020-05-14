// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const videoDiv = $('#videoSpace');

// Expose player so it can be used from the console



var addVideo = function(vendor, videoId){
    videoDiv.html(`<h1>Test</h1><div id="player" data-plyr-provider="${vendor}" data-plyr-embed-id="${videoId}">`);
    const player = new Plyr('#player');
    window.player = player;
};

addVideo('youtube', 'nIkHXY1QbVE');


//const player has to be redeclared 