# 🎯 BRIEF FINAL - React Developer

**Projet :** Carla-Sacha-Mariage MVP Phase 1  
**Date :** 17 Février 2026  
**Designer :** Wedding UX Designer Agent  
**Développeur :** React Developer Agent  
**Deadline :** ASAP  

---

## ✅ Validations Hugo - Toutes Finalisées

### 1. Assets & Ressources
- **Photo Hero Banner :** `images-site/banner-image.jpeg`
- **Moodboard :** `images inspi/` (5 images analysées)

### 2. Typographie
- **Script (Noms) :** Great Vibes
- **Sans-serif (Texte) :** Inter
- **Weights :** 300, 400, 500, 600, 700

### 3. Palette Couleurs (6 couleurs)
```scss
$color-parchment: #F5F1E8;  // Crème
$color-sand: #E8DCC8;       // Sable
$color-olive: #A6B88F;      // Olive
$color-sage: #8A9A7B;       // Sauge
$color-bark: #6B5D54;       // Écorce
$color-gold: #C9A86A;       // Or
```

### 4. Countdown Design
- **Taille numbers :** 48px mobile, 64px desktop ("gros mais pas trop")
- **Style :** Cards avec fond blanc, border Sage
- **Techno :** Liberté développeur

### 5. Dress Code
- **Afficher :** 6 cercles de couleurs (bien dosées)
- **Texte :** "Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit. Élégance et confort avant tout !"

### 6. Effet Scroll Principal ✨
**VALIDATION CLÉE :**

- **Hero Banner = FIXE** (`position: fixed`, z-index: 1)
- **Sections suivantes MONTENT PAR-DESSUS** (z-index: 2)
- **Overlay opaque** : Sections cachent progressivement le Hero
- **Animation slide-up** fluide au scroll
- Impression de "changer de page" sans quitter la page

**Implémentation CSS :**
```scss
.hero-banner {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.countdown-section {
  position: relative;
  z-index: 2;
  margin-top: 100vh; // Commence après le Hero
  background: $color-parchment;
}

.dress-code-section {
  position: relative;
  z-index: 2;
  background: $color-sage;
}
```

### 7. Éléments NON souhaités
- ❌ Scroll indicator (flèche animée bas Hero)
- ❌ Parallax classique (photo qui bouge différemment)

### 8. Hébergement
- **Plateforme :** Hostinger
- **Type :** Sous-domaine

---

## 📄 Documents de Référence

### Document Principal (À LIRE EN PRIORITÉ)
**`Homepage-Design-Specs-MVP.md`** (40kb)

Contient :
- Wireframes ASCII de toutes les sections
- Specs typographiques complètes (px, rem, weights)
- Spacing system (base 8px)
- Animations Framer Motion (code fourni)
- Responsive breakpoints (mobile/tablet/desktop)
- Code SCSS suggéré
- Logique JavaScript countdown
- Checklist développement 6 phases

### Documents Complémentaires
1. **`Moodboard-Analysis-Carla-Sacha.md`** - Patterns design extraits
2. **`Design-Validations-Hugo.md`** - Validations finales (ce document)

---

## 🏗️ Structure MVP Phase 1

### Architecture One-Page

```
┌─────────────────────────────────┐
│   SECTION 1 : HERO BANNER       │
│   (position: fixed, 100vh)      │
│   - Photo background            │
│   - "Sacha & Carla"             │
│   - "25 Juillet 2026"           │
│   - Séparateur doré             │
└─────────────────────────────────┘
              ↓ Scroll
┌─────────────────────────────────┐
│   SECTION 2 : COUNTDOWN         │ ← Monte par-dessus Hero
│   (margin-top: 100vh)           │
│   - Titre "Jusqu'au Grand Jour" │
│   - 4 blocs (J/H/M/S)           │
│   - Background: Parchment       │
└─────────────────────────────────┘
              ↓ Scroll (slide-up)
┌─────────────────────────────────┐
│   SECTION 3 : DRESS CODE        │ ← Monte par-dessus tout
│   - Titre "Code Vestimentaire"  │
│   - Texte explicatif            │
│   - 6 cercles couleurs          │
│   - Background: Sage            │
└─────────────────────────────────┘
```

---

## 🎨 Hiérarchie Typographique

### Mobile First

**H1 - Noms couple (Great Vibes)**
```scss
font-size: 3rem;      // 48px
font-weight: 400;
color: white;
text-shadow: 0 2px 12px rgba(0,0,0,0.3);
```

**H2 - Titres sections (Inter)**
```scss
font-size: 1.75rem;   // 28px
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Body - Texte courant (Inter)**
```scss
font-size: 1rem;      // 16px
font-weight: 400;
line-height: 1.6;
```

**Numbers - Countdown (Inter)**
```scss
font-size: 3rem;      // 48px mobile
font-weight: 700;
font-variant-numeric: tabular-nums;
```

### Responsive Scaling

| Breakpoint | H1 | H2 | Numbers |
|------------|----|----|---------|
| Mobile (< 768px) | 48px | 28px | 48px |
| Tablet (768-1023px) | 64px | 32px | 56px |
| Desktop (≥ 1024px) | 80px | 40px | 64px |

---

## 🎬 Animations Framer Motion

### Animation 1 : Hero Fade-In (Page Load)
```jsx
<motion.div
  className="hero-banner__content"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

### Animation 2 : Countdown Slide-Up (Scroll In View)
```jsx
<motion.section
  className="countdown-section"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

### Animation 3 : Countdown Items Stagger
```jsx
<motion.div
  className="countdown"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  whileInView="visible"
>
  {/* Items avec variants */}
</motion.div>
```

### Animation 4 : Dress Code Circles Stagger
```jsx
{colors.map((color, i) => (
  <motion.div
    key={i}
    variants={{
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 }
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className={`palette__color--${color.name}`} />
  </motion.div>
))}
```

---

## 📱 Responsive Breakpoints

```scss
// Mobile First
$breakpoint-mobile: 320px;   // Base
$breakpoint-tablet: 768px;   // Tablette
$breakpoint-desktop: 1024px; // Desktop
```

### Adaptations Clés

**Hero Banner :**
- Mobile : H1 48px, padding 32px
- Desktop : H1 80px, padding 64px

**Countdown :**
- Mobile : 2x2 grid possible si serré
- Desktop : 4 colonnes, gap 32px

**Dress Code :**
- Mobile : Cercles 60px, 3 par ligne
- Desktop : Cercles 80px, 6 en ligne

---

## 🛠️ Stack Technique Requis

```json
{
  "framework": "React 18",
  "build": "Vite",
  "styling": "SCSS (Sass)",
  "animations": "Framer Motion",
  "approach": "Mobile First"
}
```

### Installation

```bash
npm install framer-motion sass
```

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## ⏱️ Logique Countdown

```javascript
const targetDate = new Date('2026-07-25T10:30:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update state
  // Si distance < 0 : afficher "C'est le grand jour !"
};

setInterval(updateCountdown, 1000);
```

---

## 📦 Livrables Attendus

### Développement
1. ✅ Projet Vite + React configuré
2. ✅ 3 composants (HeroBanner, Countdown, DressCode)
3. ✅ SCSS avec tokens (_variables.scss)
4. ✅ Animations Framer Motion implémentées
5. ✅ Effet scroll overlay (Hero fixe)
6. ✅ Countdown fonctionnel (temps réel)
7. ✅ Responsive parfait (mobile/tablet/desktop)

### Performance
- Bundle size < 300KB
- LCP < 2.5s
- Support prefers-reduced-motion
- Images optimisées (WebP si possible)

### Accessibilité
- Contrastes WCAG AA
- Navigation clavier
- Alt text images
- Texte redimensionnable

---

## ✅ Checklist Développement

### Phase 1 : Setup (30min)
- [ ] Créer projet Vite React
- [ ] Installer SCSS + Framer Motion
- [ ] Créer structure fichiers
- [ ] Créer _variables.scss avec tokens
- [ ] Importer Google Fonts

### Phase 2 : Hero Banner (2h)
- [ ] Component HeroBanner.jsx
- [ ] Styles SCSS (position: fixed, 100vh)
- [ ] Intégrer photo banner-image.jpeg
- [ ] Texte "Sacha & Carla" + Date
- [ ] Animation fade-in
- [ ] Responsive (48-80px H1)

### Phase 3 : Countdown (2h)
- [ ] Component Countdown.jsx
- [ ] Logique JavaScript temps réel
- [ ] 4 blocs (Jours/Heures/Minutes/Secondes)
- [ ] Cards design (fond blanc, border Sage)
- [ ] Animation slide-up + stagger
- [ ] Responsive (48-64px numbers)
- [ ] margin-top: 100vh, z-index: 2

### Phase 4 : Dress Code (1h30)
- [ ] Component DressCode.jsx
- [ ] 6 cercles couleurs (60-80px)
- [ ] Texte explicatif
- [ ] Animation stagger cercles
- [ ] Responsive (2-3 lignes mobile)
- [ ] Background Sage, z-index: 2

### Phase 5 : Scroll Overlay (1h)
- [ ] Valider Hero position: fixed, z-index: 1
- [ ] Sections z-index: 2, margin-top: 100vh
- [ ] Tester effet "monte par-dessus"
- [ ] Ajuster transitions Framer Motion
- [ ] Vérifier smooth scroll

### Phase 6 : Finitions (1h)
- [ ] Support prefers-reduced-motion
- [ ] Tester tous breakpoints
- [ ] Vérifier contrastes accessibilité
- [ ] Build production
- [ ] Tester performance

**Temps total estimé : 6-8h**

---

## 🚨 Points d'Attention

### CRITIQUE
1. **Effet scroll overlay** : Hero DOIT rester fixe, sections montent par-dessus
2. **Photo path** : `images-site/banner-image.jpeg` (vérifier import)
3. **Countdown temps réel** : Update chaque seconde
4. **Mobile First** : Tester sur vrai mobile (70% trafic)

### Important
- Spacing cohérent (multiples de 8px)
- Animations GPU-accelerated (transform, opacity)
- Contraste texte/fond WCAG AA
- Tailles touch targets ≥ 44px

### Nice to have
- Compression image WebP (Hugo peut faire manuellement)
- SEO meta tags basiques
- Favicon

---

## 📞 Contact & Support

**Questions design :**  
Revenir à l'agent UX Designer (wedding-ux-designer)

**Questions technique React :**  
Utiliser la doc fournie ou consulter Hugo

**Validation intermédiaire :**  
Hugo teste sur mobile + desktop, valide avec Carla

---

## 🎯 Success Criteria

### Must Have (MVP)
- ✅ Hero Banner élégant avec photo
- ✅ Countdown fonctionnel et lisible
- ✅ Dress Code avec 6 couleurs
- ✅ Effet scroll overlay fluide
- ✅ Responsive mobile/desktop parfait
- ✅ Performance < 3s chargement

### Nice to Have (Phase 2)
- Parallax subtil Hero
- Fondu progressif overlay
- Navigation smooth sections
- Micro-interactions hover

---

**READY TO CODE !** 🚀

Tous les éléments sont spécifiés.  
Le développement peut commencer immédiatement.

---

*Brief final créé par Wedding UX Designer Agent*  
*Pour React Developer Agent*  
*Date : 17/02/2026*  
*Validé par : Hugo*
