var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    player.playVideo();
    // Mute!
    player.mute();
}

$(document).ready(function () {
    $(".page2").hover(function () {
        $("h1").animate({ left: '0px' }, 1550);
        $("p").animate({ right: '0px' }, 1250);
    });
    $(".page2").hover(function () {
        $("nav").slideDown(1500);
    })
    $(".page4").hover(function () {
        $(".cube-format").animate({ left: '0px' }, 1550);
    });
});

