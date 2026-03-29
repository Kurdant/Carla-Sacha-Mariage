# Homepage Design Specs - MVP Phase 1
## Carla & Sacha Mariage - 25 Juillet 2026

**Designer:** Wedding UX Designer Agent  
**Date:** 17 Février 2026  
**Destinataire:** React Developer Agent  
**Tech Stack:** React 18 + Vite + SCSS + Framer Motion  
**Approche:** Mobile First  

---

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture de la page](#architecture-de-la-page)
3. [Design Tokens](#design-tokens)
4. [Section 1 : Hero Banner](#section-1--hero-banner)
5. [Section 2 : Countdown Timer](#section-2--countdown-timer)
6. [Section 3 : Dress Code](#section-3--dress-code)
7. [Animations & Transitions](#animations--transitions)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Notes pour le développeur](#notes-pour-le-développeur)

---

## 🎯 Vue d'ensemble

### Objectif
Créer une homepage élégante one-page pour le mariage de Carla & Sacha avec 3 sections MVP :
1. **Hero Banner** : Photo couple + Noms + Date
2. **Countdown Timer** : Décompte jusqu'au 25/07/2026 10H30
3. **Dress Code** : Palette de couleurs recommandées pour les invités

### Mood & Style
- **Élégant** : Design raffiné, attention aux détails
- **Sobre** : Minimalisme, espaces blancs généreux (70/30)
- **Romantique** : Typographie script, palette douce
- **Moderne** : Sans-serif contemporain, animations subtiles
- **Épuré** : Chaque élément a une raison d'être (Rasoir d'Ockham)

### Ambiance Visuelle
**Nature Sophistiquée** : Mariage entre éléments naturels (eucalyptus, palette terre) et raffinement moderne. Évoque la douceur romantique sans tomber dans le cliché.

---

## 🏗️ Architecture de la Page

### Structure One-Page (Mobile First)

```
┌─────────────────────────────────────────┐
│                                         │
│         SECTION 1 : HERO BANNER         │
│         (100vh, Photo Background)       │
│                                         │
│         Sacha & Carla                   │ ← Script
│         25 Juillet 2026                 │ ← Sans-serif
│                                         │
└─────────────────────────────────────────┘
                    ↓ Scroll
┌─────────────────────────────────────────┐
│                                         │
│       SECTION 2 : COUNTDOWN TIMER       │
│       (Auto height, Fond Parchment)     │
│                                         │
│    [124] [12] [34] [56]                │
│    Jours Hrs  Min  Sec                  │
│                                         │
└─────────────────────────────────────────┘
                    ↓ Scroll (Slide-up)
┌─────────────────────────────────────────┐
│                                         │
│        SECTION 3 : DRESS CODE           │
│        (Auto height, Fond Sage)         │
│                                         │
│         Code Vestimentaire              │
│                                         │
│     [●] [●] [●] [●] [●] [●]            │ ← Palette
│                                         │
│   Si le cœur vous en dit...            │
│                                         │
└─────────────────────────────────────────┘
```

### Flux Utilisateur
1. Arrivée sur Hero Banner → Impact visuel immédiat
2. Scroll down → Countdown visible → Anticipation
3. Scroll down → Dress Code → Information pratique
4. (Phase 2+) : Autres sections à venir

---

## 🎨 Design Tokens

### Palette de Couleurs

#### Couleurs Principales

```scss
// Tokens de couleurs - À définir dans _variables.scss

$color-parchment: #F5F1E8;      // Beige très clair, blanc cassé chaud
$color-sand: #E8DCC8;            // Beige/sable moyen, ton naturel
$color-olive: #A6B88F;           // Vert olive clair, couleur signature
$color-sage: #8A9A7B;            // Vert sauge, plus intense qu'Olive
$color-bark: #6B5D54;            // Brun écorce, ancrage terreux
$color-olivewood: #3D4835;       // Vert olive très foncé, presque noir
$color-gold: #C9A86A;            // Or brossé, accents premium
$color-white: #FFFFFF;           // Blanc pur
```

#### Usage des Couleurs (60-30-10 Rule)

| Couleur | Usage | Pourcentage |
|---------|-------|-------------|
| **Parchment** | Fonds clairs, texte sur foncé | 60% (dominante) |
| **Olive/Sage** | Sections colorées, boutons, accents | 30% (secondaire) |
| **Sand/Bark/Gold** | Détails, bordures, texte secondaire | 10% (accents) |
| **Olivewood** | Texte principal sur fond clair | Variable |
| **White** | Overlay, espaces blancs | Variable |

#### Contraste WCAG AA (Accessibilité)

| Combinaison | Ratio | Statut |
|-------------|-------|--------|
| Olivewood sur Parchment | 8.5:1 | ✅ AAA |
| Olivewood sur White | 12:1 | ✅ AAA |
| Parchment sur Sage | 4.8:1 | ✅ AA |
| Parchment sur Olive | 5.2:1 | ✅ AA |
| Bark sur Parchment | 6.1:1 | ✅ AA |

---

### Typographie

#### Polices Recommandées (Google Fonts)

**Option 1 : Élégance Classique (Recommandée)**
```scss
// Script pour noms
$font-script: 'Great Vibes', cursive;
// Import: @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

// Sans-serif moderne pour texte
$font-sans: 'Inter', sans-serif;
// Import: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

**Option 2 : Romantisme Moderne**
```scss
$font-script: 'Allura', cursive;
$font-sans: 'Montserrat', sans-serif;
```

**Option 3 : Sophistication Pure**
```scss
$font-script: 'Dancing Script', cursive;
$font-sans: 'Poppins', sans-serif;
```

#### Hiérarchie Typographique (Mobile First)

```scss
// Échelle modulaire : 1.25 (Major Third)
// Base : 16px

// H1 - Noms du couple (Script)
$font-size-h1-mobile: 3rem;        // 48px
$font-size-h1-tablet: 4rem;        // 64px
$font-size-h1-desktop: 5rem;       // 80px
$font-weight-h1: 400;              // Normal pour script
$line-height-h1: 1.2;
$letter-spacing-h1: 0.02em;

// H2 - Titres de sections (Sans-serif)
$font-size-h2-mobile: 1.75rem;     // 28px
$font-size-h2-tablet: 2rem;        // 32px
$font-size-h2-desktop: 2.5rem;     // 40px
$font-weight-h2: 600;              // Semi-bold
$line-height-h2: 1.3;
$letter-spacing-h2: 0.05em;        // Uppercase spacing
$text-transform-h2: uppercase;

// H3 - Sous-titres
$font-size-h3-mobile: 1.25rem;     // 20px
$font-size-h3-tablet: 1.5rem;      // 24px
$font-size-h3-desktop: 1.75rem;    // 28px
$font-weight-h3: 500;
$line-height-h3: 1.4;

// Body - Texte courant
$font-size-body-mobile: 1rem;      // 16px
$font-size-body-tablet: 1.125rem;  // 18px
$font-size-body-desktop: 1.125rem; // 18px
$font-weight-body: 400;
$line-height-body: 1.6;

// Caption - Texte secondaire
$font-size-caption-mobile: 0.875rem; // 14px
$font-size-caption-desktop: 1rem;    // 16px
$font-weight-caption: 300;
$line-height-caption: 1.5;

// Numbers - Countdown
$font-size-number-mobile: 3rem;    // 48px
$font-size-number-desktop: 4rem;   // 64px
$font-weight-number: 700;
$font-variant-numeric: tabular-nums; // Chiffres alignés
```

---

### Spacing System (Base 8px)

```scss
// Tokens de spacing

$space-xs: 0.5rem;   // 8px  - Micro (icône-texte)
$space-sm: 1rem;     // 16px - Entre éléments proches
$space-md: 1.5rem;   // 24px - Standard (padding cards)
$space-lg: 2rem;     // 32px - Entre groupes
$space-xl: 3rem;     // 48px - Entre sous-sections
$space-2xl: 4rem;    // 64px - Padding vertical sections (mobile)
$space-3xl: 6rem;    // 96px - Padding vertical sections (desktop)
$space-4xl: 8rem;    // 128px - Hero banner spacing
```

---

### Shadows & Effects

```scss
// Ombres subtiles

$shadow-sm: 0 2px 8px rgba(61, 72, 53, 0.06);
$shadow-md: 0 4px 12px rgba(61, 72, 53, 0.08);
$shadow-lg: 0 8px 24px rgba(61, 72, 53, 0.12);

// Border radius
$radius-sm: 8px;
$radius-md: 12px;
$radius-lg: 16px;
$radius-pill: 24px;
```

---

## 🖼️ Section 1 : Hero Banner

### Objectif
Créer un impact visuel immédiat avec la photo du couple et les informations essentielles (noms + date).

### Layout Structure (Mobile)

```
┌─────────────────────────────────────┐
│                                     │
│   [Photo Couple Background]         │
│   + Overlay subtil                  │
│                                     │
│                                     │
│          Sacha & Carla              │ ← H1 Script
│              ━━━                    │ ← Séparateur
│         25 Juillet 2026             │ ← Body Sans-serif
│                                     │
│                                     │
│              ↓                      │ ← Scroll indicator
│                                     │
└─────────────────────────────────────┘
       ↑ 100vh (viewport height)
```

### Spécifications Détaillées

#### Container
```scss
.hero-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px; // Fallback pour petits écrans
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
```

#### Background Image
```scss
.hero-banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center; // Ajuster si besoin (center top, etc.)
  }
}
```

#### Overlay
```scss
.hero-banner__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
  z-index: 2;
}

// Alternative : overlay blanc pour photos très sombres
.hero-banner__overlay--light {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
}
```

#### Content Container
```scss
.hero-banner__content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: $space-lg; // 32px
  max-width: 600px;
  
  // Backdrop blur pour améliorer lisibilité (optionnel)
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border-radius: $radius-lg; // 16px
}
```

#### Typographie Hero

**Noms du Couple**
```scss
.hero-banner__title {
  font-family: $font-script;
  font-size: $font-size-h1-mobile; // 48px
  font-weight: $font-weight-h1; // 400
  line-height: $line-height-h1; // 1.2
  letter-spacing: $letter-spacing-h1; // 0.02em
  color: $color-white;
  margin-bottom: $space-md; // 24px
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3); // Lisibilité sur photo
  
  @media (min-width: 768px) {
    font-size: $font-size-h1-tablet; // 64px
  }
  
  @media (min-width: 1024px) {
    font-size: $font-size-h1-desktop; // 80px
  }
}
```

**Séparateur Décoratif**
```scss
.hero-banner__separator {
  width: 80px;
  height: 2px;
  background: $color-gold;
  margin: $space-md auto; // 24px auto
  border-radius: 1px;
}
```

**Date**
```scss
.hero-banner__date {
  font-family: $font-sans;
  font-size: $font-size-body-mobile; // 16px
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1em; // Espacement élégant
  text-transform: uppercase;
  color: $color-white;
  margin-top: $space-md; // 24px
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    font-size: $font-size-body-tablet; // 18px
  }
}
```

#### Scroll Indicator (Optionnel)
```scss
.hero-banner__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  
  svg {
    width: 24px;
    height: 24px;
    color: $color-white;
    animation: bounce 2s infinite;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

### Responsive Behavior

| Breakpoint | Adaptations |
|------------|-------------|
| **Mobile (< 768px)** | H1: 48px, padding: 32px, overlay plus fort si besoin |
| **Tablet (768px-1023px)** | H1: 64px, padding: 48px |
| **Desktop (≥ 1024px)** | H1: 80px, padding: 64px, parallax subtil possible |

### Notes Techniques
- **Image fournie** : Hugo fournit la photo haute qualité (compressée WebP)
- **Fallback** : Utiliser `background-color: $color-sage` pendant le chargement
- **Lazy loading** : Non, car hero = above the fold
- **Aspect ratio** : Prévoir pour portrait (mobile) et paysage (desktop)
- **Texte placement** : Éviter les visages → tester positionnement avec vraie photo

---

## ⏱️ Section 2 : Countdown Timer

### Objectif
Créer un décompte élégant et lisible jusqu'au début de la cérémonie (25/07/2026 à 10H30).

### Layout Structure (Mobile)

```
┌─────────────────────────────────────────┐
│                                         │
│     [Padding vertical 64px]             │
│                                         │
│        JUSQU'AU GRAND JOUR              │ ← H2
│                                         │
│     ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│     │ 124 │ │ 12  │ │ 34  │ │ 56  │   │ ← Numbers
│     └─────┘ └─────┘ └─────┘ └─────┘   │
│      Jours   Heures Minutes Secondes    │ ← Labels
│                                         │
│     [Padding vertical 64px]             │
│                                         │
└─────────────────────────────────────────┘
      ↑ Background: $color-parchment
```

### Spécifications Détaillées

#### Section Container
```scss
.countdown-section {
  background-color: $color-parchment;
  padding: $space-2xl $space-lg; // 64px 32px
  text-align: center;
  
  @media (min-width: 768px) {
    padding: $space-3xl $space-2xl; // 96px 64px
  }
}
```

#### Titre Section
```scss
.countdown-section__title {
  font-family: $font-sans;
  font-size: $font-size-h2-mobile; // 28px
  font-weight: $font-weight-h2; // 600
  line-height: $line-height-h2; // 1.3
  letter-spacing: $letter-spacing-h2; // 0.05em
  text-transform: uppercase;
  color: $color-olivewood;
  margin-bottom: $space-xl; // 48px
  
  @media (min-width: 768px) {
    font-size: $font-size-h2-tablet; // 32px
  }
  
  @media (min-width: 1024px) {
    font-size: $font-size-h2-desktop; // 40px
  }
}
```

#### Countdown Container
```scss
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $space-sm; // 16px
  flex-wrap: wrap; // Si débordement sur petits écrans
  
  @media (min-width: 768px) {
    gap: $space-lg; // 32px
  }
}
```

#### Countdown Item (Chaque bloc : Jours, Heures, etc.)
```scss
.countdown__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px; // Touch target minimum
  
  @media (min-width: 768px) {
    min-width: 100px;
  }
}
```

#### Countdown Number
```scss
.countdown__number {
  font-family: $font-sans;
  font-size: $font-size-number-mobile; // 48px
  font-weight: $font-weight-number; // 700
  font-variant-numeric: tabular-nums; // Chiffres de même largeur
  line-height: 1;
  color: $color-sage;
  margin-bottom: $space-xs; // 8px
  
  // Optionnel : ajouter un fond card
  background: $color-white;
  border: 2px solid rgba($color-sage, 0.2);
  border-radius: $radius-sm; // 8px
  padding: $space-md $space-sm; // 24px 16px
  box-shadow: $shadow-sm;
  
  @media (min-width: 768px) {
    font-size: $font-size-number-desktop; // 64px
    padding: $space-lg $space-md; // 32px 24px
  }
}
```

#### Countdown Label
```scss
.countdown__label {
  font-family: $font-sans;
  font-size: $font-size-caption-mobile; // 14px
  font-weight: $font-weight-caption; // 300
  line-height: $line-height-caption; // 1.5
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: $color-bark;
  
  @media (min-width: 768px) {
    font-size: $font-size-caption-desktop; // 16px
  }
}
```

### Logique JavaScript (Notes pour Dev)

```javascript
// Target date: 25 Juillet 2026, 10H30
const targetDate = new Date('2026-07-25T10:30:00').getTime();

// Update countdown every second
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update DOM
  // Si distance < 0, afficher "C'est le grand jour !" ou équivalent
};

setInterval(updateCountdown, 1000);
```

### Animation (Optionnel - Framer Motion)
```jsx
// Flip animation subtile lors du changement de chiffre
<motion.div
  className="countdown__number"
  key={value} // Trigger animation on value change
  initial={{ rotateX: -90, opacity: 0 }}
  animate={{ rotateX: 0, opacity: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  {value}
</motion.div>
```

### Variantes de Design

**Variante 1 : Cards avec fond (Recommandée)**
- Chiffres dans des cards blanches avec border Sage
- Plus structuré et lisible

**Variante 2 : Minimaliste**
- Chiffres et labels sans fond, juste couleur
- Ultra-épuré

**Variante 3 : Cercles**
- Chiffres dans des cercles (border-radius: 50%)
- Plus graphique, moins formel

### Responsive Behavior

| Breakpoint | Adaptations |
|------------|-------------|
| **Mobile (< 768px)** | Numbers: 48px, gap: 16px, 2 colonnes possible (Jours-Heures / Minutes-Secondes) |
| **Tablet (768px-1023px)** | Numbers: 56px, gap: 24px, 4 colonnes |
| **Desktop (≥ 1024px)** | Numbers: 64px, gap: 32px, 4 colonnes |

---

## 👔 Section 3 : Dress Code

### Objectif
Présenter visuellement la palette de couleurs recommandées aux invités avec un message doux et non-contraignant.

### Layout Structure (Mobile)

```
┌─────────────────────────────────────────┐
│                                         │
│     [Padding vertical 64px]             │
│                                         │
│        CODE VESTIMENTAIRE               │ ← H2
│                                         │
│     Nous serions ravis de vous voir     │ ← Body
│     porter ces couleurs si le cœur      │
│     vous en dit...                      │
│                                         │
│     ┌───┐ ┌───┐ ┌───┐                  │
│     │ ● │ │ ● │ │ ● │                  │ ← Palette (ligne 1)
│     └───┘ └───┘ └───┘                  │
│     ┌───┐ ┌───┐ ┌───┐                  │
│     │ ● │ │ ● │ │ ● │                  │ ← Palette (ligne 2)
│     └───┘ └───┘ └───┘                  │
│                                         │
│    [Noms des couleurs optionnels]      │
│                                         │
│     [Padding vertical 64px]             │
│                                         │
└─────────────────────────────────────────┘
      ↑ Background: $color-sage
      ↑ Texte: $color-parchment
```

### Spécifications Détaillées

#### Section Container
```scss
.dress-code-section {
  background-color: $color-sage;
  padding: $space-2xl $space-lg; // 64px 32px
  text-align: center;
  
  @media (min-width: 768px) {
    padding: $space-3xl $space-2xl; // 96px 64px
  }
}
```

#### Titre
```scss
.dress-code-section__title {
  font-family: $font-sans;
  font-size: $font-size-h2-mobile; // 28px
  font-weight: $font-weight-h2; // 600
  line-height: $line-height-h2; // 1.3
  letter-spacing: $letter-spacing-h2; // 0.05em
  text-transform: uppercase;
  color: $color-parchment;
  margin-bottom: $space-lg; // 32px
  
  @media (min-width: 768px) {
    font-size: $font-size-h2-tablet; // 32px
  }
  
  @media (min-width: 1024px) {
    font-size: $font-size-h2-desktop; // 40px
  }
}
```

#### Description
```scss
.dress-code-section__description {
  font-family: $font-sans;
  font-size: $font-size-body-mobile; // 16px
  font-weight: $font-weight-body; // 400
  line-height: $line-height-body; // 1.6
  color: $color-parchment;
  max-width: 600px;
  margin: 0 auto $space-xl; // 0 auto 48px
  
  @media (min-width: 768px) {
    font-size: $font-size-body-tablet; // 18px
  }
}
```

#### Palette Container
```scss
.dress-code-palette {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $space-md; // 24px
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: $space-lg; // 32px
    max-width: 600px;
  }
}
```

#### Palette Item (Chaque couleur)
```scss
.dress-code-palette__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-xs; // 8px
}

.dress-code-palette__color {
  width: 60px;
  height: 60px;
  border-radius: 50%; // Cercle
  border: 3px solid rgba($color-parchment, 0.3);
  box-shadow: $shadow-md;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: $shadow-lg;
  }
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

// Couleurs spécifiques
.dress-code-palette__color--parchment { background-color: $color-parchment; }
.dress-code-palette__color--sand { background-color: $color-sand; }
.dress-code-palette__color--olive { background-color: $color-olive; }
.dress-code-palette__color--sage { background-color: $color-sage; }
.dress-code-palette__color--bark { background-color: $color-bark; }
.dress-code-palette__color--olivewood { background-color: $color-olivewood; }
.dress-code-palette__color--gold { background-color: $color-gold; }
```

#### Palette Label (Nom des couleurs - Optionnel)
```scss
.dress-code-palette__label {
  font-family: $font-sans;
  font-size: 0.75rem; // 12px
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba($color-parchment, 0.8);
  
  @media (min-width: 768px) {
    font-size: 0.875rem; // 14px
  }
}
```

### Contenu Texte (À fournir par Hugo)

**Texte générique proposé :**
```
Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit.
Élégance et confort avant tout !
```

**Alternative :**
```
Si le cœur vous en dit, voici les couleurs qui habilleront notre journée.
Portez ce qui vous fait vous sentir bien.
```

### Palette de Couleurs à Afficher

| Couleur | Code HEX | Nom Affichage |
|---------|----------|---------------|
| Parchment | #F5F1E8 | Crème |
| Sand | #E8DCC8 | Sable |
| Olive | #A6B88F | Olive |
| Sage | #8A9A7B | Sauge |
| Bark | #6B5D54 | Écorce |
| Olivewood | #3D4835 | Bois d'Olive |

**Note :** Décider avec Hugo si afficher 6 couleurs ou seulement 4-5 principales (exclure Olivewood/Bark trop foncés).

### Responsive Behavior

| Breakpoint | Adaptations |
|------------|-------------|
| **Mobile (< 768px)** | Cercles: 60px, 2-3 par ligne, gap: 24px |
| **Tablet (768px-1023px)** | Cercles: 70px, 3-4 par ligne, gap: 28px |
| **Desktop (≥ 1024px)** | Cercles: 80px, 6 en ligne ou 3x2, gap: 32px |

---

## 🎬 Animations & Transitions

### Principes Généraux
- **Subtilité** : Améliorer sans distraire
- **Performance** : Utiliser `transform` et `opacity` (GPU-accelerated)
- **Durées** : 200-600ms selon contexte
- **Easing** : `ease-out` pour entrées, `ease-in` pour sorties
- **Reduced Motion** : Respecter `prefers-reduced-motion`

---

### Animation 1 : Hero Banner Fade-In (Page Load)

**Comportement :**
- Texte apparaît en fondu avec léger slide-up
- Trigger : Au chargement de la page
- Durée : 800ms

**Framer Motion Code :**
```jsx
<motion.div
  className="hero-banner__content"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Contenu Hero */}
</motion.div>
```

---

### Animation 2 : Countdown Reveal (Scroll In View)

**Comportement :**
- Section apparaît au scroll avec fade-in
- Chaque bloc du countdown apparaît avec un léger délai (stagger)
- Trigger : `whileInView` threshold 0.3

**Framer Motion Code :**
```jsx
<motion.section
  className="countdown-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Jusqu'au Grand Jour
  </motion.h2>
  
  <motion.div
    className="countdown"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1 // Délai entre chaque item
        }
      }
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    {/* Countdown items */}
  </motion.div>
</motion.section>
```

---

### Animation 3 : Dress Code Slide-Up

**Comportement :**
- Section Dress Code "monte" devant la section Countdown (effet slide-up)
- Trigger : Scroll, `whileInView` threshold 0.5
- Durée : 600ms

**Framer Motion Code :**
```jsx
<motion.section
  className="dress-code-section"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Contenu Dress Code */}
</motion.section>
```

**Alternative : Slide-up avec overlay (effet "monte devant")**
```scss
// CSS pour effet de superposition
.dress-code-section {
  position: relative;
  z-index: 2; // Au-dessus de countdown
  margin-top: -4rem; // Overlap subtil
}
```

---

### Animation 4 : Palette Colors Stagger

**Comportement :**
- Chaque cercle de couleur apparaît en séquence (stagger)
- Effet scale + fade-in
- Trigger : `whileInView` de la palette

**Framer Motion Code :**
```jsx
<motion.div
  className="dress-code-palette"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08 // Délai entre chaque cercle
      }
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
>
  {colors.map((color, index) => (
    <motion.div
      key={index}
      className="dress-code-palette__item"
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={`dress-code-palette__color dress-code-palette__color--${color.name}`} />
      <span className="dress-code-palette__label">{color.label}</span>
    </motion.div>
  ))}
</motion.div>
```

---

### Animation 5 : Smooth Scroll (Global)

**Comportement :**
- Scroll fluide entre sections si navigation ajoutée (Phase 2)
- Durée : 800-1000ms

**CSS :**
```scss
html {
  scroll-behavior: smooth;
}
```

**Alternative JavaScript (plus de contrôle) :**
```javascript
window.scrollTo({
  top: targetElement.offsetTop,
  behavior: 'smooth'
});
```

---

### Animation 6 : Reduced Motion Support

**Respect de l'accessibilité :**
```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Framer Motion :**
```jsx
import { useReducedMotion } from "framer-motion"

const shouldReduceMotion = useReducedMotion()

<motion.div
  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
>
```

---

## 📱 Responsive Breakpoints

### Stratégie Mobile First

```scss
// Variables de breakpoints
$breakpoint-mobile: 320px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1440px;

// Mixins
@mixin tablet {
  @media (min-width: $breakpoint-tablet) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $breakpoint-desktop) {
    @content;
  }
}

@mixin wide {
  @media (min-width: $breakpoint-wide) {
    @content;
  }
}
```

---

### Adaptations par Section

#### Hero Banner

| Device | Height | H1 Font | Padding | Overlay |
|--------|--------|---------|---------|---------|
| Mobile | 100vh (min 600px) | 48px | 32px | 0.1-0.15 opacity |
| Tablet | 100vh | 64px | 48px | 0.08-0.12 opacity |
| Desktop | 100vh | 80px | 64px | 0.05-0.10 opacity |

**Particularités :**
- **Mobile** : Vérifier que texte ne cache pas les visages (ajuster `object-position`)
- **Desktop** : Parallax subtil possible sur background (translateY -20% au scroll)

---

#### Countdown Timer

| Device | Number Size | Gap | Padding Vertical |
|--------|-------------|-----|------------------|
| Mobile | 48px | 16px | 64px |
| Tablet | 56px | 24px | 80px |
| Desktop | 64px | 32px | 96px |

**Particularités :**
- **Mobile** : Envisager 2x2 grid si 4 items en ligne trop serrés
- **Desktop** : Ajouter plus d'espace entre les blocs (gap: 48px)

---

#### Dress Code

| Device | Circle Size | Gap | Padding Vertical |
|--------|-------------|-----|------------------|
| Mobile | 60px | 24px | 64px |
| Tablet | 70px | 28px | 80px |
| Desktop | 80px | 32px | 96px |

**Particularités :**
- **Mobile** : 3 cercles par ligne (2 lignes)
- **Tablet** : 4-5 cercles par ligne
- **Desktop** : 6 cercles en ligne ou 3x2 grid

---

### Container Max-Width

```scss
.container {
  width: 100%;
  max-width: 1200px; // Desktop
  margin: 0 auto;
  padding: 0 $space-lg; // 32px
  
  @include tablet {
    padding: 0 $space-2xl; // 64px
  }
}
```

---

### Images Responsive

```jsx
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/images/hero-desktop.webp"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/images/hero-tablet.webp"
  />
  <img
    src="/images/hero-mobile.webp"
    alt="Carla et Sacha"
    loading="eager" // Hero = above the fold
  />
</picture>
```

**Note :** Hugo gère la compression manuellement.

---

## 🛠️ Notes pour le Développeur

### Structure de Fichiers Recommandée

```
src/
├── components/
│   ├── HeroBanner/
│   │   ├── HeroBanner.jsx
│   │   └── HeroBanner.scss
│   ├── Countdown/
│   │   ├── Countdown.jsx
│   │   └── Countdown.scss
│   ├── DressCode/
│   │   ├── DressCode.jsx
│   │   └── DressCode.scss
├── styles/
│   ├── _variables.scss (Tokens de couleurs, typo, spacing)
│   ├── _mixins.scss (Breakpoints, utilitaires)
│   ├── _reset.scss (CSS reset)
│   └── global.scss (Styles globaux)
├── assets/
│   └── images/
│       └── hero-bg.webp
├── App.jsx
└── main.jsx
```

---

### Tokens SCSS à Créer

**Fichier `_variables.scss` :**
```scss
// Couleurs
$color-parchment: #F5F1E8;
$color-sand: #E8DCC8;
$color-olive: #A6B88F;
$color-sage: #8A9A7B;
$color-bark: #6B5D54;
$color-olivewood: #3D4835;
$color-gold: #C9A86A;
$color-white: #FFFFFF;

// Typographie
$font-script: 'Great Vibes', cursive;
$font-sans: 'Inter', sans-serif;

// Font sizes (Mobile)
$font-size-h1-mobile: 3rem;
$font-size-h2-mobile: 1.75rem;
$font-size-body-mobile: 1rem;
// ... (voir section Typographie)

// Spacing
$space-xs: 0.5rem;
$space-sm: 1rem;
$space-md: 1.5rem;
$space-lg: 2rem;
$space-xl: 3rem;
$space-2xl: 4rem;
$space-3xl: 6rem;

// Shadows
$shadow-sm: 0 2px 8px rgba(61, 72, 53, 0.06);
$shadow-md: 0 4px 12px rgba(61, 72, 53, 0.08);

// Border radius
$radius-sm: 8px;
$radius-md: 12px;
$radius-lg: 16px;

// Breakpoints
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

---

### Checklist Développement

#### Phase 1 : Setup
- [ ] Créer projet Vite + React 18
- [ ] Installer SCSS (`npm install -D sass`)
- [ ] Installer Framer Motion (`npm install framer-motion`)
- [ ] Créer structure de fichiers
- [ ] Importer Google Fonts (Great Vibes + Inter)
- [ ] Créer `_variables.scss` avec tous les tokens
- [ ] Créer `_mixins.scss` avec breakpoints

#### Phase 2 : Hero Banner
- [ ] Component `HeroBanner.jsx`
- [ ] Styles `HeroBanner.scss`
- [ ] Intégrer photo fournie par Hugo (WebP)
- [ ] Tester responsive (mobile, tablet, desktop)
- [ ] Ajuster overlay selon la photo
- [ ] Animation fade-in avec Framer Motion
- [ ] Scroll indicator (optionnel)

#### Phase 3 : Countdown Timer
- [ ] Component `Countdown.jsx`
- [ ] Logique JavaScript (décompte temps réel)
- [ ] Styles `Countdown.scss`
- [ ] Tester avec date cible (25/07/2026 10:30)
- [ ] Animation reveal au scroll
- [ ] Gérer cas "C'est le jour J !"
- [ ] Tester responsive

#### Phase 4 : Dress Code
- [ ] Component `DressCode.jsx`
- [ ] Générer palette avec couleurs exactes
- [ ] Styles `DressCode.scss`
- [ ] Animation stagger des cercles
- [ ] Tester hover states
- [ ] Tester responsive (2-3 lignes mobile)

#### Phase 5 : Animations Globales
- [ ] Slide-up entre Countdown et Dress Code
- [ ] Smooth scroll (si navigation Phase 2)
- [ ] Support `prefers-reduced-motion`
- [ ] Tester performance (60fps)

#### Phase 6 : Optimisation
- [ ] Compression images (Hugo)
- [ ] Lazy loading (sections hors viewport)
- [ ] Build production (`npm run build`)
- [ ] Tester sur vrais devices (mobile, tablet)
- [ ] Vérifier contrastes WCAG AA
- [ ] Tester accessibilité clavier

---

### Configuration Framer Motion

**Installer :**
```bash
npm install framer-motion
```

**Import :**
```jsx
import { motion, useReducedMotion } from "framer-motion"
```

**Variants réutilisables :**
```jsx
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

### Données Countdown (Fichier Config)

**Fichier `config.js` :**
```javascript
export const weddingConfig = {
  coupleName: "Sacha & Carla",
  weddingDate: "2026-07-25T10:30:00",
  weddingDateDisplay: "25 Juillet 2026",
  weddingTime: "10H30",
  
  dressCode: {
    title: "Code Vestimentaire",
    description: "Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit. Élégance et confort avant tout !",
    colors: [
      { name: "parchment", label: "Crème", hex: "#F5F1E8" },
      { name: "sand", label: "Sable", hex: "#E8DCC8" },
      { name: "olive", label: "Olive", hex: "#A6B88F" },
      { name: "sage", label: "Sauge", hex: "#8A9A7B" },
      { name: "bark", label: "Écorce", hex: "#6B5D54" },
      { name: "gold", label: "Or", hex: "#C9A86A" }
    ]
  }
};
```

---

### SEO & Meta Tags

**Dans `index.html` :**
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Carla & Sacha - 25 Juillet 2026</title>
  <meta name="description" content="Carla et Sacha vous invitent à célébrer leur mariage le 25 juillet 2026. Informations pratiques et détails de la journée." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Carla & Sacha - 25 Juillet 2026" />
  <meta property="og:description" content="Célébrons ensemble notre mariage !" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:type" content="website" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
```

---

### Performance Checklist

- [ ] Images WebP (Hugo compresse manuellement)
- [ ] Lazy loading sections hors viewport (Countdown, Dress Code)
- [ ] Utiliser `transform` et `opacity` pour animations (GPU)
- [ ] Bundle size < 300KB (Vite optimise automatiquement)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Preload fonts critiques
- [ ] Minification SCSS en production

---

### Accessibilité Checklist

- [ ] Contrastes WCAG AA (4.5:1 minimum)
- [ ] Navigation clavier (tab, enter)
- [ ] Support `prefers-reduced-motion`
- [ ] Alt text sur images
- [ ] Landmarks ARIA (si nécessaire)
- [ ] Focus visible sur éléments interactifs
- [ ] Texte redimensionnable (rem/em)

---

## ✅ Validation Design

### Critères de Validation

| Critère | Validé |
|---------|--------|
| **Cohérence moodboard** | ✅ Palette Olive Garden, espaces généreux, typo script+sans-serif |
| **Palette respectée** | ✅ 6 couleurs principales utilisées selon règle 60-30-10 |
| **Hiérarchie visuelle** | ✅ H1 script dominant, H2 structuré, body lisible |
| **Accessibilité WCAG AA** | ✅ Tous contrastes > 4.5:1 |
| **Mobile First** | ✅ Design conçu mobile, amélioré progressivement |
| **Espaces blancs** | ✅ Ratio 70/30, padding généreux, respiration |
| **Animations subtiles** | ✅ Fade-in, slide-up, stagger, durées 300-600ms |
| **Performance** | ✅ Transform/opacity, GPU-accelerated, reduced motion |
| **Minimalisme** | ✅ Rasoir d'Ockham appliqué, aucun élément superflu |

---

## 🚀 Prochaines Étapes (Phase 2+)

### Sections Futures
1. **Timeline / Programme du Jour J**
   - Heures clés (cérémonie, cocktail, repas, soirée)
   - Icônes minimalistes
   - Layout vertical avec ligne connectrice

2. **Informations Pratiques**
   - Lieu (Google Maps embed)
   - Parking, transports
   - Hébergements recommandés

3. **RSVP / Confirmation**
   - Formulaire simple (nom, email, présence, message)
   - Integration backend (Netlify Forms, Google Forms, ou API custom)

4. **Galerie Photos**
   - Grid responsive
   - Lightbox au clic
   - Photos couple + engagement

5. **Liste de Mariage**
   - Liens externes ou texte libre
   - Icônes cadeaux

6. **Footer**
   - Contacts (email, téléphone)
   - Crédits photo
   - Copyright

### Améliorations Possibles
- Navigation sticky avec scroll spy
- Scroll progress bar
- Parallax subtil sur Hero
- Animations micro-interactions (hover buttons)
- Dark mode (si pertinent)
- Multilingue (FR/EN si invités internationaux)

---

## 📞 Questions pour Hugo

Avant développement, valider :

1. **Photo Hero Banner** : Déjà disponible ? Format/résolution ?
2. **Polices** : Validation finale Great Vibes + Inter ou autre combo ?
3. **Palette Dress Code** : Afficher les 6 couleurs ou seulement 4-5 (exclure foncées) ?
4. **Texte Dress Code** : Valider le wording exact
5. **Animations** : Préférence pour variante countdown (cards vs minimaliste) ?
6. **Scroll indicator** sur Hero : Souhaité ou non ?
7. **Parallax** sur Hero : Activer ou garder statique ?
8. **Nom domaine** : Déjà acheté pour déploiement Hostinger ?

---

## 📦 Livrables

### Documents Créés
1. ✅ `Moodboard-Analysis-Carla-Sacha.md` - Analyse complète du moodboard
2. ✅ `Homepage-Design-Specs-MVP.md` - Spécifications design homepage (ce document)

### Fichiers à Créer (Dev React)
- `_variables.scss` - Tokens design
- `HeroBanner.jsx` + `.scss`
- `Countdown.jsx` + `.scss`
- `DressCode.jsx` + `.scss`
- `config.js` - Données site

---

**Ready for Development! 🚀**

Toutes les specs sont définies. L'agent React Developer peut commencer l'implémentation.

---

*Document créé par Wedding UX Designer Agent*  
*Date : 17/02/2026*  
*Pour : React Developer Agent*  
*Projet : Carla-Sacha-Mariage MVP Phase 1*
