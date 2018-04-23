$(document).ready(function(){

  // This code is for isotope
  // external js: isotope.pkgd.js


  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


  // This code is for google map
  var map;
  map = new GMaps({
    el: '#google_map',
    lat: -12.043333,
    lng: -77.028333,
    zoomControl : true,
    zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
    },
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false
  });
    

  $(document).scroll(function (){
    var height = $(".navbar").height();


    if($(this).scrollTop() > height) {
      $(".navbar").css({
        "background-color" : "#434343",
        "height" : "108px"
      })
    } else {
      $(".navbar").css({
        "background-color" : "transparent"
        
      });
    }
  });


  // This code is for counter



    $('.single_counter').ready(function(){
        $('.project').animationCounter({
          start: 0,
          step: 5,
          end: 195,
          delay:50
        });
        $('.award').animationCounter({
          start: 0,
          step: 1,
          end: 27,
          delay:80
        });
        $('.customer').animationCounter({
          start: 0,
          end: 570,
          step: 10,
          delay: 50
        });
        $('.coffe').animationCounter({
          start: 0,
          end: 510,
          step: 10,
          delay: 50
        });
    });



    var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



  // This code is for Scroll To Top Button
  $(window).scroll(function (){
    if($(this).scrollTop() > 350) {
      $(".scroll_to_up").fadeIn();
    } else {
      $(".scroll_to_up").fadeOut();
    }
  });

  $(".scroll_to_up").click(function (){
    $("html, body").animate({
        scrollTop: 0
    }, 1000)
  });
 
});