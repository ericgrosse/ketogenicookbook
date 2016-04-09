$(document).ready(function() {

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

});