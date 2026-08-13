document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        currentIndex = (index + slides.length) % slides.length;
        
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Eventos de botones
    nextBtn.addEventListener("click", () => { nextSlide(); resetTimer(); });
    prevBtn.addEventListener("click", () => { prevSlide(); resetTimer(); });

    // Eventos de puntos
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Autoplay cada 5 segundos
    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    startTimer();
});


//===================================
// RANGO DE PRECIOS
//===================================

$(document).ready(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 10000,
        max: 1000000,
        step: 5000,
        values: [ 100000, 400000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ].toLocaleString() + " - $" + ui.values[ 1 ].toLocaleString() );
            $( "#desde" ).val( ui.values[ 0 ] );
            $( "#hasta" ).val( ui.values[ 1 ] );
        }
    });

    // Seteo inicial visual
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ).toLocaleString() +
        " - $" + $( "#slider-range" ).slider( "values", 1 ).toLocaleString() );
});


  /*-------------------------------
  Counter Up
  ---------------------------------*/
    $('.about-counter').counterUp({
      delay: 50,
      time: 3000
    });
    //Property details one slider
    $('.big-photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.pagin-slider'
    });
    $('.pagin-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.big-photo',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });