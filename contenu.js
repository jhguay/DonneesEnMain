// contenus.js

const Z1 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df
`;

const Z2 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule
df['ville'] = df['ville'].str.title()
#On fait un dictionnaire qui associe chaque ville à l'une des deux grandes régions.
regroupement={'Magog':'Reste du Québec',
              'Carignan':'Reste du Québec',
              'Sherbrooke':'Reste du Québec',
              'Montréal':'Métropole',
              'Laval':'Métropole',
}
#Avec la méthode map de la variable on utilise le dictionnaire. "Autres villes"  pour les autres.
df['région'] = df['ville'].map(regroupement).fillna("Autres villes")
print(df)
`;

const Source = `
#3. Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule
df['ville'] = df['ville'].str.title()
#On fait un dictionnaire qui associe chaque ville à l'une des deux grandes régions.
regroupement={'Magog':'Reste du Québec',
              'Carignan':'Reste du Québec',
              'Sherbrooke':'Reste du Québec',
              'Montréal':'Métropole',
              'Laval':'Métropole',
}
#Avec la méthode map de la variable on utilise le dictionnaire. "Autres villes"  pour les autres.
df['région'] = df['ville'].map(regroupement).fillna("Autres villes")
print(df)
`;


const Precisions = `
#3. Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule
df['ville'] = df['ville'].str.title()
#On fait un dictionnaire qui associe chaque ville à l'une des deux grandes régions.
regroupement={'Magog':'Reste du Québec',
              'Carignan':'Reste du Québec',
              'Sherbrooke':'Reste du Québec',
              'Montréal':'Métropole',
              'Laval':'Métropole',
}
#Avec la méthode map de la variable on utilise le dictionnaire. "Autres villes"  pour les autres.
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








