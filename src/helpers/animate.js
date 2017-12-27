import $ from 'jquery';

function animate() {

  /* Handle closing bootstrap modal */

  let $modal = $('.modal');

  $modal.on('hidden.bs.modal', function(){
      $(this).find('form')[0].reset();
  });

  /* Toggle class on menu icon */

  let $menuIcon = $('.menu-icon');
  let $ul = $menuIcon.parent().next();

  $menuIcon.click(function() {
    $ul.toggleClass('expanded');
  });

  /* Animate image when scrolling to it */

  let $animatedIcons = $('.section-6'); // Add classnames here
  let $window = $(window);
  let lastScrollTop = 0;

  function checkIfInView() {
    let windowHeight = $window.height();
    let windowTopPosition = $window.scrollTop();
    let windowBottomPosition = windowTopPosition + windowHeight;

    $.each($animatedIcons, function() {
      let $element = $(this);
      let elementHeight = $element.outerHeight();
      let elementTopPosition = $element.offset().top;
      let elementBottomPosition = elementTopPosition + elementHeight;

      // check to see if this current container is within viewport
      if( /*(elementBottomPosition >= windowTopPosition) &&*/ (elementTopPosition <= windowBottomPosition) ) {
        $element.addClass('in-view');
      }
      else {
        $element.removeClass('in-view');
      }
    });

    /* Show the navbar if scrolling upwards */

    //if(windowTopPosition > 62) {
      if(windowTopPosition < lastScrollTop) {
        $('.section-1 .header').removeClass('scroll-down').addClass('scroll-up');
      }
      else {
        $('.section-1 .header').removeClass('scroll-up').addClass('scroll-down');
      }     
    //}
    /*else {
      $('.section-1 .header').removeClass('scoll-down').removeClass('scroll-up');
    }*/

    lastScrollTop = windowTopPosition;
  }

  $window.on('scroll', checkIfInView);

  /* Underline text when hovering over unrelated image */

  let $section6ImgLeft = $('.section-6 .image-left');
  let $section6TextLeft = $('.section-6 .content-left h1'); 

  let $section6ImgRight = $('.section-6 .image-right');
  let $section6TextRight = $('.section-6 .content-right h1'); 

  $section6ImgLeft.hover(
    function() {
      $section6TextLeft.addClass('underline');
    },
    function() {
      $section6TextLeft.removeClass('underline');
    }
  );

  $section6ImgRight.hover(
    function() {
      $section6TextRight.addClass('underline');
    },
    function() {
      $section6TextRight.removeClass('underline');
    }
  );

  /* Scroll to anchor text */
  let $html_body = $('html, body');

  $('a[href^=\\#]').click(function(e) { 
    e.preventDefault(); let dest = $(this).attr('href');
    $html_body.animate({ scrollTop: $(dest).offset().top }, 'slow');
  });
}

export default animate;
