var urls = ["http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/mib.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/passengers.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/spiderman_farfromhome.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/spiderman_homecoming.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/spiderman_intothespiderverse.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/theequilizer2.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/venom.mp4", "http://esprit.neoastra.com.s3-website.ap-south-1.amazonaws.com/videos/whiteboyrick.mp4"];
var thumbnails = ["./assets/movies walls/mib.jpg", "./assets/movies walls/passengers.jpg", "./assets/movies walls/farfromhome.jpg", "./assets/movies walls/homecoming.jpg", "./assets/movies walls/spiderverse.jpg", "./assets/movies walls/theequalizer2.jpg", "./assets/movies walls/venom.jpg", "./assets/movies walls/whiteboyrick.jpg"];
var movieData = ''
var selectedIndex = 0
$(document).ready(() => {
    var video = document.getElementById("myVideo2");

    $('#videoPlay').click(() => {
        let index = $("#videoPlay").attr('movieIndex')
        $('body').addClass('hide-scroll');
        selectedIndex = index
        $('.videoModal').show();
        video.pause();
        video.load();
         //$('#'+videoID).attr('poster', newposter); //Change video poster
        video.play();
    });

    video.ontimeupdate = function() {
        populate_story_parameters(video.currentTime)
    };

    $('.close-modal').click(() => {
        $('body').removeClass('hide-scroll');
        video.pause();
        $('.videoModal').hide();
    })


    //append data to carousel
    var wallList = "";
    $.getJSON("../assets/movies.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        movieData = json;
        $.each(json, (index, item) => {
            wallList += '<a class="movieItem" movieIndex="'+index+'"><div class="item"><img src="'+item.wallUrl+'" alt="m1"></div></a>'
        })
        
        changeSeletion(0)

        $('.movie-carousel').append(wallList);
        $('.movie-carousel').slick({
            initialSlide: 0,
            slidesToShow: 6,
            slidesToScroll: 6,
        });
        $('.movie-carousel').slick('refresh');
            //carousel click
    $('a').click(function(e) {
        e.preventDefault();
        let index = $(this).attr('movieIndex')
        changeSeletion(index)
        console.log('clicked')
      });
    });


})

function populate_story_parameters(currenttime) {
    console.log("api_url_substring = " + movieData[selectedIndex].urlSubString);
    console.log("ui.currentTime = " + currenttime);
    let url = "https://3wdnquj525.execute-api.ap-south-1.amazonaws.com/dev/video/" + movieData[selectedIndex].urlSubString + "/frame/" + parseInt(currenttime * 24 + 24);
    console.log("url = " + url);
    fetch(url).then(function(response) {
        response.json().then(function(data) {
            var ul = document.getElementById("story-parameters");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data));
            var divli = document.createElement("li");
            divli.appendChild(document.createTextNode(data));
            divli.className = "card-li";
            ul.insertBefore(divli, ul.firstChild);
            if (data.includes("tie")) {
                ad = "tie";
                adredirectingurl = "https://www.gucci.com/us/en/ca/men/accessories-for-men/ties-c-men-accessories-ties"
            } else if (data.includes("keyboard")) {
                ad = "keyboard";
                adredirectingurl = "https://steelseries.com/gaming-keyboards/apex-pro#apex-pro-us"
            } else if (data.includes("laptop")) {
                ad = "laptop";
                adredirectingurl = "https://www.dell.com/en-in/shop/cty/pdp/spd/alienware-17-area51m-laptop#carousel-example-with-caption"
            } else if (data.includes("boat")) {
                ad = "boat";
                adredirectingurl = "https://www.yachtworld.co.uk/"
            } else if (data.includes("cell phone")) {
                ad = "cellphone";
                adredirectingurl = "https://www.samsung.com/in/smartphones/"
            } else if (data.includes("car")) {
                ad = "ford";
                adredirectingurl = "https://www.india.ford.com/cars/mustang/"
            } else if (data.includes("chair")) {
                ad = "chair";
                adredirectingurl = "https://www.featherlitefurniture.com/products/office-chairs"
            } else if (data.includes("bagpack")) {
                ad = "bagpack";
                adredirectingurl = "https://www.nike.com/in/w/mens-bags-backpacks-9xy71znik1"
            } else if (data.includes("tvmonitor")) {
                ad = "samsung";
                adredirectingurl = "https://www.samsung.com/us/televisions-home-theater/tvs/qled-8k-tvs/98-class-q900-qled-smart-8k-uhd-tv-2019-qn98q900rbfxza/"
            }
            adurl = "./assets/ads/" + ad + ".jpeg";
            $("#image").attr("src", adurl);
            $("#link").attr("href", adredirectingurl);
            if (ul.childElementCount > 10) {
                var ul = document.getElementById("story-parameters");
                ul.removeChild(ul.lastElementChild)
            }
        })
    }).catch(function(err) { console.log("err is" + err) })
}



function changeSeletion(index){
    let json = movieData[index]
    $('.esprit-content__video-desc h1').html(json.title)
    $('.esprit-content__video-desc p').html(json.description)
    var tags = ''
    $.each(json.tags, (index, item) => {
        tags += item + ' | '
    })
    $('.esprit-content__video-desc span').html(tags)
    $('body').css('background-image', 'url(' + json.backgroundImage + ')');
    $('#videoPlay').attr('movieIndex', index);
    $('#video-source').attr('src', json.videoUrl)
    $('#video-source').attr('poster', json.backgroundImage)
}
// .modal-backdrop classes

$(".modal-transparent").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
  });
  $(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  });
  
  $(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
  