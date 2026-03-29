# ✅ Site Carla-Sacha-Mariage - MVP Phase 1 TERMINÉ

## 🎯 Résumé Rapide

**Statut :** Production Ready  
**Build :** 100 KB gzippé (ultra-léger)  
**3 Sections :** Hero Banner + Countdown + Dress Code

---

## 🚀 Démarrage Rapide

### Voir le Site Localement

```bash
cd front
npm run dev
```
→ Ouvre http://localhost:5174

### Build Production

```bash
cd front
npm run build
```
→ Génère `dist/` prêt pour Hostinger

---

## 📁 Structure

```
front/
├── src/
│   ├── components/
│   │   ├── HeroBanner/    ← Photo fixe + Noms + Date
│   │   ├── Countdown/     ← Timer temps réel
│   │   └── DressCode/     ← 6 cercles couleurs
│   ├── hooks/
│   │   └── useCountdown.js  ← Logique countdown
│   └── styles/            ← SCSS (palette + mixins)
└── dist/                  ← Build à uploader
```

---

## ✨ Fonctionnalités

### 1. Hero Banner
- Photo `banner-image.jpeg` en background
- Position fixe (reste en arrière-plan au scroll)
- "Sacha & Carla" + "25 Juillet 2026"
- Animation fade-in élégante

### 2. Countdown Timer
- Cible : 25 Juillet 2026, 10H30
- Met à jour chaque seconde
- 4 blocs : Jours / Heures / Minutes / Secondes
- Cards blanches bordure Sage
- Animation slide-up au scroll

### 3. Dress Code
- 6 couleurs : Parchment, Sand, Olive, Sage, Bark, Gold
- Texte : "Nous serions ravis de vous voir porter ces couleurs..."
- Fond Sage, texte Parchment
- Animation stagger sur cercles

### 🎬 Effet Scroll Signature
- Hero reste fixe (z-index: 1)
- Sections montent par-dessus (z-index: 2)
- Impression de "changer de page"
- Ultra smooth et performant

---

## 📱 Responsive

✅ **Mobile** (< 768px) : Grid 2x2, texte 48px  
✅ **Tablet** (768-1023px) : Grid 1x4, texte 56px  
✅ **Desktop** (≥ 1024px) : Grid 1x4, texte 64px

---

## 🎨 Palette Couleurs

```
Parchment : #F5F1E8  (fond clair)
Sand      : #E8DCC8  (beige)
Olive     : #A6B88F  (vert signature)
Sage      : #8A9A7B  (vert sections)
Bark      : #6B5D54  (brun)
Gold      : #C9A86A  (or accents)
```

---

## 📦 Déploiement Hostinger

1. Exécute `npm run build` dans `front/`
2. Upload tout le contenu de `dist/` sur Hostinger
3. Vérifie que `index.html` est à la racine
4. Test : ouvre l'URL du sous-domaine

**Guide complet :** `front/DEPLOYMENT.md`

---

## ✅ Tests à Faire

- [ ] Tester sur iPhone Safari
- [ ] Tester sur Android Chrome
- [ ] Vérifier lisibilité texte Hero
- [ ] Valider palette avec Carla
- [ ] Tester scroll fluide

---

## 📊 Performance

| Métrique | Valeur |
|----------|--------|
| Bundle gzippé | 100 KB |
| CSS | 1.4 KB |
| Lighthouse estimé | 95+ |

---

## 🛠️ Commandes

```bash
npm run dev      # Développement
npm run build    # Production
npm run preview  # Test du build
```

---

## 📄 Documentation Complète

- **`front/README.md`** - Vue d'ensemble
- **`front/DEPLOYMENT.md`** - Guide déploiement
- **`_bmad-output/RAPPORT-TECHNIQUE-React-Dev.md`** - Détails complets

---

## 🎉 Prochaines Étapes

1. **Maintenant :**
   - Teste sur mobile réel
   - Valide avec Carla
   
2. **Puis :**
   - Déploie sur Hostinger
   
3. **Phase 2+ :**
   - Timeline jour J
   - Infos pratiques
   - RSVP form
   - Galerie photos

---

**Le site est prêt ! 🚀**

Questions ? Consulte `RAPPORT-TECHNIQUE-React-Dev.md`
