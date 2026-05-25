// JavaScript til onboarding side - lavet af Mie + Lau
// med hjælp og inspiration fra W3Schools - Slideshows

// Hvis du ikke kan finde nogle elementer, så prøv at søg i dokumentet med CTRL + F / COMMAND + F (tror jeg)

// "slideshow--container" class til hele slideshow - linje 35 i Onboarding HTML
// "mySlides"  class til et slide i slideshowet
// "slideshow--next" class til 'videre' knap

// Prøv at gå den i gennem eller lav den fra bunden hvis du har tid :)


let slideIndex = 1;    // Vi opretter en variabel for vores slide index, så den ved hvilket slide er aktivt (den starter på 1 side)
showSlides(slideIndex);   // Vi laver og kalder en funktion der hedder showSlides som viser 1 slide på vores index.
                          

function plusSlides(n) {   // Denne funktion, der hedder plusSlides, ændrer slideIndex til næste tal, og viser dermed næste slide i rækkefølgen.
    showSlides(slideIndex += n);   // Hold øje med den vigtige "+=" tildelings operator, som bruges til at plusse en værdi på en variabel (n). Altså den siger n + 1 (og går videre til næste slideIndex 2)
}

function currentSlide(n) {  // Den her funktion kan vi bruger til at hoppe hen til en bestemt slide ved at klikke på den i browseren.
  showSlides(slideIndex = n);
}