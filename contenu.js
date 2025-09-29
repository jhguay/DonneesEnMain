// contenus.js

const Z1 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df
`;

const Z2 = `
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
$df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
df['ville'] = df['ville'].str.title()
#Toutes les villes devraient avoir une majuscule
df
`;

const Z3 = `
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
%df = pd.read_csv(source, encoding='latin1')
%df['ville'] = df['ville'].str.title()
#Pour avoir les fréquences d'une variable qualitative, on utilise la méthode .value_counts() 
t1=df['genre'].value_counts()
print(t1)
#Pour avoir les fréquences en proportions, donc normalisées, on ajoute un paramètre.
t2=df['genre'].value_counts(normalize=True)
print(t2)
#Pour avoir les fréquences en pourcentages, donc normalisées, on multiplie par 100 et on arrondit.
t3=round(df['genre'].value_counts(normalize=True)*100)
print(t3)
`;
const Z4 = `
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
%df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
%df['ville'] = df['ville'].str.title()
#Toutes les villes devraient avoir une majuscule
#On utilise les méthodes mean() et median() pour avoir les informations. C'est seulement valide pour les variables quantitatives
moyenne=df['age'].mean()
print(moyenne)
mediane=df['age'].median()
print(mediane)
`;
const Z5 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
df['ville'] = df['ville'].str.title()
#Pour croiser deux variables qualitatives: les  nombres de répondants
t4=pd.crosstab(df["ville"], df["joue_musique"],margins=True,margins_name='Total')
print(t4)
#Pour croiser deux variables qualitatives: les pourcentages
t5=round(pd.crosstab(df["ville"], df["joue_musique"],normalize='columns')*100)
print(t5)
#Pour croiser deux variables qualitatives: les pourcentages
t6=round(pd.crosstab(df["ville"], df["joue_musique"],normalize='index')*100)
print(t6)
`;

const Z6 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
%df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
%df['ville'] = df['ville'].str.title()
#Pour croiser une variable qualitative et une variable quantitative.
t7 = df.groupby("genre")["age"].mean().reset_index()
print(t7)
`;

const Z7 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
%df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
%df['ville'] = df['ville'].str.title()
#Pour croiser deux variables quantitatives
correlation = df["age"].corr(df["nb_ordi"])
print(correlation)
`;

const Z8 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df
%import pandas as pd
%source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
%df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule en utilisant la méthode .title()
%df['ville'] = df['ville'].str.title()
#On importe une autre module d'outils, le matplotlib
import matplotlib.pyplot as plt
#On travaille avec la variable qualitative, genre, on utilisera deux couleurs (stéréotypées!)
couleurs=['lightcoral','skyblue']
#Pour illustrer une variable qualitative
#On obtient le tableau t3
t3=round(df['genre'].value_counts(normalize=True)*100)
#On utilise pour ce tableau la méthode plot pour dessiner un graphique et on ajoute des précisions
t3.plot(kind="pie", colors=couleurs)
plt.title("Réparition des deux genres")
plt.xlabel("Âge")
plt.ylabel("Nombre de personnes")
plt.show()
#Pour illustrer une variable quantitative
# Histogramme, très utile pour départager une distribution numérique et la représenter graphiquement.
plt.hist(df["age"], bins=3, edgecolor="black")  # bins = nombre de classes
plt.title("Répartition des âges")
plt.xlabel("Âge")
plt.ylabel("Nombre de personnes")
plt.show()

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


const Z11 = `
#3. Les données sont téléchargées, puis lues. On crée un dataframe appelé df
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'elles commencent par une majuscule
&df['ville'] = df['ville'].str.title()
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
      } else if (ligne.startsWith('&')) {
        // Supprimer le & et mettre le reste en gris
        return `<span style="color:gray">${ligne.slice(1).trim()}</span><br>`;
      } else {
        return ligne + '<br>';
      }
    })
    .join('');
}












