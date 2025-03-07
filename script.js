// Exemple de script qui affiche un message dans la console
console.log("Bienvenue sur le site de DABS !");

// Ajoutez ici vos fonctionnalités JS
// Par exemple :
// - Validation du formulaire en front-end
// - Animation du menu
// - Slider pour les réalisations
// etc.


document.addEventListener("DOMContentLoaded", function () {
    // Récupère toutes les cartes-projets
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        // Sélection de toutes les images dans .image-container
        const images = card.querySelectorAll(".image-container img");

        // S’il n’y a qu’une seule image, pas de diaporama
        if (images.length <= 1) return;

        let currentIndex = 0;    // Index de l'image actuellement visible
        let intervalId = null;   // Pour stocker le setInterval

        // Au survol : démarrer le diaporama
        card.addEventListener("mouseenter", () => {
            // Démarre un interval qui change d'image toutes les 2 secondes, par ex
            intervalId = setInterval(() => {
                // On cache l'image courante
                images[currentIndex].classList.remove("active");

                // On passe à l'image suivante
                currentIndex = (currentIndex + 1) % images.length;

                // On affiche la nouvelle image
                images[currentIndex].classList.add("active");
            }, 2000); // Défilement toutes les 2s (modifiez si besoin)
        });

        // Quand on quitte la carte : on arrête le diaporama et revient à la 1ère image
        card.addEventListener("mouseleave", () => {
            // Stoppe l’interval
            clearInterval(intervalId);
            intervalId = null;

            // Réinitialise sur la première image
            images.forEach(img => img.classList.remove("active"));
            images[0].classList.add("active");
            currentIndex = 0;
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-stack img");
    let currentIndex = 0;
    const total = images.length;

    // S'assurer que la première image est active
    // (Ou vous pouvez le faire directement dans le HTML)
    images[currentIndex].classList.add("active");

    setInterval(() => {
        // On retire .active de l'image courante
        images[currentIndex].classList.remove("active");

        // On passe à l'image suivante
        currentIndex = (currentIndex + 1) % total;

        // On ajoute .active à la nouvelle
        images[currentIndex].classList.add("active");
    }, 2000); // toutes les 1 seconde
});
