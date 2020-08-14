$(document).mousemove(function(e) {
	const cursor = $('#cursor');
	const target = $(event.target);
	cursor.css('left', e.clientX-15).css('top', e.clientY-15);

	const isLinkTag = target.is('a');
	const isHovered = cursor.hasClass('hoveredCursor');

	if(isLinkTag && !isHovered) {
		cursor.addClass('hoveredCursor');
	}
	else if(!isLinkTag && isHovered) {
		cursor.removeClass('hoveredCursor');
	}
});

$(document).mouseleave(function(e) {
	const cursor = $('#cursor');
	cursor.hide()
});

$(document).mouseenter(function(e) {
	const cursor = $('#cursor');
	cursor.show()
});

anime.timeline({})
	.add({
		targets: '.line',
		opacity: [0.5, 1],
		scaleX: [0, 0.25],
		easing: 'easeInOutExpo',
		duration: 700
	})
	.add({
		targets: '.letters-top',
		opacity: [0, 1],
		translateY: [25, -10],
		easing: 'easeOutExpo',
		duration: 500
	})
	.add({
		targets: '.letters-bottom',
		opacity: [0, 0.75],
		translateY: [-10, 15],
		easing: 'easeOutExpo',
		duration: 500
	})
	.add({
		targets: '.line',
		opacity: [1, 0],
		scaleX: [0.25, 0],
		easing: 'easeInOutExpo',
		duration: 700
	})