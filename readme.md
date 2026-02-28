# Pink Nails (site vitrine)

Site vitrine statique (HTML/CSS/JS) pour un salon de manucure en Île-de-France, ambiance très girly/pink/strass.

## CI (GitHub Actions)

Un workflow vérifie le format avec Prettier à chaque push/PR : `.github/workflows/ci.yml`.

Badge (à activer après ton premier push sur `main`) :

```md
![CI](../../actions/workflows/ci.yml/badge.svg)
```

## Déploiement Netlify

### Option A — Connecter le repo GitHub

1. Netlify → **Add new site** → **Import an existing project**
2. Choisis ton repo
3. Settings :
   - **Build command** : (vide)
   - **Publish directory** : `.`
4. Deploy

> Le repo contient déjà un `netlify.toml` avec `publish = "."`.

### Option B — Drag & Drop

1. Ouvre Netlify → **Sites**
2. Glisse-dépose le dossier du projet (celui qui contient `index.html`)

## Lancer en local

- Option simple (Python) :

```bash
python3 -m http.server 5173
```

Puis ouvre : http://localhost:5173

- Option Windows (PowerShell) :

```powershell
py -m http.server 5173
```

## À personnaliser

- Nom du salon (logo + titre)
- Zone exacte / adresse
- Liens Instagram / téléphone
- Email dans `script.js` (champ `to` du `mailto:`)
- Tarifs + galerie (mettre tes vraies photos)
