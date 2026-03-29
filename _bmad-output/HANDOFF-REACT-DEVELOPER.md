# HANDOFF DOCUMENT - React Developer
## Implémentation Site Mariage Premium - Redesign Complet

**De :** Wedding UX Designer Agent  
**À :** Wedding React Developer Agent  
**Date :** 17 Février 2026  
**Priority :** HIGH - Redesign complet demandé par Hugo  
**Status :** Ready for Development ✅

---

## 🎯 Mission

**Objectif :** Redesigner COMPLÈTEMENT le site actuel jugé "moche" par Hugo.  
**Inspiration :** imagesite1.jpeg + imagesite2.jpeg (images inspi/)  
**Style cible :** Premium, élégant, formes géométriques, couleurs variées, artistique

---

## 📦 Livrables Design

### Documents de référence (tous dans `_bmad-output/`)
1. **SITE-COMPLET-REDESIGN-PREMIUM.md** (24kb)
   - Vision globale du redesign
   - Architecture 5 sections + Hero
   - Layouts desktop avec wireframes ASCII
   - Specs SCSS détaillées par section
   - Animations Framer Motion
   - Checklist implémentation

2. **WIREFRAMES-MOBILE-PREMIUM.md** (16kb) ✨ NOUVEAU
   - Wireframes mobile haute-fidélité
   - Layouts 320px-767px
   - Typography scale mobile
   - Touch targets optimisés
   - Adaptations responsive complètes

3. **DESIGN-SYSTEM-PREMIUM.md** (17kb) ✨ NOUVEAU
   - Tokens de couleur complets
   - Typography scale (desktop + mobile)
   - Spacing system (8px grid)
   - 6 composants réutilisables
   - Animation variants Framer Motion
   - Utility classes

---

## 🏗️ Architecture du Site

### Structure Complète (One-Page Scroll)
```
SECTION 0 : Hero Banner (OK - GARDÉ)
    ↓ scroll
SECTION 1 : Countdown Premium (Fond OLIVE)
    ↓ scroll
SECTION 2 : Timeline du Jour J (Fond CRÈME)
    ↓ scroll
SECTION 3 : Dress Code Premium (Fond SAGE)
    ↓ scroll
SECTION 4 : Photos Couple (Fond BLANC)
    ↓ scroll
SECTION 5 : Message Personnel (Fond PARCHMENT - Optionnel)
```

---

## 🎨 Palette de Couleurs (STRICTE)

```scss
// Backgrounds - Alternance pour dynamisme
$bg-olive: #8A9A7B;           // Section 1 (Countdown)
$bg-parchment: #F5F1E8;       // Section 2 (Timeline) + Section 5
$bg-sage: #A6B88F;            // Section 3 (Dress Code)
$bg-white: #FFFFFF;           // Section 4 (Photos)
$bg-sand: #E8DCC8;            // Variante si besoin

// Text
$text-on-dark: #FFFFFF;       // Sur Olive/Sage
$text-on-light: #3D4835;      // Sur Crème/Blanc
$text-accent: #C9A86A;        // Or pour highlights

// Gold Ornaments
$gold-primary: #C9A86A;
$gold-light: rgba(201,168,106,0.3);
```

**⚠️ IMPORTANT :** N'utilise AUCUNE autre couleur. Tout est défini ici.

---

## 📝 Typographie

### Fonts
```scss
$font-script: 'Great Vibes', cursive;    // Titres/Noms
$font-sans: 'Inter', sans-serif;          // Corps de texte
```

### Scale Desktop
```scss
$font-size-h1: 4rem;          // 64px
$font-size-h2: 3.5rem;        // 56px (Section titles)
$font-size-countdown: 5rem;   // 80px (Numbers MASSIFS)
$font-size-body: 1rem;        // 16px
$font-size-caption: 0.75rem;  // 12px
```

### Scale Mobile
```scss
$font-size-h2-mobile: 2rem;          // 32px
$font-size-countdown-mobile: 3.5rem; // 56px
```

---

## 🔧 Modifications à Faire

### 1️⃣ SUPPRIMER l'ancien Countdown/DressCode
```bash
# Composants à refaire complètement :
front/src/components/Countdown/    → DELETE & RECREATE
front/src/components/DressCode/    → DELETE & RECREATE
```

### 2️⃣ CRÉER les nouvelles sections

#### Section 1 : CountdownPremium
**Fichiers :**
- `front/src/components/CountdownPremium/CountdownPremium.jsx`
- `front/src/components/CountdownPremium/CountdownPremium.scss`

**Specs clés :**
- Fond OLIVE (#8A9A7B) avec pattern SVG géométrique
- Titre "Jusqu'au Grand Jour" en Great Vibes 3.5rem
- Grid 4 colonnes desktop, 2x2 mobile
- Numbers 80px desktop, 56px mobile
- Hexagones dorés `⬡` au-dessus de chaque bloc
- Boxes translucides avec backdrop-filter blur(20px)
- Ligne dorée en bas de chaque bloc

**Référence :** SITE-COMPLET-REDESIGN-PREMIUM.md lignes 87-218

---

#### Section 2 : Timeline
**Fichiers :**
- `front/src/components/Timeline/Timeline.jsx`
- `front/src/components/Timeline/Timeline.scss`

**Specs clés :**
- Fond CRÈME (#F5F1E8)
- Ornements coins (bordures dorées)
- Ligne verticale dorée centrale
- Alternance gauche/droite desktop
- Layout vertical simple mobile
- Icônes 64px desktop, 48px mobile
- 5 événements : Cérémonie (10:30), Cocktail (12:00), Déjeuner (14:00), Soirée (18:00), Feu d'artifice (23:00)

**Données :**
```jsx
const timelineEvents = [
  { time: '10:30', icon: '⛪', title: 'Cérémonie', location: 'Église Notre-Dame' },
  { time: '12:00', icon: '🥂', title: 'Cocktail', location: 'Jardin du Château' },
  { time: '14:00', icon: '🍽️', title: 'Déjeuner', location: 'Grande Salle' },
  { time: '18:00', icon: '💃', title: 'Soirée Dansante', location: 'Piste de Danse' },
  { time: '23:00', icon: '🎆', title: 'Feu d\'Artifice', location: 'Terrasse' }
];
```

**Référence :** SITE-COMPLET-REDESIGN-PREMIUM.md lignes 222-454

---

#### Section 3 : DressCodePremium
**Fichiers :**
- `front/src/components/DressCodePremium/DressCodePremium.jsx`
- `front/src/components/DressCodePremium/DressCodePremium.scss`

**Specs clés :**
- Fond SAGE (#A6B88F) avec motifs géométriques CSS
- Losanges `◇` décoratifs aux 4 coins
- Titre "Dress Code" en Great Vibes 3.5rem blanc
- Texte intro : "Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit..."
- 6 cercles palette : Parchment, Sand, Olive, Sage, Bark, Gold
- Cercles 80px desktop, 60px mobile avec effet brillant
- Footer box arrondie "Élégance et confort avant tout !"

**Couleurs cercles :**
```jsx
const colors = [
  { name: 'Parchment', hex: '#F5F1E8' },
  { name: 'Sand', hex: '#E8DCC8' },
  { name: 'Olive', hex: '#A6B88F' },
  { name: 'Sage', hex: '#8A9A7B' },
  { name: 'Bark', hex: '#6B5D54' },
  { name: 'Gold', hex: '#C9A86A' }
];
```

**Référence :** SITE-COMPLET-REDESIGN-PREMIUM.md lignes 458-619

---

#### Section 4 : PhotosCouple
**Fichiers :**
- `front/src/components/PhotosCouple/PhotosCouple.jsx`
- `front/src/components/PhotosCouple/PhotosCouple.scss`

**Specs clés :**
- Fond BLANC pur (#FFFFFF)
- Grid 2 colonnes desktop, 1 colonne mobile
- Photos N&B avec filtre `grayscale(100%) contrast(1.1)`
- Border-radius 16px desktop, 12px mobile
- Citation centrale avec guillemets dorés géants
- Photo featured en bas (16:9)

**Images :** Hugo fournira les photos (placeholder pour l'instant)

**Référence :** SITE-COMPLET-REDESIGN-PREMIUM.md lignes 623-741

---

#### Section 5 : MessagePersonnel (Optionnel)
**Fichiers :**
- `front/src/components/MessagePersonnel/MessagePersonnel.jsx`
- `front/src/components/MessagePersonnel/MessagePersonnel.scss`

**Specs clés :**
- Fond PARCHMENT (#F5F1E8)
- Ornements floraux `✿` aux coins
- Box centrale blanche avec bordure dorée
- Message modifiable par Hugo
- Signature script en or

**Référence :** SITE-COMPLET-REDESIGN-PREMIUM.md lignes 745-839

---

## 🎬 Animations Framer Motion

### Par Section
```jsx
// Sections fond foncé (Olive/Sage)
<motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

// Sections fond clair (Crème/Blanc)
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
>

// Stagger pour éléments (Timeline, Countdown blocks)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
```

**⚠️ Performance :** Utilise uniquement `transform` et `opacity` pour les animations (GPU-accelerated).

---

## 📱 Responsive Breakpoints

```scss
$breakpoint-mobile: 320px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;

@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
```

### Adaptations clés Mobile
- **Countdown :** Grid 2x2 au lieu de 1x4
- **Timeline :** Vertical simple (pas d'alternance gauche/droite)
- **Photos :** 1 colonne au lieu de 2
- **Dress Code :** Grid 3x2 cercles (60px au lieu de 80px)
- **Typography :** Réduire tailles (voir DESIGN-SYSTEM-PREMIUM.md)
- **Padding sections :** 80px 24px au lieu de 120px 64px

---

## 🗂️ Structure des Fichiers

```
front/src/
├── components/
│   ├── HeroBanner/                (GARDER - OK)
│   │   ├── HeroBanner.jsx
│   │   └── HeroBanner.scss
│   ├── CountdownPremium/          (NOUVEAU)
│   │   ├── CountdownPremium.jsx
│   │   └── CountdownPremium.scss
│   ├── Timeline/                  (NOUVEAU)
│   │   ├── Timeline.jsx
│   │   └── Timeline.scss
│   ├── DressCodePremium/          (NOUVEAU)
│   │   ├── DressCodePremium.jsx
│   │   └── DressCodePremium.scss
│   ├── PhotosCouple/              (NOUVEAU)
│   │   ├── PhotosCouple.jsx
│   │   └── PhotosCouple.scss
│   └── MessagePersonnel/          (NOUVEAU - Optionnel)
│       ├── MessagePersonnel.jsx
│       └── MessagePersonnel.scss
├── styles/
│   ├── _variables.scss            (UPDATE - Nouvelles couleurs)
│   ├── _mixins.scss               (UPDATE - Responsive mixins)
│   ├── _components.scss           (NOUVEAU - Design System)
│   └── main.scss
└── hooks/
    └── useCountdown.js            (GARDER - Réutilisable)
```

---

## ✅ Checklist Implémentation

### Phase 1 : Setup
- [ ] Backup de l'ancien code (git branch backup-old-design)
- [ ] Créer nouvelle branche git (feature/redesign-premium)
- [ ] Mettre à jour _variables.scss avec nouvelles couleurs
- [ ] Créer _components.scss avec design system

### Phase 2 : CountdownPremium
- [ ] Créer composant CountdownPremium
- [ ] Implémenter layout desktop (1x4 grid)
- [ ] Implémenter layout mobile (2x2 grid)
- [ ] Ajouter hexagones dorés et lignes
- [ ] Backdrop-filter blur translucent boxes
- [ ] Animations Framer Motion
- [ ] Responsive adapté

### Phase 3 : Timeline
- [ ] Créer composant Timeline
- [ ] Ligne verticale dorée centrale
- [ ] Grid 3 colonnes (temps | icône | contenu)
- [ ] Alternance gauche/droite desktop
- [ ] Layout vertical simple mobile
- [ ] Ornements coins (bordures dorées)
- [ ] Animations stagger

### Phase 4 : DressCodePremium
- [ ] Créer composant DressCodePremium
- [ ] Fond sage avec motifs CSS
- [ ] Losanges décoratifs coins
- [ ] 6 cercles palette avec brillance
- [ ] Grid responsive (6 desktop, 3x2 mobile)
- [ ] Footer box arrondie
- [ ] Hover effects cercles

### Phase 5 : PhotosCouple
- [ ] Créer composant PhotosCouple
- [ ] Grid photos 2 colonnes
- [ ] Filtre grayscale N&B
- [ ] Citation box avec guillemets dorés
- [ ] Photo featured 16:9
- [ ] Hover scale effects
- [ ] Responsive 1 colonne mobile

### Phase 6 : MessagePersonnel (Optionnel)
- [ ] Créer composant MessagePersonnel
- [ ] Box centrale blanche bordure dorée
- [ ] Ornements floraux coins
- [ ] Signature script or
- [ ] Responsive adapté

### Phase 7 : Integration & Polish
- [ ] Mettre à jour App.jsx avec tous les composants
- [ ] Vérifier ordre des sections
- [ ] Tester scroll fluide
- [ ] Optimiser performance animations
- [ ] Tester responsive complet (320px → 1920px)
- [ ] Valider accessibilité contrastes
- [ ] Build production
- [ ] Test lighthouse score

---

## 🚨 Points Critiques

### ⚠️ NE PAS OUBLIER
1. **Backdrop-filter :** Peut nécessiter prefixes (-webkit-backdrop-filter)
2. **Mobile First :** Développe mobile d'abord, desktop ensuite
3. **Touch Targets :** Min 44x44px pour éléments interactifs mobile
4. **Animations :** Respecter prefers-reduced-motion
5. **Images :** Hugo fournira les photos (utiliser placeholders pour l'instant)

### 🎯 Priorités UX
1. **Performance mobile** : Site doit être fluide sur mobile (70% trafic)
2. **Contraste :** Texte blanc sur olive/sage doit être lisible (WCAG AA)
3. **Spacing :** Respecter strictly le système 8px grid
4. **Cohérence :** Toutes les sections doivent partager le même DNA visuel

---

## 📊 Validation Finale

### Tests à faire avant livraison
- [ ] Desktop 1920x1080 : Layout parfait
- [ ] Tablet 768x1024 : Transitions fluides
- [ ] Mobile 375x667 (iPhone SE) : Tout lisible, touch targets OK
- [ ] Mobile 320x568 (iPhone 5) : Fonctionne encore
- [ ] Animations fluides 60fps
- [ ] Build < 500kb gzipped
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95

---

## 🎁 Assets Fournis

### Fonts
- Great Vibes : Google Fonts
- Inter : Google Fonts

### Images
- Hero Banner : `images-site/banner-image.jpeg` (GARDER)
- Photos Couple : À fournir par Hugo (placeholders pour l'instant)

### Inspirations
- `images inspi/imagesite1.jpeg`
- `images inspi/imagesite2.jpeg`

---

## 📞 Communication

### Questions ?
- Designer UX disponible pour clarifications
- Hugo valide le résultat final avec Carla
- Itérations possibles si nécessaire

### Livraison Attendue
1. Code React complet et fonctionnel
2. Build production prêt pour Hostinger
3. DEPLOYMENT.md mis à jour si nécessaire
4. Rapport technique des changements

---

## 🎨 Moodboard Reminder

**Hugo a dit :**
> "c'est moche, refais toute la maquette. je veux quelque chose de plus classe et distingué. je veux des couleurs, des formes, la c'est simple et moche, je veux élégant et visuel, artistique."

**Inspiration :**
- imagesite1.jpeg : Layout cartes, timeline, photos N&B, palette cercles
- imagesite2.jpeg : Countdown massif, fond olive, alternance couleurs

**Objectif atteint :**
✅ Formes géométriques (hexagones, losanges, cercles)  
✅ Couleurs variées (alternance Olive/Sage/Crème/Blanc)  
✅ Design artistique et sophistiqué  
✅ Plus de vie et de premium  
✅ Chaque section a son identité visuelle forte

---

**Prêt pour le développement !** 🚀

**Designer :** Wedding UX Designer Agent  
**Date Handoff :** 17 Février 2026  
**Documents :** 3 fichiers spec (57kb total)  
**Status :** APPROVED FOR DEVELOPMENT ✅
