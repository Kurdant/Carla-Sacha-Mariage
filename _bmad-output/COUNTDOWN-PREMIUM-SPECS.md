# Countdown Section - Design Specs Premium Edition

**Projet :** Carla-Sacha-Mariage  
**Section :** Countdown Timer Redesign  
**Style :** Premium, Artistique, Élégant (inspiré imagesite1.jpeg)  
**Date :** 17 Février 2026  
**Designer :** Wedding UX Designer Agent  

---

## 🎯 Vision & Objectif

Transformer le countdown basique en une **pièce artistique élégante** qui combine :
- **Numbers massifs** ultra-visibles
- **Formes géométriques** fines et sophistiquées
- **Ornements dorés** pour effet premium
- **Palette de cercles** intégrée organiquement
- **Traits décoratifs** en arrière-plan subtil

**Mood :** Élégant, artistique, premium, distingué, raffiné

---

## 🎨 Palette Couleurs

```scss
// Background principal
$bg-primary: #F5F1E8;      // Parchment crème (dominante)
$bg-overlay: #FDFCF9;      // Crème ultra-clair pour boxes

// Texte & Numbers
$text-dark: #3D4835;        // Olivewood foncé (numbers)
$text-accent: #6B5D54;      // Bark (labels)

// Accents premium
$gold-primary: #C9A86A;     // Or principal (traits)
$gold-light: #D4BC8E;       // Or clair (hover)
$olive-accent: #A6B88F;     // Olive (cercles palette)
$sage-accent: #8A9A7B;      // Sage (cercles palette)

// Ornements
$line-subtle: rgba(201, 168, 106, 0.2);   // Traits dorés subtils
$box-border: rgba(61, 72, 53, 0.15);      // Bordures boxes
```

---

## 📐 Layout Structure (Desktop 1440px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║    [Trait doré horizontal subtil]                     ║ │
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│              ┌─────────────────────┐                        │
│              │ Jusqu'au Grand Jour │  ← Script font       │
│              └─────────────────────┘                        │
│                                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│  │      │  │      │  │      │  │      │                  │
│  │ 152  │  │  12  │  │  45  │  │  30  │  ← HUGE numbers │
│  │      │  │      │  │      │  │      │                  │
│  │ JOURS│  │HEURES│  │ MIN  │  │ SEC  │  ← Labels       │
│  └──────┘  └──────┘  └──────┘  └──────┘                  │
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║    [Trait doré horizontal]                            ║ │
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│              ┌───────────────────────┐                      │
│              │  Code Vestimentaire   │  ← Box fine        │
│              └───────────────────────┘                      │
│                                                             │
│         ○  ○  ○  ○  ○  ○   ← 6 cercles palette           │
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║    [Ornement coin gauche]    [Ornement coin droit]   ║ │
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📏 Dimensions Précises

### Section Container
```scss
.countdown-section-premium {
  min-height: 100vh;
  background: linear-gradient(180deg, #F5F1E8 0%, #FDFCF9 100%);
  position: relative;
  padding: 120px 64px;
  
  // Traits décoratifs en arrière-plan
  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(201, 168, 106, 0.3) 20%,
      rgba(201, 168, 106, 0.3) 80%,
      transparent
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 120px;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(201, 168, 106, 0.3) 20%,
      rgba(201, 168, 106, 0.3) 80%,
      transparent
    );
  }
}
```

### Titre "Jusqu'au Grand Jour"
```scss
.countdown-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;          // 56px
  font-weight: 400;
  color: #3D4835;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  
  // Box fine autour du titre
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;
    width: 200px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      #C9A86A,
      transparent
    );
  }
}
```

### Countdown Numbers Container
```scss
.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto 100px;
}
```

### Bloc Individual Number
```scss
.countdown-block {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(61, 72, 53, 0.1);
  border-radius: 16px;
  padding: 48px 24px;
  text-align: center;
  position: relative;
  
  // Shadow premium subtile
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.02);
  
  // Ornement coin supérieur gauche
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    width: 24px;
    height: 24px;
    border-top: 2px solid rgba(201, 168, 106, 0.4);
    border-left: 2px solid rgba(201, 168, 106, 0.4);
    border-radius: 4px 0 0 0;
  }
  
  // Ornement coin inférieur droit
  &::after {
    content: '';
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    border-bottom: 2px solid rgba(201, 168, 106, 0.4);
    border-right: 2px solid rgba(201, 168, 106, 0.4);
    border-radius: 0 0 4px 0;
  }
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.08),
      0 2px 8px rgba(0, 0, 0, 0.04);
    border-color: rgba(201, 168, 106, 0.3);
  }
}
```

### Numbers Typography
```scss
.countdown-number {
  font-family: 'Inter', sans-serif;
  font-size: 5rem;              // 80px - MASSIVE
  font-weight: 700;
  line-height: 1;
  color: #3D4835;
  margin-bottom: 16px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  
  // Subtle gradient sur les numbers
  background: linear-gradient(
    180deg,
    #3D4835 0%,
    #6B5D54 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Labels Typography
```scss
.countdown-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;          // 14px
  font-weight: 600;
  color: #6B5D54;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  
  // Petit trait décoratif au-dessus
  position: relative;
  padding-top: 12px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(201, 168, 106, 0.3);
  }
}
```

### Section Dress Code
```scss
.dress-code-container {
  text-align: center;
  margin-top: 80px;
}

.dress-code-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #3D4835;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
  
  // Box fine autour du titre
  display: inline-block;
  padding: 12px 32px;
  border: 1px solid rgba(61, 72, 53, 0.2);
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.5);
}
```

### Palette Circles
```scss
.color-palette {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
}

.color-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(61, 72, 53, 0.1);
  
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.15),
      0 0 0 3px rgba(201, 168, 106, 0.3);
  }
}

// Couleurs spécifiques
.color-circle--parchment { background: #F5F1E8; }
.color-circle--sand { background: #E8DCC8; }
.color-circle--olive { background: #A6B88F; }
.color-circle--sage { background: #8A9A7B; }
.color-circle--bark { background: #6B5D54; }
.color-circle--gold { background: #C9A86A; }
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```scss
@media (max-width: 767px) {
  .countdown-section-premium {
    padding: 80px 24px;
  }
  
  .countdown-title {
    font-size: 2.5rem;        // 40px
    margin-bottom: 60px;
  }
  
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .countdown-block {
    padding: 32px 16px;
  }
  
  .countdown-number {
    font-size: 3.5rem;        // 56px
  }
  
  .countdown-label {
    font-size: 0.75rem;       // 12px
  }
  
  .color-circle {
    width: 56px;
    height: 56px;
  }
  
  .dress-code-title {
    font-size: 1rem;
    padding: 10px 24px;
  }
}
```

### Tablet (768px - 1023px)
```scss
@media (min-width: 768px) and (max-width: 1023px) {
  .countdown-section-premium {
    padding: 100px 48px;
  }
  
  .countdown-title {
    font-size: 3rem;          // 48px
  }
  
  .countdown-grid {
    gap: 24px;
    max-width: 900px;
  }
  
  .countdown-number {
    font-size: 4.5rem;        // 72px
  }
  
  .color-circle {
    width: 64px;
    height: 64px;
  }
}
```

---

## 🎬 Animations Framer Motion

### Animation Section Entry
```jsx
<motion.section
  className="countdown-section-premium"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

### Animation Titre
```jsx
<motion.h2
  className="countdown-title"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
>
  Jusqu'au Grand Jour
</motion.h2>
```

### Animation Countdown Blocs (Stagger)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const blockVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1]  // Custom cubic-bezier
    }
  }
};

<motion.div
  className="countdown-grid"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {countdownItems.map((item, i) => (
    <motion.div
      key={i}
      className="countdown-block"
      variants={blockVariants}
    >
      ...
    </motion.div>
  ))}
</motion.div>
```

### Animation Numbers (Changement)
```jsx
// Animation subtile au changement de chiffre
<motion.div
  className="countdown-number"
  key={value}  // Re-render sur changement
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  {value}
</motion.div>
```

### Animation Cercles Palette
```jsx
const circleVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5 
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6 + (i * 0.08),
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

{colors.map((color, i) => (
  <motion.div
    key={i}
    custom={i}
    variants={circleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`color-circle color-circle--${color.name}`}
  />
))}
```

---

## 🎨 Ornements & Formes Premium

### Trait Horizontal Décoratif
```jsx
const DecorativeLine = () => (
  <motion.div
    className="decorative-line"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
  />
);

// SCSS
.decorative-line {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(201, 168, 106, 0.4) 10%,
    rgba(201, 168, 106, 0.6) 50%,
    rgba(201, 168, 106, 0.4) 90%,
    transparent
  );
  margin: 60px auto;
  max-width: 600px;
  transform-origin: center;
}
```

### Ornement Coin (SVG inline)
```jsx
const CornerOrnament = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    className="corner-ornament"
  >
    <path 
      d="M 2 2 L 2 15 M 2 2 L 15 2" 
      stroke="#C9A86A" 
      strokeWidth="1.5" 
      fill="none"
      strokeLinecap="round"
    />
    <circle 
      cx="2" 
      cy="2" 
      r="2" 
      fill="#C9A86A"
    />
  </svg>
);

// Position dans countdown-block
.corner-ornament {
  position: absolute;
  
  &.top-left {
    top: 12px;
    left: 12px;
  }
  
  &.bottom-right {
    bottom: 12px;
    right: 12px;
    transform: rotate(180deg);
  }
}
```

### Pattern Subtil Background
```scss
.countdown-section-premium {
  // Pattern de points très subtil
  background-image: 
    radial-gradient(
      circle at 20% 50%, 
      rgba(201, 168, 106, 0.03) 0%, 
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%, 
      rgba(166, 184, 143, 0.03) 0%, 
      transparent 50%
    );
}
```

---

## 💎 Détails Premium Supplémentaires

### Text Shadow Subtil sur Titre
```scss
.countdown-title {
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(201, 168, 106, 0.1);
}
```

### Gradient Border sur Hover
```scss
.countdown-block:hover {
  background: 
    linear-gradient(#FFFFFF, #FFFFFF) padding-box,
    linear-gradient(135deg, #C9A86A, #A6B88F) border-box;
  border: 2px solid transparent;
}
```

### Animation Pulse Subtile
```scss
@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
}

.countdown-number {
  animation: pulse-subtle 2s ease-in-out infinite;
}
```

---

## ✅ Checklist Implémentation

### Phase 1 : Structure
- [ ] Créer nouveau composant CountdownPremium.jsx
- [ ] Setup layout grid 4 colonnes
- [ ] Créer blocs individuels avec ornements
- [ ] Intégrer titre script

### Phase 2 : Styling
- [ ] Appliquer palette couleurs premium
- [ ] Créer boxes fines avec borders
- [ ] Ajouter ornements coins
- [ ] Implémenter traits décoratifs
- [ ] Gradient subtil background

### Phase 3 : Animations
- [ ] Stagger animation blocs
- [ ] Fade-in titre
- [ ] Hover effects premium
- [ ] Animation changement numbers

### Phase 4 : Responsive
- [ ] Grid 2x2 mobile
- [ ] Ajuster font-sizes
- [ ] Adapter spacing
- [ ] Test touch interactions

### Phase 5 : Polish
- [ ] Shadows subtiles
- [ ] Transitions fluides
- [ ] Tester performance
- [ ] Validation accessibilité

---

## 🎯 Impact Visuel Attendu

**Avant :** Countdown corporate basique, peu d'impact visuel  
**Après :** Pièce artistique premium qui attire l'œil avec :
- Numbers MASSIFS impossibles à manquer
- Ornements dorés sophistiqués
- Boxes élégantes avec depth
- Animations butter-smooth
- Cohérence avec moodboard imagesite1

**Temps de rétention visuelle estimé :** +300%

---

**Designer :** Wedding UX Designer Agent  
**Pour implémentation par :** React Developer Agent  
**Validation requise :** Hugo + Carla
