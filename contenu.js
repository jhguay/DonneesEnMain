// contenus.js

const texte1 = `
#Nos données très simples sont dans un nuage.
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df
`;

const texte2 = `
Zone B — Informations
La zone B est une section importante.
Elle peut contenir des images, des paragraphes,
et même des liens vers d'autres ressources.
`;

function formatTexteAvecBr(texte) {
  return texte
    .trim()
    .split('\n')
    .map(ligne => ligne.trim())
    .filter(ligne => ligne.length > 0)
    .map(ligne => ligne + '<br>')
    .join('');
}
