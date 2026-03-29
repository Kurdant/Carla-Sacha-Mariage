# DESIGN SYSTEM PREMIUM - Carla-Sacha-Mariage
## Tokens, Composants & Guidelines

**Designer :** Wedding UX Designer Agent  
**Date :** 17 Février 2026  
**Version :** 1.0.0  
**Status :** Ready for Implementation

---

## 🎨 Color Tokens

### Primary Palette
```scss
// _variables.scss

// Backgrounds
$bg-olive: #8A9A7B;           // Sage foncé - sections impactantes
$bg-sage: #A6B88F;            // Olive clair - sections douces
$bg-parchment: #F5F1E8;       // Crème - sections neutres
$bg-white: #FFFFFF;           // Blanc pur - sections aérées
$bg-sand: #E8DCC8;            // Beige sable - variante

// Text Colors
$text-on-dark: #FFFFFF;       // Texte blanc sur fonds foncés
$text-on-light: #3D4835;      // Texte olivewood sur fonds clairs
$text-accent: #C9A86A;        // Or pour accents et highlights

// Gold Ornaments
$gold-primary: #C9A86A;       // Or principal
$gold-secondary: #D4BC8E;     // Or clair
$gold-light: rgba(201,168,106,0.3);  // Or subtil (30% opacity)

// Dress Code Palette
$color-parchment: #F5F1E8;
$color-sand: #E8DCC8;
$color-olive: #A6B88F;
$color-sage: #8A9A7B;
$color-bark: #6B5D54;
$color-gold: #C9A86A;
```

### Semantic Tokens
```scss
// States
$color-success: #4CAF50;
$color-error: #F44336;
$color-warning: #FF9800;
$color-info: #2196F3;

// Borders
$border-light: rgba(255,255,255,0.2);
$border-dark: rgba(61,72,53,0.2);
$border-gold: rgba(201,168,106,0.4);

// Shadows
$shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
$shadow-md: 0 4px 16px rgba(0,0,0,0.1);
$shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
$shadow-xl: 0 12px 40px rgba(0,0,0,0.15);
$shadow-gold: 0 0 30px rgba(201,168,106,0.2);
```

---

## 📝 Typography Tokens

### Font Families
```scss
// Fonts
$font-script: 'Great Vibes', cursive;     // Titres romantiques
$font-sans: 'Inter', sans-serif;          // Corps de texte
```

### Typography Scale - Desktop
```scss
// Headings
$font-size-h1: 4rem;          // 64px - Hero titles
$font-size-h2: 3.5rem;        // 56px - Section titles
$font-size-h3: 3rem;          // 48px - Subsection titles
$font-size-h4: 2.5rem;        // 40px - Card titles
$font-size-h5: 2rem;          // 32px - Small titles
$font-size-h6: 1.5rem;        // 24px - Captions

// Body
$font-size-body-lg: 1.25rem;  // 20px - Large body
$font-size-body: 1rem;        // 16px - Standard body
$font-size-body-sm: 0.875rem; // 14px - Small body
$font-size-caption: 0.75rem;  // 12px - Captions

// Special
$font-size-countdown: 5rem;   // 80px - Countdown numbers
$font-size-display: 6rem;     // 96px - Display (optional)
```

### Typography Scale - Mobile
```scss
// Headings Mobile
$font-size-h1-mobile: 2.5rem;     // 40px
$font-size-h2-mobile: 2rem;       // 32px
$font-size-h3-mobile: 1.75rem;    // 28px
$font-size-h4-mobile: 1.5rem;     // 24px
$font-size-h5-mobile: 1.25rem;    // 20px
$font-size-h6-mobile: 1.125rem;   // 18px

// Countdown Mobile
$font-size-countdown-mobile: 3.5rem;  // 56px
```

### Font Weights
```scss
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### Line Heights
```scss
$line-height-tight: 1.2;      // Headings
$line-height-normal: 1.5;     // Body text
$line-height-relaxed: 1.7;    // Long-form content
$line-height-loose: 2;        // Aéré
```

### Letter Spacing
```scss
$letter-spacing-tight: -0.02em;
$letter-spacing-normal: 0;
$letter-spacing-wide: 0.05em;
$letter-spacing-wider: 0.1em;
$letter-spacing-widest: 0.2em;  // Uppercase labels
```

---

## 📏 Spacing System (8px Grid)

```scss
$spacing: (
  0: 0,
  1: 0.25rem,    // 4px
  2: 0.5rem,     // 8px
  3: 0.75rem,    // 12px
  4: 1rem,       // 16px
  5: 1.25rem,    // 20px
  6: 1.5rem,     // 24px
  8: 2rem,       // 32px
  10: 2.5rem,    // 40px
  12: 3rem,      // 48px
  16: 4rem,      // 64px
  20: 5rem,      // 80px
  24: 6rem,      // 96px
  32: 8rem,      // 128px
);

// Padding Sections
$section-padding-desktop: 120px 64px;
$section-padding-mobile: 80px 24px;

// Gaps
$gap-xs: 8px;
$gap-sm: 16px;
$gap-md: 24px;
$gap-lg: 32px;
$gap-xl: 40px;
```

---

## 🔲 Border Radius Tokens

```scss
$radius-sm: 8px;
$radius-md: 12px;
$radius-lg: 16px;
$radius-xl: 24px;
$radius-2xl: 32px;
$radius-pill: 60px;
$radius-circle: 50%;
```

---

## 📱 Breakpoints

```scss
$breakpoint-mobile: 320px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1440px;

// Mixins
@mixin mobile {
  @media (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$breakpoint-desktop}) {
    @content;
  }
}

@mixin wide {
  @media (min-width: #{$breakpoint-wide}) {
    @content;
  }
}
```

---

## 🧩 Component Library

### 1. Button Component

```scss
// _components/_button.scss

.btn {
  font-family: $font-sans;
  font-size: $font-size-body;
  font-weight: $font-weight-semibold;
  padding: 12px 32px;
  border-radius: $radius-pill;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.btn-primary {
  background: $gold-primary;
  color: $text-on-light;
  
  &:hover {
    background: $gold-secondary;
    box-shadow: $shadow-gold;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.btn-secondary {
  background: transparent;
  color: $text-accent;
  border: 2px solid $gold-primary;
  
  &:hover {
    background: rgba(201,168,106,0.1);
    border-color: $gold-secondary;
  }
}

.btn-ghost {
  background: transparent;
  color: inherit;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }
}

// Sizes
.btn-sm {
  padding: 8px 24px;
  font-size: $font-size-body-sm;
}

.btn-lg {
  padding: 16px 48px;
  font-size: $font-size-body-lg;
}
```

---

### 2. Card Component

```scss
// _components/_card.scss

.card {
  background: $bg-white;
  border-radius: $radius-lg;
  padding: 32px;
  box-shadow: $shadow-md;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: $shadow-xl;
    transform: translateY(-4px);
  }
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: $radius-md;
  overflow: hidden;
  margin-bottom: 24px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-title {
  font-family: $font-script;
  font-size: $font-size-h5;
  color: $text-on-light;
  margin-bottom: 16px;
}

.card-body {
  font-size: $font-size-body;
  color: rgba(61,72,53,0.8);
  line-height: $line-height-relaxed;
}

// Variants
.card-translucent {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255,255,255,0.2);
}

.card-bordered {
  border: 3px solid $gold-light;
}
```

---

### 3. Section Header Component

```scss
// _components/_section-header.scss

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: $font-script;
  font-size: $font-size-h2;
  color: inherit;
  margin-bottom: 24px;
  
  // Variante avec trait doré
  &.with-underline {
    position: relative;
    padding-bottom: 24px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 3px;
      background: linear-gradient(135deg, $gold-primary, $gold-secondary);
      border-radius: 2px;
    }
  }
  
  // Variante avec box
  &.with-box {
    display: inline-block;
    padding: 20px 48px;
    border: 2px solid $border-gold;
    border-radius: $radius-pill;
    background: rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    box-shadow: 
      0 0 30px rgba(201,168,106,0.2),
      inset 0 0 20px rgba(255,255,255,0.05);
  }
}

.section-subtitle {
  font-family: $font-sans;
  font-size: $font-size-body-lg;
  font-weight: $font-weight-light;
  color: inherit;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: $line-height-relaxed;
  font-style: italic;
}
```

---

### 4. Countdown Block Component

```scss
// _components/_countdown-block.scss

.countdown-block {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: $radius-xl;
  padding: 48px 24px;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  
  // Hexagone doré
  &::before {
    content: '⬡';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    color: $gold-primary;
    text-shadow: 0 0 20px rgba(201,168,106,0.5);
  }
  
  // Ligne dorée
  &::after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      $gold-primary,
      transparent
    );
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
}

.countdown-number {
  font-family: $font-sans;
  font-size: $font-size-countdown;
  font-weight: $font-weight-bold;
  color: $text-on-dark;
  margin-bottom: 16px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  line-height: 1;
}

.countdown-label {
  font-family: $font-sans;
  font-size: $font-size-caption;
  font-weight: $font-weight-semibold;
  color: rgba(245,241,232,0.8);
  text-transform: uppercase;
  letter-spacing: $letter-spacing-widest;
}

// Mobile
@include mobile {
  .countdown-block {
    padding: 32px 16px;
  }
  
  .countdown-number {
    font-size: $font-size-countdown-mobile;
  }
}
```

---

### 5. Timeline Item Component

```scss
// _components/_timeline-item.scss

.timeline-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
  
  // Alternance Desktop
  &:nth-child(even) {
    .timeline-content {
      grid-column: 3;
      text-align: left;
    }
    
    .timeline-time {
      grid-column: 1;
      text-align: right;
    }
  }
  
  &:nth-child(odd) {
    .timeline-content {
      grid-column: 1;
      text-align: right;
    }
    
    .timeline-time {
      grid-column: 3;
      text-align: left;
    }
  }
  
  // Mobile - layout simple
  @include mobile {
    grid-template-columns: auto 1fr;
    gap: 16px;
    
    &:nth-child(even),
    &:nth-child(odd) {
      .timeline-content {
        grid-column: 2;
        text-align: left;
      }
      
      .timeline-time {
        grid-column: 2;
        text-align: left;
      }
    }
    
    .timeline-icon {
      grid-column: 1;
      grid-row: 1 / span 2;
    }
  }
}

.timeline-icon {
  grid-column: 2;
  width: 64px;
  height: 64px;
  background: $bg-white;
  border: 3px solid $gold-primary;
  border-radius: $radius-circle;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: $shadow-md;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: $shadow-gold;
  }
  
  @include mobile {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}

.timeline-time {
  font-family: $font-sans;
  font-size: $font-size-body-lg;
  font-weight: $font-weight-semibold;
  color: $gold-primary;
  letter-spacing: $letter-spacing-wide;
}

.timeline-content {
  h3 {
    font-family: $font-sans;
    font-size: $font-size-h6;
    font-weight: $font-weight-semibold;
    color: $text-on-light;
    margin-bottom: 8px;
  }
  
  p {
    font-size: $font-size-body;
    color: rgba(61,72,53,0.7);
    font-style: italic;
  }
}
```

---

### 6. Color Circle Component (Dress Code)

```scss
// _components/_color-circle.scss

.color-circle {
  width: 80px;
  height: 80px;
  border-radius: $radius-circle;
  border: 4px solid $text-on-dark;
  box-shadow: 
    0 8px 24px rgba(0,0,0,0.15),
    inset 0 2px 8px rgba(255,255,255,0.2);
  position: relative;
  transition: transform 0.3s ease;
  
  // Effet brillant
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    height: 40%;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.4),
      transparent
    );
    border-radius: $radius-circle;
  }
  
  &:hover {
    transform: translateY(-8px);
  }
  
  // Mobile
  @include mobile {
    width: 60px;
    height: 60px;
    border-width: 3px;
  }
}

.color-label {
  font-family: $font-sans;
  font-size: $font-size-body-sm;
  font-weight: $font-weight-medium;
  color: inherit;
  text-transform: capitalize;
  letter-spacing: $letter-spacing-wide;
  margin-top: 16px;
  
  @include mobile {
    font-size: $font-size-caption;
    margin-top: 12px;
  }
}
```

---

## 🎬 Animation Tokens

```scss
// Durations
$duration-fast: 0.2s;
$duration-normal: 0.3s;
$duration-slow: 0.5s;
$duration-slower: 0.8s;

// Easing Functions
$ease-default: cubic-bezier(0.4, 0, 0.2, 1);
$ease-in: cubic-bezier(0.4, 0, 1, 1);
$ease-out: cubic-bezier(0, 0, 0.2, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
$ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Framer Motion Variants
```jsx
// animations.js

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
```

---

## 🔧 Utility Classes

```scss
// _utilities.scss

// Text Alignment
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

// Font Weights
.font-light { font-weight: $font-weight-light; }
.font-regular { font-weight: $font-weight-regular; }
.font-medium { font-weight: $font-weight-medium; }
.font-semibold { font-weight: $font-weight-semibold; }
.font-bold { font-weight: $font-weight-bold; }

// Font Families
.font-script { font-family: $font-script; }
.font-sans { font-family: $font-sans; }

// Colors
.text-light { color: $text-on-dark; }
.text-dark { color: $text-on-light; }
.text-accent { color: $text-accent; }
.text-gold { color: $gold-primary; }

// Backgrounds
.bg-olive { background: $bg-olive; }
.bg-sage { background: $bg-sage; }
.bg-parchment { background: $bg-parchment; }
.bg-white { background: $bg-white; }

// Shadows
.shadow-sm { box-shadow: $shadow-sm; }
.shadow-md { box-shadow: $shadow-md; }
.shadow-lg { box-shadow: $shadow-lg; }
.shadow-xl { box-shadow: $shadow-xl; }

// Border Radius
.rounded-sm { border-radius: $radius-sm; }
.rounded-md { border-radius: $radius-md; }
.rounded-lg { border-radius: $radius-lg; }
.rounded-xl { border-radius: $radius-xl; }
.rounded-pill { border-radius: $radius-pill; }
.rounded-circle { border-radius: $radius-circle; }
```

---

## ✅ Usage Guidelines

### DO ✅
- Utiliser les tokens de couleur (jamais de hex en dur)
- Respecter le spacing system (multiples de 8px)
- Utiliser les composants réutilisables
- Appliquer les animations Framer Motion définies
- Tester sur mobile d'abord (Mobile First)
- Respecter les touch targets (min 44px)

### DON'T ❌
- Ne pas créer de nouvelles couleurs
- Ne pas utiliser de spacing custom (8/16/24/32/40/48/64/80)
- Ne pas mixer plus de 2 polices
- Ne pas créer des animations agressives
- Ne pas oublier les états hover/focus
- Ne pas ignorer prefers-reduced-motion

---

**Design System Version :** 1.0.0  
**Last Updated :** 17 Février 2026  
**Maintainer :** Wedding UX Designer Agent  
**Ready for Implementation :** ✅
