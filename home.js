// Side bar navigation, open close action
function openNav() {
  document.getElementById("mySidebar").style.width = "550px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Open pdf files in pop up screen when clicked
var pdfLinks = document.querySelectorAll(".pdf-link a");
for (var i = 0; i < pdfLinks.length; i++) {
  //  alert(pdfLinks.length);
  // alert(pdfLinks[i].getAttribute("href").length);

  if (!(i == 2 || i == 5 || i == 9)) {
    // skip

    pdfLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      var popup = document.createElement("div");
      popup.classList.add("pdf-popup");
      var closeBtn = document.createElement("button");
      closeBtn.innerText = "Close";
      closeBtn.addEventListener("click", function () {
        popup.remove();
      });
      popup.appendChild(closeBtn);
      var pdfIframe = document.createElement("iframe");
      pdfIframe.src = this.href;
      popup.appendChild(pdfIframe);
      document.body.appendChild(popup);
      popup.style.display = "block";
    });
  } // skip
}
// Side bar navigation, open close action
function openNav() {
  document.getElementById("mySidebar").style.width = "550px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Open pdf files in pop up screen when clicked
var pdfLinks = document.querySelectorAll(".pdf-link a");
for (var i = 0; i < pdfLinks.length; i++) {
  // alert(pdfLinks.length);
  // alert(pdfLinks[i].getAttribute("href").length);
  // skip the menues that do not have hyperlinked pdfs
  if (!(i == 2 || i == 5 || i == 9)) {
    pdfLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      var popup = document.createElement("div");
      popup.classList.add("pdf-popup");
      var closeBtn = document.createElement("button");
      closeBtn.innerText = "Close";
      closeBtn.addEventListener("click", function () {
        popup.remove();
      });
      popup.appendChild(closeBtn);
      var pdfIframe = document.createElement("iframe");
      pdfIframe.src = this.href;
      popup.appendChild(pdfIframe);
      document.body.appendChild(popup);
      popup.style.display = "block";
    });
  } // skip
}
