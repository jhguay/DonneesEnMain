// contenus.js

const texte1 = `
#Nos données très simples sont dans un nuage.
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df
`;

const texte2 = `
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df['ville'] = df['ville'].str.title()

regroupement={'Magog':'Reste du Québec',
              'Carignan':'Reste du Québec',
              'Sherbrooke':'Reste du Québec',
              'Montréal':'Métropole',
              'Laval':'Métropole',
}
df['région'] = df['ville'].map(regroupement).fillna("Autres villes")
print(df)
`;

function formatTexteAvecBr(texte) {
  return texte
    .trim()
    .split('\n')
    .map(ligne => ligne.trim())
    .filter(ligne => ligne.length > 0)
    .map(ligne => {
      if (ligne.startsWith('#')) {
        // Garder le # et mettre en bleu
        return `<span style="color:blue">${ligne}</span><br>`;
      } else {
        return ligne + '<br>';
      }
    })
    .join('');
}




