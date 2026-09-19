(function ($) {
 "use strict";

/***************************************
 jQuery MeanMenu activation code
 ***************************************/
$('nav#dropdown').meanmenu({
  siteLogo: "<a href='index.html'><img src='images/logofrase.png' style='height:100px;'/></a>"
});
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 Property Slider
------------------------------ */  
  $(".property-slider").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
      items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
 
/*----------------------------
 Agent Slider
------------------------------ */  
  $(".agent-slider").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,   
      items : 4,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
 
/*----------------------------
 About Slider
------------------------------ */  
  $(".about-feature").owlCarousel({
    autoPlay: true, 
    slideSpeed:1000,
    pagination:false,
    navigation:false,	  
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });

/*-------------------------------------
Price filtering activation  
---------------------------------------*/
    $( "#slider-range" ).slider({
     range: true,
     min: 1,
     max: 999999,
     values: [ 100000, 400000 ],
     slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    $( "#desde" ).val(ui.values[ 0 ]);
    $( "#hasta" ).val(ui.values[ 1 ]);
     }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
     " - $" + $( "#slider-range" ).slider( "values", 1 ) ); 
    
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
/*-------------------------------
Fancybox
---------------------------------*/   
  $('.fancybox').fancybox();  
/*-------------------------------
Isotope
---------------------------------*/ 

// use document.ready instead of window.load
// window.load waits for all resources to be loaded first,
// can be a long time
jQuery(function () {
  // now doc is ready, make selection
  // use another selector, not .isotope,
  // since that is dynamically added in Isotope v1
  var $container = jQuery('.grid');
  
    // filter items on button click
    $('.property-menu ul').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
    });
  // use imagesLoaded, instead of window.load
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
       percentPosition: true,
      // masonry is default layoutMode, no need to specify it
      sortBy: 'random',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });
  })
});


  /*--------------------------
  bxslider
  ---------------------------- */ 
    //Testimonial slider     
    $('.client-content').bxSlider({
      pagerCustom: '.client-img'
    });

    //Property details slider    
    $('.bg-photo').bxSlider({
      pagerCustom: '.sm-photo'
    });  

  /*-----------------------------------
  Subscribe From
  -------------------------------------*/
  $('button').on('click',function(){
    $('button').html('<i class="ionicons ion-load-c spin"></i>');
    $('button').addClass("iconize");
    // $('input').attr("disabled", "true");
    setTimeout(function(){
    $('button').html('<i class="ionicons ion-checkmark"></i>');
    }, 1000);



  });
  /*-----------------------------------
  Home Two Menu Slde
  -------------------------------------*/
  $('.bar-menu >a').on('click',function(){
    $('.main-menu.mean-menu1').toggleClass( "show-menu" );
  }); 
  /*-------------------------------------
  Client logo jQuery activation code
  -------------------------------------*/
    $(".client-logo-area").owlCarousel({       
        // Most important owl features
        autoPlay: true,
        items : 6,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,
        // Navigation
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        // Responsive 
        responsive: true,
        pagination:false,
     
    });
    /*-------------------------------------
    Home Page Blog area jQuery activation
    -------------------------------------*/
        $(".latest-blog").owlCarousel({         
            // Most important owl features
            autoPlay: true,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
            // Navigation
            navigation : true,
            navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            // Responsive 
            responsive: true,
            pagination:false,
         
        });
    /*-------------------------------------
    Home Page Blog area jQuery activation
    -------------------------------------*/
        $(".property-image-slider").owlCarousel({         
            autoPlay: true, 
            slideSpeed:1000,
            pagination:false,
            navigation:false,   
            items : 1,
            /* transitionStyle : "fade", */    /* [This code for animation ] */
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [479,1],         
        });
    /*
    -----------------------------------
    Header Sticky Menu Creation
    -----------------------------------*/
    $(window).on('scroll', function(){
      if( $(window).scrollTop()>100 ){
        $('#sticky').addClass('stick');
        }else {
        $('#sticky').removeClass('stick');
      }
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
  /*-------------------------
  Nice Select JQuery 
  ---------------------------*/
  $('select').niceSelect();


  /*-------------------------
  jQuery Page Loader
  --------------------------*/
  $("#loading").delay(2000).fadeOut(500);


})(jQuery); 


document.addEventListener("DOMContentLoaded", function() {
    // 1. Mapeo de Localidades y Barrios
    const barriosPorLocalidad = {
        "posadas": ["Centro", "Villa Sarita", "Villa Blosset", "Palomar", "Aero Club", "Bahía El Brete"],
        "garupa": ["Garupá", "Santa Inés"],
        "candelaria": ["La Candelaria"]
    };

    const selectLoc = document.querySelector('select[name="loc"]');
    const selectBarrio = document.querySelector('select[name="b"]');

    if (selectLoc && selectBarrio) {
        selectLoc.addEventListener('change', function() {
            const locSeleccionada = this.value.toLowerCase();
            
            // Limpiar opciones de barrio dejando solo la opción por defecto
            selectBarrio.innerHTML = '<option value="All">Barrio</option>';

            if (barriosPorLocalidad[locSeleccionada]) {
                barriosPorLocalidad[locSeleccionada].forEach(barrio => {
                    const option = document.createElement('option');
                    option.value = barrio.toUpperCase();
                    option.textContent = barrio;
                    selectBarrio.appendChild(option);
                });
                selectBarrio.disabled = false;
            } else {
                // Si elige "All" u otra opción sin mapeo
                selectBarrio.disabled = (locSeleccionada === "all");
            }
        });
    }
});

$(document).ready(function() {

    // --- A. INICIALIZACIÓN DEL SLIDER DE PRECIOS ---
    var minPrecio = 0;
    var maxPrecio = 1000000;

    $("#slider-range").slider({
        range: true,
        min: minPrecio,
        max: maxPrecio,
        step: 10000,
        values: [100000, 500000],
        slide: function(event, ui) {
            // Actualiza visualmente el texto
            $("#amount").val("$" + ui.values[0].toLocaleString() + " - $" + ui.values[1].toLocaleString());
            $("#desde").val(ui.values[0]);
            $("#hasta").val(ui.values[1]);
        },
        change: function(event, ui) {
            // Aplica el filtro dinámico al soltar el slider
            filtrarPropiedadesFront();
        }
    });

    // Setea texto inicial
    $("#amount").val("$" + $("#slider-range").slider("values", 0).toLocaleString() +
        " - $" + $("#slider-range").slider("values", 1).toLocaleString());


    // --- B. EVENTOS DE CAMBIO EN LOS SELECTS ---
    $('select[name="ope"], select[name="tipo"], select[name="a1"], select[name="loc"]').on('change', function() {
        filtrarPropiedadesFront();
    });


    // --- C. FUNCIÓN PRINCIPAL DE FILTRADO EN TIEMPO REAL ---
    function filtrarPropiedadesFront() {
        var opeSelected = $('select[name="ope"]').val();
        var tipoSelected = $('select[name="tipo"]').val();
        var ambSelected = $('select[name="a1"]').val();
        var locSelected = $('select[name="loc"]').val();
        
        var precioMin = parseInt($("#desde").val()) || minPrecio;
        var precioMax = parseInt($("#hasta").val()) || maxPrecio;

        var visibles = 0;

        $('.item-propiedad').each(function() {
            var $item = $(this);
            
            var itemOpe = $item.data('operacion');
            var itemTipo = $item.data('tipo');
            var itemAmb = $item.data('ambientes');
            var itemLoc = $item.data('localidad');
            var itemPrecio = parseInt($item.data('precio'));

            // Validaciones
            var matchOpe = (opeSelected === 'All' || opeSelected == itemOpe);
            var matchTipo = (tipoSelected === 'All' || tipoSelected == itemTipo);
            var matchAmb = (ambSelected === 'All' || ambSelected == itemAmb);
            var matchLoc = (locSelected === 'All' || locSelected == itemLoc);
            var matchPrecio = (itemPrecio >= precioMin && itemPrecio <= precioMax);

            // Mostrar u ocultar con transición suave
            if (matchOpe && matchTipo && matchAmb && matchLoc && matchPrecio) {
                $item.stop().fadeIn(300);
                visibles++;
            } else {
                $item.stop().fadeOut(200);
            }
        });

        // Mensaje de feedback visual si no hay resultados
        if (visibles === 0) {
            if ($('#no-results-msg').length === 0) {
                $('.propiedad-row').after('<p id="no-results-msg" class="text-center mt-4">No se encontraron propiedades con esos filtros.</p>');
            }
        } else {
            $('#no-results-msg').remove();
        }
    }

    // --- D. PREVENIR ENVÍO DE FORMULARIO (SOLO DEMO) ---
    $('.info-form form').on('submit', function(e) {
        e.preventDefault(); // Evita recargar la página para mantener la presentación fluida
        filtrarPropiedadesFront();
    });
});