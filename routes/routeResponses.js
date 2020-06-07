module.exports = {
  mainGetResponse: (req, res) => {
    let testVideo = "https://player.vimeo.com/video/40648169";

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

    let vimeo = /vimeo/;

    //let regexpres = new RegExp(vimeo);

    if (s_userInput.search(vimeo) != -1) {
      let id = s_userInput.split(/vimeo.com/);
      console.log(id);
      s_userInput = `https://player.vimeo.com/video${id[1]}`;
      console.log(`New s_userInput = ${s_userInput}`);
    }

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


Regex test






*/
