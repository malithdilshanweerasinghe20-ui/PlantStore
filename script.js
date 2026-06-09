const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(20,255,122,.15),
        rgba(255,255,255,.04) 50%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.04)";

    });

});