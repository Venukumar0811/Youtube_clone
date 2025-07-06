var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}
let index = 0;
const bimg = document.querySelectorAll(".banner img");

function changeImage() {
    bimg[index].classList.remove("active");
    index = (index + 1) % bimg.length;
    bimg[index].classList.add("active");
}

setInterval(changeImage, 3000);