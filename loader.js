window.addEventListener('load', function() {
    // Récupération de l'élément du loader
    var loader = document.getElementById('loader');
    // Attente de 1 seconde avant de cacher le loader
    setTimeout(function() {
        loader.classList.add('hidden');
    }, 1000);
});
