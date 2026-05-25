
// JavaScript til burger menu - lavet af Sarah + Lau
// Jeg har ikke lavet noget CSS til burger menuen. Tør du at lave noget til den, eller skal jeg? :)

// 'openMenu' - åbner burger menu (knap)                    linje 27 i Homepage
// 'closeMenu' - lukker burger menu (knap)                  linje 46 i Homepage

// 'burgerMenu' - Id til hele burger menuen (selve menuen)  linje 44 i Homepage
// 'itemsMenu' - Items i burgermenuen                       linje 55 i Homepage

// 'menu--burger-container' - Class til Styling i CSS       linje 44 i Homepage


// Hej Sarah! Her er hvad du skal gøre nu:

// Lav en variabel med en Array liste med de objekter der skal være inde i burger menuen:
const burgerItems = [
    { href: "Onboarding1.html", target: "_self", name: "Onboarding" },
    { href: "artikler.html", target: "_self", name: "Artikler" },
    { href: "pakker.html", target: "_self", name: "Pakker" },
    { href: "booking.html", target: "_self", name: "Booking" },
    { href: "raedgivning.html", target: "_self", name: "Info om rådgivning" },
    // Fortsæt her
]


// Lav en variabel hvor du bruger en getElementById metode til at hente en 'itemsMenu' fra vores HTML DOM (document)
// Denne variabel bruger vi til at putte vores array liste med objekter ind i HTML koden

let menuBurger = document.getElementById("burgerMenu");

menuBurger.display = "none";

let menuContainer = document.getElementById("itemsMenu");

let closeModal = document.getElementsByClassName("closeMenu");


// Nu skal du lave en for løkke der henter dine burgerItems ind i menuen

// i svarer til et tal i din array liste. 0, 1, 2, 3 osv.
for (let i = 0; i < burgerItems.length; i++) {
    menuContainer.innerHTML +=                    // husk at += er en operator der putter både tal og string datatyper sammen
    '<div>' + '<a href="' + burgerItems[i].href + '" target="' + burgerItems[i].target + '">' + burgerItems[i].name + '</a>' + '</div>';
}

closeModal.onclick = function() {
    datoModal.style.display = "none";
}

// Åben burger menu
function openBurgerMenu() {
    menuBurger.style.display = "block"; 
}

// Luk burger menu
function closeBurgerMenu() {
    menuBurger.style.display = "none";
}