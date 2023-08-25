


window.addEventListener('load', function() {
    // Récupération de l'élément du loader
    var  loader = document.getElementById('loader');
    // Attente de 1 seconde avant de cacher le loader
	setTimeout(function() {
		loader.classList.add('hidden');
	}, 1000);

    window.addEventListener("scroll", function() {
        var divs = document.querySelectorAll(".div-accueil");
        var background = document.querySelector("#accueil");
        var navbar = document.querySelector(".navbar");
        var navbarHeight = navbar.offsetHeight;
        var accueilHeight = document.querySelector("#accueil").offsetHeight;
        var divHeight = divs.item(0).offsetHeight;

        if (window.scrollY < accueilHeight + navbarHeight - divHeight * 1) {
            divs.item(0).style.transform = "translateY(" + (window.scrollY * 0.25) + "px)";
        }

        divs.item(1).style.transform = "translateY(" + (window.scrollY) + "px)";
    
        background.style.transform = "translateY(" + (window.scrollY * 0.5) + "px)";

    });

});


jQuery(document).ready(function ($) {
	var feedbackSlider = $(".feedback-slider");
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 10000,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: [
			"<span class='feedback-slider-prev position-relative'><i class='fa fa-long-arrow-left'></i></span>",
            "<span class='feedback-slider-next'><i class='fa fa-long-arrow-right'></i></span>"
		],
		responsive: {
			// breakpoint from 767 up
			767: {
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function () {
		$(".feedback-slider-item h3")
			.removeClass("animated fadeIn")
			.css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.removeClass("animated zoomIn")
			.css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function () {
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.addClass("animated zoomIn")
			.css("opacity", "1");
	});
	feedbackSlider.on("changed.owl.carousel", function (property) {
		var current = property.item.index;
		var prevThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("img")
			.attr("src");
		var nextThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("img")
			.attr("src");
		var prevRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("span")
			.attr("data-rating");
		var nextRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("span")
			.attr("data-rating");
		$(".thumb-prev").find("img").attr("src", prevThumb);
		$(".thumb-next").find("img").attr("src", nextThumb);
		$(".thumb-prev")
			.find("span")
			.next()
			.html(prevRating + '<i class="fa fa-star"></i>');
		$(".thumb-next")
			.find("span")
			.next()
			.html(nextRating + '<i class="fa fa-star"></i>');
	});
	$(".thumb-next").on("click", function () {
		feedbackSlider.trigger("next.owl.carousel", [1000]);
		return false;
	});
	$(".thumb-prev").on("click", function () {
		feedbackSlider.trigger("prev.owl.carousel", [1000]);
		return false;
	});
}); //end ready
