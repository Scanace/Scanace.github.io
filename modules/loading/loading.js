function pageLoading(){
  firstAppear();
  secondAppear();
  fadeOutLoadingFrame();
}

function firstAppear(){
  firstAppear = document.getElementById('firstAppear');
  setTimeout(function(){
    firstAppear.style.WebkitAnimation = 'toOpacity 2s';
    firstAppear.style.animation = 'toOpacity 2s';
    firstAppear.style.opacity = '1';
  }, 1000);
}

function secondAppear(){
  secondAppear = document.getElementById('secondAppear');
  setTimeout(function(){
    secondAppear.style.WebkitAnimation = 'toOpacity 2s';
    secondAppear.style.animation = 'toOpacity 2s';
    secondAppear.style.opacity = '1';
  }, 3000);
}

function fadeOutLoadingFrame(){
  loadingFrame = document.getElementById('loadingFrame');
  setTimeout(function(){
    loadingFrame.style.WebkitAnimation = 'moveOut 2s';
    loadingFrame.style.animation = 'moveOut 2s';
    secondAppear.style.opacity = '0';
    setTimeout(function(){
      loadingFrame.style.display ='none';
    }, 2000)
  }, 5000);

}
