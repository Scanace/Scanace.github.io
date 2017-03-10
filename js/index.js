$('video')[0].volume = 0.2;

$(document).ready(function(){
    $('video').hover(function(){
        $(this).get(0).play();
        }, function(){
        $(this).get(0).pause();
        $(this).get(0).load();
    });
})
