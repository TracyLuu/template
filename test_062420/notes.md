### 062420 Notes:
-Research different types of carousels.
-Trevor's codepen example: https://codepen.io/dark_Matter/pen/wvwdYgX


//W3Schools Example of Slideshow Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("slideractive");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("slideractive");
}
