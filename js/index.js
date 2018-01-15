$(window).on('load', function (e) {
  if (sessionStorage.getItem('websiteVisited') === null) {
    finishLoading(true);
    console.log('notVisited');
    sessionStorage.setItem('websiteVisited', true);
  }
  else {
    console.log('visited');
    finishLoading(false);
  }
});

function finishLoading(logoAnimation){
  var loader = $('#loader');

  var loaderPathLength = 2*(Math.PI)*$(loader).attr('r');
  var loaderStrokeDashOffset = $(loader).css('stroke-dashoffset').replace(/[^-\d\.]/g, '');

  if(loaderStrokeDashOffset >= 0){
    if(loaderStrokeDashOffset === 0){
      var missingTime = 2000;
    }else{
      var missingTime = 2000+((1000*loaderStrokeDashOffset)/loaderPathLength);
    }
  }else{
    var missingTime = 1000+(1000*(loaderPathLength-(Math.abs(loaderStrokeDashOffset)))/loaderPathLength);
  }
  var missingTime = (1000*loaderStrokeDashOffset)/loaderPathLength

  $(loader).css({
    'stroke-dasharray': loaderPathLength+'px',
    'stroke-dashoffset': loaderStrokeDashOffset+'px',
    'animation': 'animationS '+missingTime+'ms linear 1 forwards'
  });

  var cssAnimation = document.createElement('style');
  cssAnimation.id = 'intro';
  cssAnimation.type = 'text/css';

  var rules = document.createTextNode(
    '@-webkit-keyframes animationS{'+
      'from{stroke-dashoffset:'+ loaderStrokeDashOffset +'px;}'+
      'to{stroke-dashoffset: 0.1px;}'+
    '}'+
    '@-moz-keyframes animationS{'+
      'from{stroke-dashoffset:'+ loaderStrokeDashOffset +'px;}'+
      'to{stroke-dashoffset: 0.1px;}'+
    '}'+
    '@keyframes animationS{'+
      'from{stroke-dashoffset:'+ loaderStrokeDashOffset +'px;}'+
      'to{stroke-dashoffset: 0.1px;}'+
    '}'
  );

  cssAnimation.appendChild(rules);

  if(true){
    animateLogo(cssAnimation, missingTime);
  }

  document.getElementsByTagName("head")[0].appendChild(cssAnimation);
  setTimeout(function(){
    alert("Website currently under construction, please, return in a few weeks. Thank you for the patience.");
  }, missingTime+4000);
}

function animateLogo(cssAnimation, missingTime){
  $('#logo').children().each(function(i){
    var path = this;
    var pathLength = path.getTotalLength();

    missingTime = parseFloat(missingTime)+(i*1000)+500;

    $(this).css({
      'display':'inline',
      'stroke-dasharray': pathLength +'px',
      'stroke-dashoffset': pathLength +'px',
      'animation': '1000ms ease-in '+missingTime+'ms 1 forwards animation'+i
    });

    var rules = document.createTextNode(
      '@-webkit-keyframes animation'+ i +'{'+
        'from{stroke-dashoffset:'+ pathLength +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'+
      '@-moz-keyframes animation'+ i +'{'+
        'from{stroke-dashoffset:'+ pathLength +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'+
      '@keyframes animation'+ i +'{'+
        'from{stroke-dashoffset:'+ pathLength +'px;}'+
        'to{stroke-dashoffset:0.1px;}'+
      '}'
    );
    cssAnimation.appendChild(rules);
  });

}
