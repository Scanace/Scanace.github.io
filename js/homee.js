function openMenu(){
    var openMenu = document.getElementById("openMenu");
    var menu = document.getElementById("menu");
    style = window.getComputedStyle(openMenu);
    right = style.getPropertyValue('right').replace(/[^-\d\.]/g, '');
    if(right < 400){
        openMenu.innerHTML = "close menu";
        openMenu.style.right = "auto";
        openMenu.style.left = "0%";
        openMenu.style.animationName = "moveLeftMenu";
        menu.style.display = "block";
        menu.style.animationName = "openMenu";
    }
    else{
        openMenu.innerHTML = "open menu";
        openMenu.style.right = "0%";
        openMenu.style.left = "auto";
        openMenu.style.animationName = "moveRightMenu";
        menu.style.animationName = "closeMenu";
        setTimeout("closeMenu()", 2000);
    }
}

function  closeMenu(){
    document.getElementById("menu").style.display = "none";
}