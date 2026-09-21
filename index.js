let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        let title = card.querySelector("h2").innerText;

        console.log(title);

    });

});