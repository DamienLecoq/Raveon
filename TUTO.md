# 🎛️ Tutoriel — Modifier le site de Raveon

> Je te conseille de le lire au moins 1 fois en entier avant de faire n'importe quoi my cousin :)

## 1. Récupérer la dernière version du projet

**Avant toute modification**, assure-toi d'avoir la version la plus récente du site.

1. Fais un **clic droit** dans ton dossier `SiteRaveon`
2. Clique sur **"Ouvrir avec Visual Studio Code"**
3. Dans VS Code, clique sur **Terminal** (barre du haut) → **New Terminal**
4. Dans le terminal, tape la commande suivante puis appuie sur **Entrée** :
   ```
   git pull
   ```

Le projet est à jour, tu peux commencer à modifier.

---

## 2. Modifier des données du site

Toutes les données modifiables (liens, images, textes, emails…) sont centralisées dans un seul fichier.

1. Ouvre le fichier **`constants.js`** dans VS Code
2. Modifie les valeurs souhaitées
3. Sauvegarde avec **Ctrl+S**

> 💡 Tu n'as jamais besoin de toucher à `index.html`, `final.css` ou `final.js` pour faire des modifs.

---

## 3. Ajouter une nouvelle image

1. Glisse ton fichier image dans le dossier **`Images/`** du projet
2. Dans **`constants.js`**, indique le nom du fichier à l'endroit voulu, par exemple :
   ```js
   nextShowFlyer: "Images/mon-image.png",
   ```

---

## 4. Tester tes modifications en local

Avant de mettre en ligne, vérifie que tout s'affiche correctement sur ta machine.

1. Effectue ta modification et sauvegarde (**Ctrl+S**)
2. Clique sur **"Go Live"** en bas à droite de la fenêtre VS Code
3. La page s'ouvre automatiquement dans ton navigateur — vérifie que tout est bon

---

## 5. Mettre tes modifications en ligne

Une fois que tu es satisfait du résultat, publie les changements.

1. Dans VS Code, ouvre un terminal (**Terminal** → **New Terminal**)
2. Tape les commandes suivantes **une par une**, en appuyant sur **Entrée** après chacune :

   ```
   git add .
   ```
   ```
   git commit -m "ton message ici"
   ```
   > Remplace `ton message ici` par une courte description de ce que tu as changé.  
   > Exemple : `git commit -m "nouveau flyer mars 2026"`
   ```
   git push
   ```

Les modifications sont en ligne !