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
        $(".navbar-inverse").slideDown("slow");
    })
    var scroll = $(".scroll-arrow");
    scroll.animate({ 'top': '25px' });
    scroll.animate({ 'top': '0px' });
    scroll.animate({ 'top': '25px' });
    scroll.animate({ 'top': '0px' });

});


var viewportWidth, divWidth, tb;
$(function () {

    viewport = $('#container').innerWidth();
    tb = $('#thumbs');
    divWidth = tb.outerWidth();

    $('#container').mousemove(function (e) {
        tb.css({ left: ((viewport - divWidth) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + "px" });
    });

    $('.history-block').on('click', function () {
        $('.history-block').css('width', '300px');
        $('.history-block').find('.title').css('width', '260px');
        $('.history-block .timeline').hide(300);
        $(this).css('width', '600px');
        $(this).find('.title').css('width', '500px');
        $(this).find('.timeline').show(800);
        $('#container').mousemove(function (e) {
            tb.css({ left: ((viewport - divWidth - 300) * ((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
        });
    });

    $('.timeline ul li').on('click', function () {
        $(this).parent().blink();
    });
});



