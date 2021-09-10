var normal = document.querySelector('#normal-state');
var active = document.querySelector('#active-state');
var triangle = document.querySelector('#triangle');
var arrow = document.querySelector('#link-image-1')
var arrow2 = document.querySelector('#link-image-2');

// hides the author section, shows the footer - keeps the author section visible in desktop view when share arrow is clicked
function showActive() {
    active.style.display = "block";
    active.style.position = "auto";
    normal.style.display = "none";
    triangle.style.display = "block";
    if($(window).width() > 375){
        normal.style.display = "flex";
        arrow2.style.display = "block";
        arrow.style.display = "none";
    }
}

// hides the footer and triangle, shows the author section when share arrow2 is clicked
function hideActive() {
    active.style.display = "none";
    triangle.style.display = "block";
    normal.style.display = "flex";
    if(triangle.style.display = "block"){
        arrow.style.display = "flex";
    }
}