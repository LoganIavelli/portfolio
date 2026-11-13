const scrollReveal = ScrollReveal({
    distance: "40px",
    duration: 800,
    easing: "ease-out",
    origin: "bottom",
    reset: false
});

scrollReveal.reveal("section", {
    interval: 150
});

scrollReveal.reveal(".card", {
    interval: 150,
    scale: 0.95
});