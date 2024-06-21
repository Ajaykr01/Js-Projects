var typed = new Typed("#element", {
  strings: ["Web Developer", "Coder", "Youtuber", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 1500,
  loop: true,
});

function myfunction() {
  var element = document.body;

  var nav = document.getElementById("nav");
  element.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
}

var links = document.querySelectorAll(".nav-links");
var icon = document.querySelector("#menu-icon");
var flag = 1;
function expandMenu() {
  if (flag == 1) {
    links.forEach(function (link) {
      link.style.display = "block";
    });
    flag = 0;
  } else {
    links.forEach(function (link) {
      link.style.display = "none";
    });
    flag = 1;
  }
}
icon.addEventListener("click", expandMenu);

function printPdf() {
  var pdfFrame = document.getElementById("pdfFrame");
  pdfFrame.contentWindow.print();
}
