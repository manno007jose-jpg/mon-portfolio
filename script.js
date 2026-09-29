function envoyerMessage() {
  
  // Récupère ce que l'utilisateur a tapé
  let nom = document.getElementById("nom").value;
  let message = document.getElementById("message").value;

  // Vérifie que les champs ne sont pas vides
  if (nom === "" || message === "") {
    document.getElementById("reponse").textContent = 
    "⚠️ Veuillez remplir tous les champs.";
    return;
  }

  // Affiche le message de confirmation
  document.getElementById("reponse").textContent = 
  "✅ Merci " + nom + " ! Je vous réponds bientôt sur WhatsApp.";

  // Vide les champs après envoi
  document.getElementById("nom").value = "";
  document.getElementById("message").value = "";
}

// Animation au scroll
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));