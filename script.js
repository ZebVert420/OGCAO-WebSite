window.addEventListener('load', function() {
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
