$(window).on('load', function (e) {
  if (sessionStorage.getItem('websiteVisited') === null) {
        sessionStorage.setItem('websiteVisited', true);
  }
  else {
      //
  }
  var strokeoffset = $('#ciao').css('stroke-dashoffset');
  var length = $('#ciao').attr('r')*2*Math.PI;
  var strokeoffset = strokeoffset.substring(0, strokeoffset.length-2);
  var tempoMancante = 0;
  if(strokeoffset >= 0){
    if(strokeoffset === 0){
      tempoMancante = 2000;
    }else{
      tempoMancante = 2000+((1000*strokeoffset)/length);
    }
  }else{
    tempoMancante = 1000+(1000*(length-(Math.abs(strokeoffset)))/length);
  }
  $('#ciao').css({
    'display': 'none'
  });
  $('#ciao2').css({
    'display': 'inline',
    'stroke-dasharray': length+'px',
    'stroke-dashoffset': strokeoffset+'px',
    'animation': 'animationS '+tempoMancante+'ms linear 0s 1 normal forwards running'
  });

  $('#ciao2').addClass('ggs');

  var cssAnimation = document.createElement('style');
  cssAnimation.type = 'text/css';
  var rules = document.createTextNode(
    '.ggs{'+
      '-webkit-animation: animationS '+tempoMancante+'ms ease-in 0s 1 normal forwards running;'+
      '-moz-animation: animationS '+tempoMancante+'ms ease-in 0s 1 normal forwards running;'+
      'animation: animationS '+tempoMancante+'ms ease-in 0s 1 normal forwards running;'+
    '}'+
    '@-webkit-keyframes animationS{'+
      'from{stroke-dashoffset:'+ strokeoffset +'px;}'+
      'to{stroke-dashoffset:'+ -(length*2) +'px;}'+
    '}'+
    '@-moz-keyframes animationS{'+
      'from{stroke-dashoffset:'+ strokeoffset +'px;}'+
      'to{stroke-dashoffset:'+ -(length*2) +'px;}'+
    '}'+
    '@keyframes animationS{'+
      'from{stroke-dashoffset:'+ strokeoffset +'px;}'+
      'to{stroke-dashoffset:'+ -(length*2) +'px;}'+
    '}'
  );

  cssAnimation.appendChild(rules);
  document.getElementsByTagName("head")[0].appendChild(cssAnimation);
  animateLogo(tempoMancante);
});

function animateLogo(tempoMancante){

  var cssAnimation = document.createElement('style');
  cssAnimation.type = 'text/css';

  $('#logo').children().each(function(){
    var path = $(this)[0];
    var length = path.getTotalLength();

    var name = $(this).attr('data-name');

    var rules = document.createTextNode(
      '@-webkit-keyframes animation'+ name +'{'+
        'from{stroke-dashoffset:'+ length +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'+
      '@-moz-keyframes animation'+ name +'{'+
        'from{stroke-dashoffset:'+ length +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'+
      '@keyframes animation'+ name +'{'+
        'from{stroke-dashoffset:'+ length +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'
    );

    cssAnimation.appendChild(rules);

    $(this).addClass('animationLogo'+name);

    $(this).css({
      'stroke-dasharray': length +'px',
      'stroke-dashoffset': length +'px',
      'animation-name': 'animation'+ name
    });

  });
  document.getElementsByTagName("head")[0].appendChild(cssAnimation);
}
