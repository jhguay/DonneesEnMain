// Fonction pour mettre à jour la prédiction
function updatePrediction() {
    // Récupérer les valeurs des variables
    const var1 = document.querySelector('input[name="var1"]:checked').value;
    const var2 = document.querySelector('input[name="var2"]:checked').value;
    const var3 = document.querySelector('input[name="var3"]:checked').value;
    const var4 = document.querySelector('input[name="var4"]:checked').value;
    const var5 = document.querySelector('input[name="var5"]:checked').value;
    const var6 = document.querySelector('input[name="var6"]:checked').value;
    const var7 = document.querySelector('input[name="var7"]:checked').value;
    const var8 = document.querySelector('input[name="var8"]:checked').value;

    // Appeler le modèle AI pour obtenir la prédiction
    // Remplacer cette partie par votre modèle AI
    const prediction = Math.random(); // Exemple de prédiction aléatoire

    // Afficher la prédiction
    document.getElementById('prediction').innerHTML = `Prédiction : ${prediction.toFixed(2)}`;
}

// Ajouter un événement pour mettre à jour la prédiction lorsqu'un bouton radio est cliqué
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updatePrediction);
});

// Mettre à jour la prédiction initialement
updatePrediction();
