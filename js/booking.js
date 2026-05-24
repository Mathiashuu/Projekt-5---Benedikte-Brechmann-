
// JavaScript til Booking side - lavet af Lau
// Hjælp fra W3Schools | How TO - CSS/JS Modal

// 'datoBtn' ID til dato select knap
// 'datoModal' ID til dato modal container

// 'tidBtn'  ID til tid select knap 
// 'tidModal' ID til tid modal container

// 'closeModal' class til close knap
// 'modalConfirm' class til bekræft knap


// Dato Modal JS
    let datoModal = document.getElementById("datoModal");  

    let datoOpn = document.getElementById("datoBtn");  

    let closeModal = document.getElementsByClassName("closeModal")[0];

    let confirmModal = document.getElementsByClassName("modalConfirm")[0];


    datoOpn.onclick = function() {
        datoModal.style.display = "block";
    }

    closeModal.onclick = function() {
        datoModal.style.display = "none";
    }

    confirmModal.onclick = function() {
        datoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == datoModal) {
            datoModal.style.display = "none";
        }
    }

// Tid Modal JS

    let tidModal = document.getElementById("tidModal");  

    let tidOpn = document.getElementById("tidBtn"); 

    let closeTid = document.getElementsByClassName("closeModalTid")[0];

    tidOpn.onclick = function() {
        tidModal.style.display = "block";
    }

    closeTid.onclick = function() {
        tidModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == tidModal) {
            tidModal.style.display = "none";
        }
    }