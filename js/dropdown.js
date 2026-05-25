// JavaScript til Dropdown menuer - lavet af Mathias
// Hjælp fra W3Schools | How TO - Collapsibles/Accordion 


// objekt - tæller hvor mange accordions som der er åbnet
const count = {
    open: 0
};


// array - som danner en liste ...
var accordionListe = Array.from(document.getElementsByClassName("accordion-pakker"));


// for løkke - den går igennem accordionliste.lenght (dette tilfæld 3) 
for (var i = 0; i < accordionListe.length; i++) { // Operatorer (<, ++)


     // addEventListener tilføjer en click event til hver accordion
    accordionListe[i].addEventListener("click", function() {
        
        //    Denne function kører når brugeren klikker //// toggle active class (tilføjer active til accordion pakker, som så ændrer på css'en og "udfylder accordionen")
        this.classList.toggle("active");


         // Kontrolstruktur - Tjekker om accordion nu er åben eller lukket
    if (this.classList.contains("active")) {

        // Accordion er åben - plus 1 til count
        count.open = count.open + 1; // operatorer  (+)
          console.log("Åbne accordions:", count.open);   // hvis der tjekkes i consolen, vil der blive vist i + 1, hver gang der åbnes en accordion  (+)
    } else {

        // Accordion er lukket - minus 1 fra count
        count.open = count.open - 1; // operatorer   (-)
        console.log("Åbne accordions:", count.open);  // det samme som før udover det i - 1, hver gang der lukkes.
    }
        
    });
}
