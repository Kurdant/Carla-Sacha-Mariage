# Guide de Déploiement - Hostinger

## Site : Carla-Sacha-Mariage MVP Phase 1

### Fichiers à Uploader

Le dossier `dist/` contient tous les fichiers du site optimisés pour la production :

```
dist/
├── index.html
├── vite.svg
├── images-site/
│   └── banner-image.jpeg
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    ├── motion-[hash].js
    └── vendor-[hash].js
```

### Étapes de Déploiement sur Hostinger

#### 1. Se connecter à Hostinger
- Aller sur le panneau de contrôle Hostinger
- Accéder au File Manager ou utiliser FTP

#### 2. Préparer le Répertoire
- Naviguer vers le répertoire du sous-domaine
- Exemple : `public_html/mariage/` ou `subdomain.domaine.com/`

#### 3. Uploader les Fichiers
- Uploader **tout le contenu** du dossier `dist/`
- Ne pas uploader le dossier `dist/` lui-même, uniquement son contenu
- S'assurer que `index.html` est à la racine du répertoire web

#### 4. Vérifier les Permissions
- `index.html` : 644
- Dossiers `assets/` et `images-site/` : 755
- Fichiers JS/CSS : 644
- Image `banner-image.jpeg` : 644

#### 5. Configuration .htaccess (Optionnel)

Si besoin de forcer HTTPS et optimiser la mise en cache, créer un fichier `.htaccess` :

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### Tests Post-Déploiement

#### 1. Vérifications Fonctionnelles
- [ ] Page charge correctement
- [ ] Photo hero banner s'affiche
- [ ] Countdown fonctionne et se met à jour
- [ ] Les 6 cercles dress code s'affichent
- [ ] Scroll fluide entre sections
- [ ] Effet overlay fonctionne (Hero fixe, sections montent par-dessus)

#### 2. Tests Responsive
- [ ] Mobile (320-767px) : Layout adapté, texte lisible
- [ ] Tablet (768-1023px) : Espacements corrects
- [ ] Desktop (1024px+) : Design optimal

#### 3. Tests Performance
- Outil : [PageSpeed Insights](https://pagespeed.web.dev/)
- Objectif : Score > 90 mobile et desktop
- Vérifier : LCP < 2.5s

#### 4. Tests Navigateurs
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari iOS (mobile)
- [ ] Chrome Android (mobile)

### Mises à Jour Futures

Pour mettre à jour le contenu :

1. Modifier les fichiers sources dans `front/src/`
2. Exécuter `npm run build`
3. Uploader uniquement les fichiers modifiés du nouveau `dist/`
4. Vider le cache navigateur si besoin

### Commandes Utiles

```bash
# Développement local
cd front
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

### Performance du Build Actuel

- **CSS Total** : 4.44 KB (1.41 KB gzippé)
- **JS Vendor** : 3.66 KB (1.38 KB gzippé)
- **JS Motion** : 126.94 KB (41.89 KB gzippé)
- **JS Main** : 184.45 KB (58.11 KB gzippé)
- **Total gzippé** : ~100 KB

### Support

Pour toute question technique :
- Vérifier la console navigateur (F12)
- Consulter les logs d'erreur Hostinger
- Tester en local d'abord avec `npm run preview`

---

**Site prêt pour la production !** 🚀
