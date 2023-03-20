// Side bar navigation, open close action
function openNav() {
  document.getElementById("mySidebar").style.width = "550px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

pdfLinks[i].addEventListener("click", function (event) {
  event.preventDefault();
  window.open(this.href, "_blank");
});

var pdfLinks = document.querySelectorAll(".pdf-link a");
for (var i = 0; i < pdfLinks.length; i++) {
  if (!(i == 2 || i == 5 || i == 9)) {
    pdfLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      onclick = window.open(this.href, "_blank");
    });
  }
}
