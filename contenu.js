// contenus.js

const Source = `
&Les données sont évidemment fictives: 10 personnes, 7 variables. Elles sont placées dans un dataframe, appelé ici df, du module pandas.
&Cinq variables qualitatives: nom, genre, ville, joue_musique, connais_python.
&Deux variables quantitatives: age, nb_ordi
&Pour une observation -Émilie- une variable, connais_python, est sans réponse. On verra comment on la traite, section 12.
&Les données sont stockées dans le nuage Gihub à l'adresse suivante: source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&Pour éviter tout problème, le nom des variables est sans accent.
&L'encodage est latin1 puisque les valeurs des variables ont parfois des lettres accentuées. 
&Elles ont été construites au départ dans un simple fichier excel.

!imageBase.png
`;

const Variable = `
#Pour comprendre les fondements de Python, quelques informations très simples
#Il faut distinguer les lignes de code des lignes de commentaire -comme celle-ci; les lignes de commentaire commence par un #
#On peut travailler avec une variable et lui assigné un ou des mots; ils sont entre guillemets "". C'est une variable qualitative!
nom='Adèle'
print(nom)
print("------------------")
#On peut travailler avec une variable et lui assigné un nombre;  c'est une variable quantitative!
age=55
print(age)
print("------------------")
#On peut travailler avec une liste; remarquer les crochets
personnes=['Adèle', 'Alice', 'Adrienne', 'Alma']
print(personnes)
ages=[55, 53, 75, 71]
print(ages)
#On peut aller chercher une information précise de la liste,
print(ages[0]) #pour 55
print(ages[3]) #pour 71
print(personnes[1]) #pour Jean-Herman
personnes.append("Pierre")
print(personnes)
print("------------------")
#On peut travailler avec un dictionnaire: remarquer les accolades
petitDictionnaire = [
    {"nom": "Adèle", "genre":"Femme", "age": 45},
    {"nom": "Alice", "genre":"Femme", "age": 43},
    {"nom": "Adrienne", "genre":"Femme", "age": 75},
    {"nom": "Alma", "genre":"Femme", "age": 71},
    {"nom": "Pierre", "genre":"Homme", "age": 58},

]
print(petitDictionnaire[2].get('genre'))
`;

const Dataframe = `
#On peut surtout travailler avec un dataframe, analogue au dictionnaire mais plus structuré, avec un index. Module: pandas
#C'est cette structure que nous utiliserons pour travailler nos données
import pandas as pd
df = pd.DataFrame(petitDictionnaire)
print(df)
print(df['nom'])
print(df['age'].mean())
print(round(df['age'].mean()))
`;

const Demarche = `
#Notre démarche
`;

const Z1 = `
#Les données sont téléchargées, puis lues. On crée un dataframe appelé df.
import pandas as pd
source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
df = pd.read_csv(source, encoding='latin1')
df
`;

const Z2 = `
#Nettoyer des données impose souvent plusieurs vérifications. On n'en retient ici qu'une seule: uniformiser les villes.
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
#En utilisant la méthode .title() , on corrige le nom des villes pour qu'il commence par une majuscule 
df['ville'] = df['ville'].str.title()
#Toutes les villes devraient avoir une majuscule.
df
`;

const Z3 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#On utilise la méthode .value_counts() , pour avoir les fréquences d'une variable qualitative, 
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
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#On utilise les méthodes mean() et median() pour avoir les informations. C'est seulement valide pour les variables quantitatives.
moyenne=df['age'].mean()
print(moyenne)
mediane=df['age'].median()
print(mediane)
`;
const Z5 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#On utilise la fonction crosstable()  , pour croiser deux variables qualitatives, ville et joue_musique. 
t4=pd.crosstab(df["ville"], df["joue_musique"],margins=True,margins_name='Total')
print(t4)
#Pour en obtenir les proportions.
t5=round(pd.crosstab(df["ville"], df["joue_musique"],normalize='columns'))
print(t5)
#Pour obtenir les pourcentages.
t6=round(pd.crosstab(df["ville"], df["joue_musique"],normalize='index')*100)
print(t6)
`;

const Z6 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#On utilise la fonction groupby() , pour croiser une variable qualitative et une variable quantitative.
t7 = df.groupby("genre")["age"].mean().reset_index()
print(t7)
`;

const Z7 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#Pour croiser deux variables quantitatives, on utilise la méthode corr() avec comme paramètre la seconde variable quantitative.
correlation = df["age"].corr(df["nb_ordi"])
print(correlation)
`;

const Z8 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
#On importe un second module d'outils, le matplotlib.
import matplotlib.pyplot as plt
#On travaille avec la variable qualitative, genre, on utilisera deux couleurs (stéréotypées!).
couleurs=['lightcoral','skyblue']

#Pour illustrer une variable qualitative.
#On obtient à nouveau le tableau t3
t3=round(df['genre'].value_counts(normalize=True)*100)
#On utilise pour ce tableau la méthode plot pour dessiner un graphique et on ajoute des précisions.
t3.plot(kind="pie", colors=couleurs)
plt.title("Réparition des deux genres")
plt.xlabel("Âge")
plt.ylabel("Nombre de personnes")
plt.show()

#Pour illustrer une variable quantitative.
plt.hist(df["age"], bins=3, edgecolor="black")  # bins = nombre de classes
plt.title("Répartition des âges")
plt.xlabel("Âge")
plt.ylabel("Nombre de personnes")
plt.show()

#Pour illustrer une variable quantitative et une variable qualitative.
t7 = df.groupby("genre")["age"].mean().reset_index()
t7.plot(kind="bar",color=couleurs) 
plt.title("Âge moyen selon le genre")
plt.xlabel("Genres") 
plt.ylabel("Âges") 
plt.grid(axis='y', linestyle='--') 
plt.xticks(rotation=0) 
plt.show()
`;

const Z9 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
df1=df[['nom','genre','ville']]
print(df1)
`;

const Z10 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
&df['ville'] = df['ville'].str.title()
df1 = df.query("ville == 'Laval'") 
print(df1)
df2 = df.dropna(subset=["connais_python"])
print(df2)
`;

const Z11 = `
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'il commence par une majuscule.
&df['ville'] = df['ville'].str.title()
#On fait un dictionnaire qui associe chaque ville à l'une des deux grandes régions.
regroupement={'Magog':'Reste du Québec',
              'Carignan':'Reste du Québec',
              'Sherbrooke':'Reste du Québec',
              'Montréal':'Métropole',
              'Laval':'Métropole',
}
df['région'] = df['ville'].map(regroupement).fillna("Autres villes")
print(df)
`;

const Z12 = `
#Pour sauvegarder votre travail ou la base modifiée.
&import pandas as pd
&source="https://raw.githubusercontent.com/jhguay/DonneesEnMain/main/donneesFamille.csv"
&df = pd.read_csv(source, encoding='latin1')
#On corrige le nom des villes pour qu'il commence par une majuscule.
df.to_csv("donnees.csv", index=False, encoding='latin1')
age_moyen.to_csv("age_moyen_tableau.csv", index=False, encoding='latin1')
plt.savefig("mon_graphique.png") 
#Les fichiers sont dans la zone de gauche de Google Colab, ils pourront être téléchargés.

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
      } else if (ligne.startsWith('!')) {
        // Supprimer le ! et insérer une image
        const url = ligne.slice(1).trim();
        return `<img src="${url}" style="width:100%; height:auto; display:block; margin:5px 0;"><br>`;
      } else {
        return ligne + '<br>';
      }
    })
    .join('');
}




function formatTexteAvecBrAncien(texte) {
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









































