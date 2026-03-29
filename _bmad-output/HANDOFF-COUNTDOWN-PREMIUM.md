# HANDOFF - UX Designer → React Developer

**Date :** 17 Février 2026  
**De :** Wedding UX Designer Agent  
**À :** React Developer Agent  
**Priorité :** HAUTE  

---

## 🎯 Mission

**REDESIGNER COMPLÈTEMENT** la section Countdown Timer du site Carla-Sacha-Mariage.

**Raison :** Le countdown actuel est jugé "moche, trop simple et corporate" par Hugo. Il veut quelque chose d'**artistique, élégant, premium** comme dans les images d'inspiration imagesite1.jpeg et imagesite2.jpeg.

---

## 📋 Specs Design Complètes

**Document de référence :**  
`_bmad-output/COUNTDOWN-PREMIUM-SPECS.md` (16kb)

Ce document contient TOUTES les specs précises :
- Layout exact avec dimensions
- Typographie (sizes, weights, spacing)
- Couleurs HEX/RGBA
- Ornements et formes premium
- Animations Framer Motion
- Code SCSS complet
- Responsive breakpoints

---

## 🎨 Changements Majeurs vs Version Actuelle

### ❌ À RETIRER
- Countdown basique avec cards blanches simples
- Grid 2x2 mobile fade
- Design "corporate" sans personnalité

### ✅ À IMPLÉMENTER

**1. Numbers MASSIFS**
- Desktop : 80px (5rem) vs 48px actuel
- Mobile : 56px (3.5rem) vs 48px
- Font-weight: 700 avec gradient text

**2. Boxes Premium avec Ornements**
- Background translucide `rgba(255, 255, 255, 0.6)`
- Backdrop-filter blur(10px) pour effet verre
- Bordures subtiles `rgba(61, 72, 53, 0.1)`
- Ornements coins dorés (SVG ou CSS)
- Shadows multi-layers pour depth

**3. Traits Décoratifs**
- Lignes horizontales dorées en haut/bas section
- Trait doré sous le titre script
- Pattern de points subtil en background
- Gradient doux sur fond crème

**4. Titre dans Box Fine**
- "Jusqu'au Grand Jour" (Great Vibes)
- Box arrondie autour du titre
- Trait décoratif en dessous

**5. Palette Cercles Intégrée**
- 6 cercles (72px) en bas du countdown
- Titre "Code Vestimentaire" dans box fine
- Spacing élégant entre cercles

---

## 🔧 Implémentation Technique

### Fichiers à Modifier

```
front/src/components/Countdown/
├── Countdown.jsx       → REWRITE complet
└── Countdown.scss      → REWRITE complet
```

### Structure JSX Attendue

```jsx
<section className="countdown-section-premium">
  {/* Trait décoratif haut */}
  <DecorativeLine position="top" />
  
  {/* Titre avec box fine */}
  <h2 className="countdown-title">Jusqu'au Grand Jour</h2>
  
  {/* Grid countdown avec ornements */}
  <div className="countdown-grid">
    {countdownItems.map((item) => (
      <div className="countdown-block">
        {/* Ornements coins */}
        <CornerOrnament position="top-left" />
        <div className="countdown-number">{item.value}</div>
        <div className="countdown-label">{item.label}</div>
        <CornerOrnament position="bottom-right" />
      </div>
    ))}
  </div>
  
  {/* Trait décoratif bas */}
  <DecorativeLine position="bottom" />
  
  {/* Palette + Titre */}
  <div className="dress-code-container">
    <div className="dress-code-title">Code Vestimentaire</div>
    <div className="color-palette">
      {/* 6 cercles */}
    </div>
  </div>
</section>
```

### Animations Framer Motion Clés

**1. Stagger sur les blocs**
```jsx
staggerChildren: 0.12,
delayChildren: 0.3
```

**2. Bloc individuel**
```jsx
initial: { opacity: 0, y: 40, scale: 0.95 }
animate: { opacity: 1, y: 0, scale: 1 }
transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
```

**3. Cercles palette**
```jsx
delay: 0.6 + (i * 0.08)  // Stagger delay
```

---

## 🎨 Palette Couleurs Exacte

```scss
// Backgrounds
$bg-primary: #F5F1E8;              // Parchment
$bg-overlay: rgba(255,255,255,0.6); // Boxes translucides

// Text
$text-dark: #3D4835;               // Olivewood (numbers)
$text-accent: #6B5D54;             // Bark (labels)

// Ornements
$gold-primary: #C9A86A;            // Or (traits)
$gold-light: rgba(201,168,106,0.3); // Or subtil

// Borders
$box-border: rgba(61,72,53,0.1);   // Bordures boxes
```

---

## 📱 Responsive Breakpoints

**Mobile (< 768px)**
- Grid 2x2
- Numbers 56px
- Padding 80px 24px
- Cercles 56px

**Tablet (768-1023px)**
- Grid 1x4
- Numbers 72px
- Padding 100px 48px
- Cercles 64px

**Desktop (≥ 1024px)**
- Grid 1x4
- Numbers 80px
- Padding 120px 64px
- Cercles 72px

---

## ✅ Checklist Implémentation

### Phase 1 : Structure
- [ ] Backup du countdown actuel
- [ ] Créer nouveau composant CountdownPremium.jsx
- [ ] Setup layout grid 4 colonnes
- [ ] Intégrer titre script avec box

### Phase 2 : Styling Premium
- [ ] Boxes translucides avec backdrop-filter
- [ ] Ornements coins (CSS ::before/::after ou SVG)
- [ ] Traits décoratifs horizontaux
- [ ] Gradient text sur numbers
- [ ] Shadows multi-layers

### Phase 3 : Animations
- [ ] Stagger animation blocs
- [ ] Fade-in titre
- [ ] Hover effects premium
- [ ] Animation changement numbers
- [ ] Cercles stagger

### Phase 4 : Intégration Palette
- [ ] Titre "Code Vestimentaire" dans box
- [ ] 6 cercles avec couleurs exactes
- [ ] Spacing élégant
- [ ] Hover effects cercles

### Phase 5 : Responsive
- [ ] Grid 2x2 mobile
- [ ] Ajuster font-sizes
- [ ] Adapter spacing
- [ ] Test touch interactions

### Phase 6 : Polish
- [ ] Tester animations fluides
- [ ] Vérifier performance
- [ ] Valider accessibilité
- [ ] Build production

---

## 🚨 Points Critiques

### MUST HAVE
1. **Numbers MASSIFS** - Impact visuel maximal
2. **Ornements dorés** - Premium feel
3. **Boxes translucides** - Depth et sophistication
4. **Animations stagger** - Élégance et fluidité

### NICE TO HAVE
1. Gradient border au hover
2. Animation pulse subtile sur numbers
3. Pattern points en background
4. Transition smooth entre sections

---

## 🎯 Objectif Final

**Transformer ça :**
```
Countdown basique corporate
└─ 4 cards blanches simples
   └─ Numbers 48px
      └─ Bordure Sage
```

**En ça :**
```
Countdown premium artistique
├─ Ornements dorés élégants
├─ Boxes translucides effet verre
├─ Numbers MASSIFS 80px gradient
├─ Traits décoratifs subtils
├─ Palette intégrée organiquement
└─ Animations butter-smooth
```

---

## 📞 Contact

**Questions design :**  
Revenir à Wedding UX Designer Agent

**Validation :**  
Hugo testera sur localhost:5174

---

## 🎉 Go Go Go !

Toutes les specs sont dans `COUNTDOWN-PREMIUM-SPECS.md`.  
Le design est validé par Hugo.  
Prêt pour implémentation immédiate.

**Let's make it premium !** 💎

---

*Handoff créé par Wedding UX Designer Agent*  
*Pour implémentation par React Developer Agent*  
*Deadline : ASAP*
