# REDESIGN COMPLET SITE - Carla-Sacha-Mariage
## Design Premium Inspiré imagesite1 & imagesite2

**Date :** 17 Février 2026  
**Designer :** Wedding UX Designer Agent  
**Inspiration :** imagesite1.jpeg + imagesite2.jpeg  
**Style :** Premium, Élégant, Formes Géométriques, Couleurs Variées

---

## 🎨 Vision Globale du Redesign

### Objectif
Transformer le site actuel "basique et moche" en **expérience visuelle premium** avec :
- ✨ Formes géométriques élégantes (cercles, rectangles arrondis, lignes)
- 🎨 Couleurs variées (alternance Olive/Sage/Crème/Blanc)
- 💎 Design artistique et sophistiqué
- 📐 Layouts inspirés des inspirations

### Architecture Complète du Site

```
┌─────────────────────────────────────────┐
│  SECTION 0 : HERO BANNER (OK - GARDÉ)  │
│  Photo couple + Noms + Date             │
└─────────────────────────────────────────┘
              ↓ Scroll
┌─────────────────────────────────────────┐
│  SECTION 1 : COUNTDOWN PREMIUM          │ ← Fond OLIVE
│  Numbers géants + Ornements dorés       │
│  Formes géométriques                    │
└─────────────────────────────────────────┘
              ↓ Scroll
┌─────────────────────────────────────────┐
│  SECTION 2 : TIMELINE DU JOUR J         │ ← Fond CRÈME
│  Ligne verticale + Icônes + Horaires    │
│  Style imagesite2                        │
└─────────────────────────────────────────┘
              ↓ Scroll
┌─────────────────────────────────────────┐
│  SECTION 3 : DRESS CODE PREMIUM         │ ← Fond SAGE
│  Palette cercles + Texte élégant        │
│  Formes géométriques                     │
└─────────────────────────────────────────┘
              ↓ Scroll
┌─────────────────────────────────────────┐
│  SECTION 4 : PHOTOS COUPLE              │ ← Fond BLANC
│  2-3 photos N&B + Citation               │
│  Layout imagesite1/imagesite2            │
└─────────────────────────────────────────┘
              ↓ Scroll (Optionnel)
┌─────────────────────────────────────────┐
│  SECTION 5 : MESSAGE PERSONNEL          │ ← Fond PARCHMENT
│  Texte romantique + Ornements            │
└─────────────────────────────────────────┘
```

---

## 🎨 Nouvelle Palette Étendue

```scss
// Backgrounds alternés pour dynamisme
$bg-olive: #8A9A7B;           // Sage foncé (sections impactantes)
$bg-sage: #A6B88F;            // Olive clair (sections douces)
$bg-parchment: #F5F1E8;       // Crème (sections neutres)
$bg-white: #FFFFFF;           // Blanc pur (sections aérées)
$bg-sand: #E8DCC8;            // Beige sable (variante)

// Texte adaptatif
$text-on-dark: #FFFFFF;       // Texte blanc sur olive/sage
$text-on-light: #3D4835;      // Texte olivewood sur clair
$text-accent: #C9A86A;        // Or pour accents

// Ornements & formes
$gold-primary: #C9A86A;       // Or principal
$gold-light: rgba(201,168,106,0.3);  // Or subtil
$gold-gradient: linear-gradient(135deg, #C9A86A, #D4BC8E);

// Formes géométriques
$shape-border: 2px solid rgba(255,255,255,0.3);
$shape-radius: 24px;          // Border-radius premium
```

---

## 📐 SECTION 1 : Countdown Premium (Amélioré)

### Layout Desktop

```
┌────────────────────────────────────────────────────┐
│         [Fond OLIVE FONCÉ avec pattern]            │
│                                                    │
│  ╔════════════════════════════════════════════╗   │
│  ║         Ornement doré subtil               ║   │
│  ╚════════════════════════════════════════════╝   │
│                                                    │
│         ┌────────────────────────┐                 │
│         │  Jusqu'au Grand Jour   │ ← Script blanc │
│         │    (box fine dorée)    │                 │
│         └────────────────────────┘                 │
│                                                    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐ │
│  │   ⬡    │  │   ⬡    │  │   ⬡    │  │   ⬡    │ │ ← Hexagones dorés
│  │        │  │        │  │        │  │        │ │
│  │  152   │  │   12   │  │   45   │  │   30   │ │ ← Blanc
│  │        │  │        │  │        │  │        │ │
│  │ JOURS  │  │ HEURES │  │  MIN   │  │  SEC   │ │ ← Crème
│  └────────┘  └────────┘  └────────┘  └────────┘ │
│                                                    │
│  ╔════════════════════════════════════════════╗   │
│  ║         Trait doré lumineux                ║   │
│  ╚════════════════════════════════════════════╝   │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Specs Détaillées

```scss
.countdown-section-premium {
  min-height: 100vh;
  background: $bg-olive;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(166,184,143,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(201,168,106,0.05) 0%, transparent 50%);
  position: relative;
  padding: 120px 64px;
  
  // Pattern géométrique subtil
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23C9A86A' fill-opacity='0.02'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
}

.countdown-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: $text-on-dark;
  text-align: center;
  margin-bottom: 80px;
  
  // Box fine autour
  display: inline-block;
  padding: 20px 48px;
  border: 2px solid rgba(201,168,106,0.4);
  border-radius: 60px;
  background: rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  
  // Ombre dorée subtile
  box-shadow: 
    0 0 30px rgba(201,168,106,0.2),
    inset 0 0 20px rgba(255,255,255,0.05);
}

.countdown-block {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 24px;
  padding: 48px 24px;
  text-align: center;
  position: relative;
  
  // Hexagone doré en haut
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
  
  // Ligne dorée en bas
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
}

.countdown-number {
  font-family: 'Inter', sans-serif;
  font-size: 5rem;          // 80px - MASSIVE
  font-weight: 700;
  color: $text-on-dark;
  margin-bottom: 16px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.countdown-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(245,241,232,0.8);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
```

---

## 📐 SECTION 2 : Timeline du Jour J (NOUVEAU)

### Vision
Timeline verticale élégante comme dans imagesite2.jpeg avec icônes, horaires et descriptions.

### Layout Desktop

```
┌────────────────────────────────────────────────────┐
│         [Fond CRÈME avec ornements légers]         │
│                                                    │
│              ┌──────────────────┐                  │
│              │  Le Programme    │ ← Script olivewood│
│              └──────────────────┘                  │
│                                                    │
│                      │                             │
│                      │  4:50 PM                    │
│                   ⛪ │  Cérémonie Religieuse      │
│                      │  Église San Francisco       │
│                      │                             │
│                      │  5:30 PM                    │
│                   🥂 │  Cocktail de Bienvenue     │
│                      │  Jardin de la Sierra        │
│                      │                             │
│                      │  7:00 PM                    │
│                   🍽️ │  Dîner                     │
│                      │  Salon Vendimia             │
│                      │                             │
│                      │  9:00 PM                    │
│                   💃 │  Soirée Dansante           │
│                      │  Piste de Danse             │
│                      │                             │
└────────────────────────────────────────────────────┘
```

### Specs Détaillées

```scss
.timeline-section {
  min-height: 100vh;
  background: $bg-parchment;
  padding: 120px 64px;
  position: relative;
  
  // Ornements coins
  &::before {
    content: '';
    position: absolute;
    top: 60px;
    left: 60px;
    width: 80px;
    height: 80px;
    border-top: 3px solid $gold-light;
    border-left: 3px solid $gold-light;
    border-radius: 8px 0 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 60px;
    right: 60px;
    width: 80px;
    height: 80px;
    border-bottom: 3px solid $gold-light;
    border-right: 3px solid $gold-light;
    border-radius: 0 0 8px 0;
  }
}

.timeline-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: $text-on-light;
  text-align: center;
  margin-bottom: 80px;
  
  // Trait doré dessous
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
    background: $gold-gradient;
    border-radius: 2px;
  }
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  // Ligne verticale centrale
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      $gold-primary 10%,
      $gold-primary 90%,
      transparent
    );
  }
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
  
  // Alternance gauche/droite
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
}

.timeline-icon {
  grid-column: 2;
  width: 64px;
  height: 64px;
  background: $bg-white;
  border: 3px solid $gold-primary;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  z-index: 2;
  
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 24px rgba(201,168,106,0.3);
  }
}

.timeline-time {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: $gold-primary;
  letter-spacing: 0.05em;
}

.timeline-content {
  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: $text-on-light;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 1rem;
    color: rgba(61,72,53,0.7);
    font-style: italic;
  }
}
```

### Données Timeline

```jsx
const timelineEvents = [
  {
    time: '10:30',
    icon: '⛪',
    title: 'Cérémonie',
    location: 'Église Notre-Dame'
  },
  {
    time: '12:00',
    icon: '🥂',
    title: 'Cocktail',
    location: 'Jardin du Château'
  },
  {
    time: '14:00',
    icon: '🍽️',
    title: 'Déjeuner',
    location: 'Grande Salle'
  },
  {
    time: '18:00',
    icon: '💃',
    title: 'Soirée Dansante',
    location: 'Piste de Danse'
  },
  {
    time: '23:00',
    icon: '🎆',
    title: 'Feu d\'Artifice',
    location: 'Terrasse'
  }
];
```

---

## 📐 SECTION 3 : Dress Code Premium (Redesign Complet)

### Vision
Cercles palette + formes géométriques + texte élégant sur fond SAGE.

### Layout Desktop

```
┌────────────────────────────────────────────────────┐
│         [Fond SAGE avec motifs géométriques]       │
│                                                    │
│          ◇────────────────────────────◇           │
│                                                    │
│              ┌──────────────────┐                  │
│              │  Dress Code      │ ← Blanc script  │
│              └──────────────────┘                  │
│                                                    │
│  "Nous serions ravis de vous voir porter          │
│   ces couleurs si le cœur vous en dit..."         │
│                                                    │
│         ○    ○    ○    ○    ○    ○                │
│     Parchment Sand Olive Sage Bark Gold           │
│                                                    │
│          ┌──────────────────────────┐              │
│          │ Élégance et confort      │              │
│          │ avant tout !             │              │
│          └──────────────────────────┘              │
│                                                    │
│          ◇────────────────────────────◇           │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Specs Détaillées

```scss
.dress-code-section-premium {
  min-height: 100vh;
  background: $bg-sage;
  background-image:
    linear-gradient(30deg, transparent 45%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.03) 55%, transparent 55%),
    linear-gradient(-30deg, transparent 45%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.03) 55%, transparent 55%);
  background-size: 100px 100px;
  padding: 120px 64px;
  position: relative;
  
  // Losanges décoratifs coins
  &::before,
  &::after {
    content: '◇';
    position: absolute;
    font-size: 60px;
    color: rgba(255,255,255,0.2);
  }
  
  &::before {
    top: 80px;
    left: 80px;
  }
  
  &::after {
    bottom: 80px;
    right: 80px;
  }
}

.dress-code-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: $text-on-dark;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.dress-code-intro {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: $text-on-dark;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.8;
  font-style: italic;
}

.color-palette-premium {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
}

.color-circle-premium {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid $text-on-dark;
  box-shadow: 
    0 8px 24px rgba(0,0,0,0.15),
    inset 0 2px 8px rgba(255,255,255,0.2);
  position: relative;
  
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
    border-radius: 50%;
  }
}

.color-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $text-on-dark;
  text-transform: capitalize;
  letter-spacing: 0.05em;
}

.dress-code-footer {
  text-align: center;
  padding: 32px 48px;
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 60px;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: $text-on-dark;
  line-height: 1.6;
}
```

---

## 📐 SECTION 4 : Photos Couple (NOUVEAU)

### Vision
Galerie photos N&B du couple avec citation romantique, fond blanc épuré.

### Layout Desktop

```
┌────────────────────────────────────────────────────┐
│              [Fond BLANC épuré]                    │
│                                                    │
│    ┌──────────────┐          ┌──────────────┐     │
│    │              │          │              │     │
│    │   Photo 1    │          │   Photo 2    │     │
│    │     N&B      │          │     N&B      │     │
│    │              │          │              │     │
│    └──────────────┘          └──────────────┘     │
│                                                    │
│              ┌────────────────────┐                │
│              │  "Notre Histoire"  │ ← Script      │
│              │                    │                │
│              │  Citation          │                │
│              │  romantique...     │                │
│              └────────────────────┘                │
│                                                    │
│                  ┌──────────────┐                  │
│                  │   Photo 3    │                  │
│                  │     N&B      │                  │
│                  └──────────────┘                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Specs Détaillées

```scss
.photos-section {
  min-height: 100vh;
  background: $bg-white;
  padding: 120px 64px;
  position: relative;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 80px;
}

.photo-item {
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
  border-radius: 16px;
  border: 4px solid $bg-parchment;
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 56px rgba(0,0,0,0.15);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.1);
  }
}

.photos-quote {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 40px;
  background: $bg-parchment;
  border-radius: 24px;
  position: relative;
  
  // Guillemets dorés
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 40px;
    font-size: 120px;
    font-family: $font-script;
    color: $gold-light;
    line-height: 1;
  }
  
  h3 {
    font-family: 'Great Vibes', cursive;
    font-size: 2.5rem;
    color: $text-on-light;
    margin-bottom: 24px;
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    color: rgba(61,72,53,0.8);
    line-height: 1.8;
    font-style: italic;
  }
}

.photo-featured {
  grid-column: 1 / -1;
  max-width: 600px;
  margin: 80px auto 0;
  aspect-ratio: 16/9;
}
```

---

## 📐 SECTION 5 : Message Personnel (Optionnel)

### Vision
Section finale avec message du couple, fond parchment, ornements délicats.

### Layout

```
┌────────────────────────────────────────────────────┐
│         [Fond PARCHMENT avec ornements]            │
│                                                    │
│              ┌──────────────────┐                  │
│              │ Sacha & Carla    │ ← Script        │
│              └──────────────────┘                  │
│                                                    │
│         ╔═══════════════════════════╗             │
│         ║                           ║             │
│         ║  Message personnel du     ║             │
│         ║  couple aux invités...    ║             │
│         ║                           ║             │
│         ╚═══════════════════════════╝             │
│                                                    │
│              ┌──────────────────┐                  │
│              │  Avec Amour ♥    │                  │
│              └──────────────────┘                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Specs

```scss
.message-section {
  min-height: 80vh;
  background: $bg-parchment;
  padding: 120px 64px;
  text-align: center;
  position: relative;
  
  // Ornements floraux coins (SVG ou emoji)
  &::before,
  &::after {
    content: '✿';
    position: absolute;
    font-size: 80px;
    color: $gold-light;
    opacity: 0.3;
  }
  
  &::before {
    top: 60px;
    left: 60px;
    transform: rotate(-15deg);
  }
  
  &::after {
    bottom: 60px;
    right: 60px;
    transform: rotate(15deg);
  }
}

.message-title {
  font-family: 'Great Vibes', cursive;
  font-size: 4rem;
  color: $text-on-light;
  margin-bottom: 60px;
}

.message-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px;
  background: $bg-white;
  border: 3px solid $gold-light;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 300;
    color: $text-on-light;
    line-height: 1.9;
    margin-bottom: 24px;
  }
}

.message-signature {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: $gold-primary;
  margin-top: 40px;
}
```

---

## 🎬 Animations Globales

### Principe
Chaque section a son animation d'entrée unique selon son background.

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

// Éléments individuels : stagger
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}
```

---

## 📱 Responsive Strategy

### Mobile (< 768px)

**Countdown :**
- Grid 2x2
- Numbers 56px
- Padding réduit

**Timeline :**
- Layout vertical simple (pas d'alternance)
- Icônes à gauche
- Contenu à droite

**Photos :**
- Grid 1 colonne
- Photos en mode portrait

**Dress Code :**
- Cercles 60px
- Grid 3x2

---

## ✅ Checklist Implémentation Complète

### Phase 1 : Countdown Premium
- [ ] Fond olive avec pattern
- [ ] Hexagones dorés
- [ ] Numbers 80px blancs
- [ ] Boxes translucides
- [ ] Ornements géométriques

### Phase 2 : Timeline
- [ ] Ligne verticale dorée
- [ ] 5 événements avec icônes
- [ ] Alternance gauche/droite
- [ ] Fond crème avec ornements coins

### Phase 3 : Dress Code Premium
- [ ] Fond sage avec motifs
- [ ] Cercles 80px avec brillance
- [ ] Texte élégant blanc
- [ ] Box footer arrondie
- [ ] Losanges décoratifs

### Phase 4 : Photos Couple
- [ ] Grid 2+1 photos N&B
- [ ] Citation avec guillemets dorés
- [ ] Hover effects élégants
- [ ] Fond blanc épuré

### Phase 5 : Message Personnel
- [ ] Box centrale bordure dorée
- [ ] Signature script
- [ ] Ornements floraux
- [ ] Fond parchment

### Phase 6 : Animations & Polish
- [ ] Animations d'entrée par section
- [ ] Stagger sur éléments
- [ ] Hover states fluides
- [ ] Responsive complet

---

## 🎯 Différences Clés vs Version Actuelle

**Avant :**
- Design plat et corporate
- Couleurs fades (tout en parchment)
- Pas de formes géométriques
- Pas de variété visuelle
- Sections monotones

**Après :**
- Design premium artistique
- Couleurs variées (Olive/Sage/Crème alternés)
- Formes géométriques partout (hexagones, losanges, cercles)
- Ornements dorés sophistiqués
- Timeline visuelle engageante
- Photos couple N&B élégantes
- Chaque section a son identité

**Impact visuel estimé : +500%**

---

**Designer :** Wedding UX Designer Agent  
**Pour implémentation :** React Developer Agent  
**Validation :** Hugo + Carla  
**Deadline :** ASAP
