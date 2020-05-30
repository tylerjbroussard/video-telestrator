module.exports = {
  mainGetResponse: (req, res) => {
    let testVideo = "https://www.youtube.com/watch?v=cXE586A-7Do";

    let urlUpdate;

    urlUpdate = testVideo;

    res.render("pages/main", {
      title: "Success",
      response: urlUpdate,
    });
  },

  mainPostResponse: (req, res) => {
    console.log(`Video URL input: ${req.body.videoUrl}`);
    let s_userInput = req.body.videoUrl;

    let testVideo = "https://www.youtube.com/watch?v=cXE586A-7Do";

    let urlUpdate;

    if (s_userInput != undefined) {
      urlUpdate = s_userInput;
    } else {
      urlUpdate = testVideo;
    }

    res.render("pages/main", {
      title: "Success",
      response: urlUpdate,
    });
  },
};

/* 

need to parse input url from 

https://vimeo.com/40648169

to

https://player.vimeo.com/video/40648169"


*/
