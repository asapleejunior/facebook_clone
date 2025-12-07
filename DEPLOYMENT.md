# Déploiement sur GitHub Pages

## Étapes pour déployer votre clone Facebook

### 1. Créer un repository GitHub
1. Allez sur [GitHub](https://github.com) et créez un nouveau repository
2. Nommez-le `clone_facebook` (ou le nom de votre choix)
3. Ne cochez PAS "Initialize with README"

### 2. Initialiser Git localement
Ouvrez PowerShell dans le dossier du projet et exécutez:

```bash
git init
git add .
git commit -m "Initial commit: Facebook clone"
```

### 3. Connecter au repository GitHub
Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub:

```bash
git remote add origin https://github.com/VOTRE_USERNAME/clone_facebook.git
git branch -M main
git push -u origin main
```

### 4. Déployer sur GitHub Pages
```bash
npm run deploy
```

### 5. Activer GitHub Pages
1. Allez dans les Settings de votre repository sur GitHub
2. Cliquez sur "Pages" dans le menu latéral
3. Sous "Source", sélectionnez la branche `gh-pages`
4. Cliquez sur "Save"

### 6. Accéder à votre site
Votre site sera disponible à:
```
https://VOTRE_USERNAME.github.io/clone_facebook/
```

## Mises à jour futures
Pour mettre à jour le site après des modifications:

```bash
git add .
git commit -m "Description de vos modifications"
git push
npm run deploy
```

## Configuration actuelle
- ✅ `gh-pages` installé
- ✅ Scripts de déploiement ajoutés à `package.json`
- ✅ Configuration Vite pour GitHub Pages
- ✅ Favicon Facebook mis à jour
