$(document).ready(function(){

	$('.fancybox').fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none'
	});

	$('.flexslider').flexslider({ 
		animation: "slide",
		slideshow: false,
		controlNav: "thumbnails",
		manualControls: "flexslider__control-thumbs",
		directionNav: false,
		namespace: "flexslider__",
		selector: ".flexslider__slides > li",
	});

	// select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			$(this).parents(".js-select").find(".js-select-text").addClass('is-active');
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
	 });
	};
	select();

	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

//tab
function tab() {
	$(".js-tab").each(function(){
		var tab_link = $(this).find("a");
		var tab_item = $(this).find("li");
		var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
		tab_cont.hide();
		tab_item.first().addClass("is-active");
		$(this).parents(".js-tab-group").find(".js-tab1").show();
		tab_link.on("click", function() {
			var index = $(this).attr("href");
			tab_item.removeClass("is-active");
			$(this).parent().addClass("is-active");
			tab_cont.hide();
			$(this).parents(".js-tab-group").find("."+index).show();
			return false;
		});
		});
} tab();

// sticky footer
$(function() {
    var footerHeight = $(".footer-wrap").height();
    $(".out").css("margin-bottom", -footerHeight);
    $(".push").css("height", footerHeight);
});

$(window).resize(function() {
    var footerHeight = $(".footer-wrap").height();
    $(".out").css("margin-bottom", -footerHeight);
    $(".push").css("height", footerHeight);
});

});