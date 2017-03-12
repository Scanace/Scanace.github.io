$('video')[0].volume = 0.3;

$('video').bind('ended', function(){
   $(this).fadeOut()
})
