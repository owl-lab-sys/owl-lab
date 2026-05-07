document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});