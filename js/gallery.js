var slideIndex = 0;

showSlides(0, 0);
showSlides(0, 1);

// Next/previous controls
function plusSlides(n, d) {
  slideIndex += n;
	showSlides(slideIndex, d);
  console.log("d: ",d );
}

// Thumbnail image controls
function currentSlide(n, d) {
  slideIndex = n;
  showSlides(n, d);
}

function showSlides(n, d) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
  // var slides = document.getElementsByClassName(displayDivClassName);
  // var dots = document.getElementsByClassName(thumbnailDivName);
	var dots = document.getElementsByClassName("thumnbailImg");
  var dNumberBegin = 0;
  var dNumber = 0;

  dNumberBegin = slides.length - (d+1) * 5;
  dNumber = dNumberBegin + n;


	if (n > slides.length) {
    slideIndex = 0;
  }
	if (n < 0) {
    slideIndex = 0;
  }
	for (i = dNumberBegin; i < (dNumberBegin+5); i++) {
		slides[i].style.display = "none";
	}
	for (i = dNumberBegin; i < (dNumberBegin+5); i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[dNumber].style.display = "block";
	dots[dNumber].className += " active";
}
