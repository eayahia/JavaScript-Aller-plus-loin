let produits = [
  { nom: "PC portable", prix: 900, image: "assets/téléchargement.jpg" },
  { nom: "Clavier mécanique", prix: 45, image: "assets/téléchargement (1).jpg" },
  { nom: "Souris sans fil", prix: 25, image: "assets/Souris-Gaming-Sans-Fil-Logitech-G502-X-lightspeed-1.jpg.webp" }
];

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});
