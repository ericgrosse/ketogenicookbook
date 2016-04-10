/*$(document).ready(function() {

var $animatedIcons = $(); // Add classnames here
var $window = $(window);

function checkIfInView() {
	var windowHeight = $window.height();
	var windowTopPosition = $window.scrollTop();
	var windowBottomPosition = windowTopPosition + windowHeight;

	$.each($animatedIcons, function() {
		var $element = $(this);
		var elementHeight = $element.outerHeight();
		var elementTopPosition = $element.offset().top;
		var elementBottomPosition = elementTopPosition + elementHeight;

		// check to see if this current container is within viewport
		if( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
			$element.addClass('in-view');
		}
		else {
			$element.removeClass('in-view');
		}
	});
}

$window.on('scroll resize', checkIfInView);
$window.trigger('scroll'); // trigger the scroll event as soon as the DOM is ready

});*/

$(document).ready(function() {

	var $section6ImgLeft = $('.section-6-image-left');
	var $section7TextLeft = $('.section-7-content-left h1'); 

	var $section6ImgRight = $('.section-6-image-right');
	var $section7TextRight = $('.section-7-content-right h1'); 

	$section6ImgLeft.hover(
		function() {
			$section7TextLeft.css('text-decoration', 'underline');
		},
		function() {
			$section7TextLeft.css('text-decoration', '');
		}
	);

	$section6ImgRight.hover(
		function() {
			$section7TextRight.css('text-decoration', 'underline');
		},
		function() {
			$section7TextRight.css('text-decoration', '');
		}
	);
});