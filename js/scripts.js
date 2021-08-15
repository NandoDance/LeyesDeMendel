/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    * 
    *
    */

const repsuesta1 = document.getElementById("huey").value; //chech
const bttnrepsuesta1 = document.getElementById("B1"); //botton

Function ;VAL()
{
    if( repsuesta1 == null || repsuesta1.length == 0) {
        alert('Error, rellena el campo correcto');
      return false;
      
      }else
      {console.log(repsuesta1);}
      /*if( repsuesta1 == "huey" ) {
        alert("Felicidades vamos al siguiente nivel");
        location.href="juego2.html"*/

}

    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    showModal()
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); 

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'l-gQLqv9f4o',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      //player is playing
    } else {
      //player is paused
    }
}

function stopVideo() {
    player.stopVideo();
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}


$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    playVideo();
});

$(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
  pauseVideo();
});

