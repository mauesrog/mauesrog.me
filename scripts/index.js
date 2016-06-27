/*
* Mauricio Esquivel Rogel
* 06/26/2016
* Javascript of sample webpage animating a 2 photo slideshow of my friends
*/

window.onload = function(){
  try {
    var windowWidth = $("body").width();
    var scrolledEnough = false; // Move title between fake header and real header

    var realHeader = $(".header");
    var fakeHeader = $("#illusion");
    var image = $(".main img");

    //Set the header's width to the window's width
    realHeader.css("width", windowWidth);

    $(window).scroll(function(){
      try {
        var totalScroll = $("body").scrollTop();

        // If total top scroll is big enough to put the title in the real header
        if (totalScroll >= 63){
          if (!scrolledEnough){
            scrolledEnough = true;

            // Hide title from fake header
            fakeHeader.find("h1")
                      .css("opacity", 0);

            // Show title in real header
            realHeader.find("h1")
                      .css("opacity", 1);

            // Enable the button to invert the colors of the photo
            realHeader.find("#menu")
                      .css({"opacity": 1, "color": "#FFF"});

          }

        } else if (scrolledEnough){
            scrolledEnough = false;

            // Show title in fake header
            fakeHeader.find("h1")
                      .css("opacity", 1);

            // Hide title from real header
            realHeader.find("h1")
                      .css("opacity", 0);

            // Disable the button to invert the colors of the photo
            realHeader.find("#menu")
                      .css({"opacity": 0.6, "color": "gray"});
        }

      } catch(err){
        console.error(err);
      }
    });

    //Make the header resizable in case the window's width changes
    $(window).resize(function(){
      try {
        realHeader.css("width", $(window).width());

      } catch(err){
        console.error(err);
      }
    });

    // Invert the colors image
    realHeader.find("#menu")
              .on("click", function(){
                  try {
                    image.toggleClass("invert");

                  } catch(err){
                    console.error(err);
                  }
                });

    // Change the photo
    realHeader.find("#next")
              .on("click", function(){
                  try {
                    // Animate the disappearance of the current photo
                    image.toggleClass("rotate");

                    // To do after animation finishes i.e. 1s
                    setTimeout(function(){
                      try {
                        var newImage;

                        // Decide what the current photo is
                        if (image.attr("id") == "image1"){
                          newImage = $("<img src='friends2.jpg' id='image2'></img>");

                        } else {
                          newImage = $("<img src='friends.jpg' id='image1'></img>");
                        }

                        image.remove();

                        // Add new image and animate its appearance
                        image = newImage.appendTo(".main")
                                        .toggleClass("appearing");

                      } catch(err){
                        console.error(err);
                      }
                    }, 1000);

                  } catch(err){
                    console.error(err);
                  }
                });

  } catch(err){
    console.error(err);
  }
};
