// Fun fact change chaque fois que la page se recharge
const funFacts = [
    "Le stress ne dure que 10 secondes. Profites-en pour respirer !",
    "Rire, c'est la meilleure méditation.",
    "Le bien-être commence avec un sourire !",
    "L'auto-compassion, c’est accepter que tout le monde fait des erreurs.",
    "La respiration profonde est la clé pour rester calme.",
];

window.onload = function () {
    const factElement = document.createElement("p");
    factElement.textContent = "Fun Fact : " + funFacts[Math.floor(Math.random() * funFacts.length)];
    document.body.appendChild(factElement);
};
