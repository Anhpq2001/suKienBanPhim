// ham xu ly nhan phim len
function upArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
// ham xu ly nhan phim xuong
function downArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
// ham xu ly nhan phim sang phai
function rightArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
// ham xu ly nhan phim sang trai
function leftArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
// ham nhan cac phim khac
function moveSelection(evt){
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

// ham xu ly event
function doReady(){
    window.addEventListener('keydown', moveSelection);
}