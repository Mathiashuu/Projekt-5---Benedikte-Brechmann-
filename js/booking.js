
// JavaScript til Booking side - lavet af Lau
// Inspiration fra W3Schools | How TO - CSS/JS Modal

// 'datoBtn' ID til dato select knap
// 'datoModal' ID til dato modal container

// 'tidBtn'  ID til tid select knap 
// 'tidModal' ID til tid modal container

// 'closeModal' class til close knap


let datoModal = document.getElementById("datoModal");  

let datoOpn = document.getElementById("datoBtn");  

let close = document.getElementsByClassName("closeModal");


datoOpn.onclick = function() {
    datoModal.style.display = "block";
}