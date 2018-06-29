$(document).ready(function() {

  var list = document.querySelector('.first-nav ul');
  list.addEventListener('mouseover', function(e) {
    var target = e.target;
    if(target.localName === 'img') {
      if(target.nextSibling.nextSibling.localName === 'span') {
        target = target.nextSibling.nextSibling;
        target.style.opacity = '0.8';
      }
    }
    if(target.localName === 'span') {
      target.style.opacity = '0.8';
    }

  })

  list.addEventListener('mouseout', function(e) {
    var target = e.target;
    if(target.localName === 'img') {
      if(target.nextSibling.nextSibling.localName === 'span') {
        target = target.nextSibling.nextSibling;
        target.style.opacity = '0';
      }
    }
    if(target.localName === 'span') {
      target.style.opacity = '0';
    }

  })

/* For the sticky navigation */

$('.js--dinamo').waypoint(function(direction) {
    if(direction == 'down') {
      $('.second-nav').addClass('sticky');
    } else {
      $('.second-nav').removeClass('sticky');
    }
}, {
  offset: '60px;'
});

/*  Smooth scrolling */

  $('.js--scroll-to-dinamo').click(function() {
     $('html, body').animate({scrollTop: $('.js--dinamo').offset().top}, 2000)
   });

   $('.js--scroll-to-milan').click(function() {
      $('html, body').animate({scrollTop: $('.js--milan').offset().top}, 5000)
    });

    $('.js--scroll-to-chelsea').click(function() {
       $('html, body').animate({scrollTop: $('.js--chelsea').offset().top}, 10000)
     });

     $('.js--scroll-to-milan_back').click(function() {
        $('html, body').animate({scrollTop: $('.js--milan_back').offset().top}, 12000)
      });

      $('.js--scroll-to-dinamo_back').click(function() {
         $('html, body').animate({scrollTop: $('.js--dinamo_back').offset().top}, 16000)
       });

       $('.js--scroll-to-national').click(function() {
          $('html, body').animate({scrollTop: $('.js--national').offset().top}, 18000)
        });

        $('.js--scroll-to-coach').click(function() {
           $('html, body').animate({scrollTop: $('.js--coach').offset().top}, 20000)
         });




    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }

      })

/* Animations on scroll */

      $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
      }, {
        offset: '70%'
      });

      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
      }, {
        offset: '60%'
      });

      $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInRight');
      }, {
        offset: '60%'
      });

      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
      }, {
        offset: '60%'
      });

      $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInUp');
      }, {
        offset: '60%'
      });

      $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
      }, {
        offset: '60%'
      });

      $("blockquote").typer({
        strings: [
          "Lascio il Milan per motivi familiari, ringrazio la società per tutto quello che mi ha dato e anche perché mi ha ascoltato e ha valutato la mia volontà di trasferimento. Non c'è un problema di rapporti e men che meno un problema economico"
        ],
        typeSpeed: 100,
        backspaceSpeed: 20,
        backspaceDelay: 800,
        repeatDelay: 0,
        repeat: true,
        autoStart: true,
        startDelay: 100,
      });

var button = document.querySelector('.mobile-nav');
button.addEventListener('click', function() {
  if(document.querySelector('.second-nav ul').style.display === 'none') {
    document.querySelector('.second-nav ul').style.display = 'block';
    document.querySelector('.second-nav').style.backgroundColor = 'rgba(0,0,0,0.8)';
  } else {
    document.querySelector('.second-nav ul').style.display = 'none';
    document.querySelector('.second-nav').style.backgroundColor = 'transparent';
  }
})



});
