// JavaScript til onboarding side - lavet af Mie + Lau
// med hjælp og inspiration fra W3Schools - Slideshows

// Hvis du ikke kan finde nogle elementer, så prøv at søg i dokumentet med CTRL + F / COMMAND + F (tror jeg)

// "slideshow--container" class til hele slideshow - linje 35 i Onboarding HTML
// "mySlides"  class til et slide i slideshowet
// "slideshow--next" class til 'videre' knap


// Hej Mie!
// Prøv at gå koden igennem eller lav den fra bunden hvis du har tid og lyst :)
// Ellers går vi sammen igennem den i morgen!



let slideIndex = 1;    // Vi opretter en variabel for vores slide index, så den ved hvilket slide er aktivt (den starter på 1 side)
showSlides(slideIndex);   // Vi laver og kalder en funktion der hedder showSlides som viser 1 slide på vores index.
                          

function plusSlides(n) {   // Denne funktion, der hedder plusSlides, ændrer slideIndex til næste tal, og viser dermed næste slide i rækkefølgen.
    showSlides(slideIndex += n);   // Hold øje med den vigtige "+=" tildelings operator, som bruges til at plusse en værdi på en variabel (n). Altså den siger n + 1 (og går videre til næste slideIndex 2)
}

function currentSlide(n) {  // Den her funktion kan vi bruger til at hoppe hen til en bestemt slide ved at klikke på den i browseren.
  showSlides(slideIndex = n);
}


function showSlides(n) {  // Funktionen har et parameter der hedder "n". n er "tallet" på det slide vi gerne vil vise.

  let i;
  let slides = document.getElementsByClassName("mySlides");  // De tre variabler her henter classes inde fra vores HTML DOM ved hjælp af en metode der hedder getElementBy 
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    // Denne kode her sørger for at slideshowet kører i ring: Vi har tre slides - så hvis n bliver 4, skifter den til slide 1 - hvis n bliver til 0, skifter den til 3
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {  // Den her for-løkke sørger for at skjule slides der ikke er aktive. 
    slides[i].style.display = "none";    // Det gør den ved, at 
  }

  for (i = 0; i < dots.length; i++) {    // Den her løkke sørger for, at prikkerne i bunden alle er uaktive - eller ikke markeret.  
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  // Koden her sørger for, at vores slideshow starter i den rigtige rækkefølge i vores array - altså, at den starter ved index 0 (slide 1)

  dots[slideIndex-1].className += " active";    // Til sidst tildeler vi en "active" class til den prik som slidet repræsenterer (prik 1, 2 eller 3)
}