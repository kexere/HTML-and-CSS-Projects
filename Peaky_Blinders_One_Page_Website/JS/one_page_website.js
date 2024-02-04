// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    //hide all slides
    for (i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = "none";
      }
    }
    //remove "active" from all dots
    for (i = 0; i < dots.length; i++) {
        if (dots[i]) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
    }
    //show the current slide
    if (slides[slideIndex-1]) {
        slides[slideIndex -1].style.display = "block";
    }
    //add "active to the current dot"
    if (dots[slideIndex -1]) {
        dots[slideIndex-1].className += " active";
    }

    //update cationText if alt is available
    if (dots[slideIndex -1] && dots[slideIndex -1].alt) {
    captionText.innerHTML = dots[slideIndex-1].alt;
    }
  }