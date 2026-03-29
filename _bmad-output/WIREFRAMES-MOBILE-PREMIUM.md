# WIREFRAMES MOBILE - Site Mariage Premium
## Vue Mobile First - Carla & Sacha

**Designer :** Wedding UX Designer Agent  
**Date :** 17 Février 2026  
**Breakpoint :** 320px - 767px  
**Approche :** Mobile First (70% trafic mobile)

---

## 📱 SECTION 0 : Hero Banner Mobile

```
┌───────────────────────────┐
│                           │
│     [Photo Couple]        │
│      Fullscreen           │
│      Blur subtil          │
│                           │
│                           │
│    Sacha & Carla          │ ← 2.5rem Great Vibes
│                           │
│   25 Juillet 2026         │ ← 1rem Inter Light
│      10H30                │
│                           │
│         ↓                 │ ← Indicateur scroll
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.hero-banner-mobile {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  position: relative;
  
  // Overlay subtil
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.15);
  }
}

.hero-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;        // 40px mobile
  color: #FFFFFF;
  text-align: center;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  margin-bottom: 16px;
  z-index: 2;
}

.hero-date {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;          // 16px
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  text-shadow: 0 1px 8px rgba(0,0,0,0.3);
  z-index: 2;
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: rgba(255,255,255,0.8);
  animation: bounce 2s infinite;
}
```

---

## 📱 SECTION 1 : Countdown Premium Mobile

```
┌───────────────────────────┐
│   [Fond OLIVE Pattern]    │
│                           │
│  ┌─────────────────────┐  │
│  │ Jusqu'au Grand Jour │  │ ← 1.75rem Great Vibes
│  └─────────────────────┘  │
│                           │
│  ┌────────┐  ┌────────┐  │
│  │   ⬡    │  │   ⬡    │  │
│  │        │  │        │  │
│  │  152   │  │   12   │  │ ← 3.5rem (56px)
│  │        │  │        │  │
│  │ JOURS  │  │ HEURES │  │
│  └────────┘  └────────┘  │
│                           │
│  ┌────────┐  ┌────────┐  │
│  │   ⬡    │  │   ⬡    │  │
│  │        │  │        │  │
│  │   45   │  │   30   │  │
│  │        │  │        │  │
│  │  MIN   │  │  SEC   │  │
│  └────────┘  └────────┘  │
│                           │
│  ╔════════════════════╗  │
│  ║   Trait doré       ║  │
│  ╚════════════════════╝  │
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.countdown-mobile {
  min-height: 100vh;
  background: #8A9A7B;      // Sage foncé
  padding: 80px 24px;
}

.countdown-title-mobile {
  font-family: 'Great Vibes', cursive;
  font-size: 1.75rem;       // 28px mobile
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 48px;
  padding: 16px 32px;
  border: 2px solid rgba(201,168,106,0.4);
  border-radius: 40px;
  display: inline-block;
}

.countdown-grid-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 400px;
  margin: 0 auto 40px;
}

.countdown-block-mobile {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 32px 16px;
  text-align: center;
  
  &::before {
    content: '⬡';
    font-size: 32px;
    color: #C9A86A;
    display: block;
    margin-bottom: 12px;
  }
}

.countdown-number-mobile {
  font-size: 3.5rem;        // 56px mobile
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.countdown-label-mobile {
  font-size: 0.75rem;       // 12px
  font-weight: 600;
  color: rgba(245,241,232,0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
```

---

## 📱 SECTION 2 : Timeline Mobile

```
┌───────────────────────────┐
│   [Fond CRÈME Ornements]  │
│                           │
│  ┌─────────────────────┐  │
│  │   Le Programme      │  │ ← 2rem Great Vibes
│  └─────────────────────┘  │
│  ─────────────────────    │ ← Trait doré
│                           │
│  ⛪ │ 10:30               │
│     │ Cérémonie          │
│     │ Église Notre-Dame  │
│     │                    │
│  🥂 │ 12:00              │
│     │ Cocktail           │
│     │ Jardin du Château  │
│     │                    │
│  🍽️ │ 14:00             │
│     │ Déjeuner           │
│     │ Grande Salle       │
│     │                    │
│  💃 │ 18:00              │
│     │ Soirée Dansante    │
│     │ Piste de Danse     │
│     │                    │
│  🎆 │ 23:00              │
│     │ Feu d'Artifice     │
│     │ Terrasse           │
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.timeline-mobile {
  min-height: 100vh;
  background: #F5F1E8;
  padding: 80px 24px;
}

.timeline-title-mobile {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;          // 32px
  color: #3D4835;
  text-align: center;
  margin-bottom: 16px;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: linear-gradient(135deg, #C9A86A, #D4BC8E);
    margin: 16px auto 0;
    border-radius: 2px;
  }
}

.timeline-item-mobile {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  align-items: flex-start;
}

.timeline-icon-mobile {
  width: 48px;
  height: 48px;
  min-width: 48px;           // Prevent shrink
  background: #FFFFFF;
  border: 3px solid #C9A86A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.timeline-content-mobile {
  flex: 1;
  
  .time {
    font-size: 1rem;        // 16px
    font-weight: 600;
    color: #C9A86A;
    margin-bottom: 4px;
  }
  
  h3 {
    font-size: 1.125rem;    // 18px
    font-weight: 600;
    color: #3D4835;
    margin-bottom: 4px;
  }
  
  p {
    font-size: 0.875rem;    // 14px
    color: rgba(61,72,53,0.7);
    font-style: italic;
  }
}
```

---

## 📱 SECTION 3 : Dress Code Mobile

```
┌───────────────────────────┐
│   [Fond SAGE Motifs]      │
│                           │
│  ◇                     ◇  │
│                           │
│  ┌─────────────────────┐  │
│  │   Dress Code        │  │ ← 2rem Great Vibes
│  └─────────────────────┘  │
│                           │
│  "Nous serions ravis de   │
│   vous voir porter ces    │
│   couleurs si le cœur     │
│   vous en dit..."         │
│                           │
│  ○   ○   ○               │
│  Parchment Sand Olive     │
│                           │
│  ○   ○   ○               │
│  Sage  Bark  Gold         │
│                           │
│  ┌─────────────────────┐  │
│  │ Élégance et confort │  │
│  │ avant tout !        │  │
│  └─────────────────────┘  │
│                           │
│  ◇                     ◇  │
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.dress-code-mobile {
  min-height: 100vh;
  background: #A6B88F;
  background-image:
    linear-gradient(30deg, transparent 45%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.03) 55%, transparent 55%),
    linear-gradient(-30deg, transparent 45%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.03) 55%, transparent 55%);
  background-size: 80px 80px;
  padding: 80px 24px;
  position: relative;
  
  // Losanges coins
  &::before,
  &::after {
    content: '◇';
    position: absolute;
    font-size: 40px;
    color: rgba(255,255,255,0.2);
  }
  
  &::before {
    top: 40px;
    left: 24px;
  }
  
  &::after {
    bottom: 40px;
    right: 24px;
  }
}

.dress-code-title-mobile {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;          // 32px
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 24px;
}

.dress-code-intro-mobile {
  font-size: 1rem;          // 16px
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  max-width: 280px;
  margin: 0 auto 40px;
  line-height: 1.6;
  font-style: italic;
}

.color-palette-mobile {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
  justify-items: center;
  margin-bottom: 40px;
}

.color-item-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.color-circle-mobile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  box-shadow: 
    0 6px 16px rgba(0,0,0,0.12),
    inset 0 2px 6px rgba(255,255,255,0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    height: 40%;
    background: linear-gradient(180deg, rgba(255,255,255,0.4), transparent);
    border-radius: 50%;
  }
}

.color-label-mobile {
  font-size: 0.75rem;       // 12px
  font-weight: 500;
  color: #FFFFFF;
  text-transform: capitalize;
}

.dress-code-footer-mobile {
  text-align: center;
  padding: 24px 32px;
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 40px;
  backdrop-filter: blur(8px);
  
  font-size: 1rem;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 1.5;
}
```

---

## 📱 SECTION 4 : Photos Couple Mobile

```
┌───────────────────────────┐
│   [Fond BLANC]            │
│                           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │    Photo 1 N&B      │  │
│  │    Portrait 4:5     │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │    Photo 2 N&B      │  │
│  │    Portrait 4:5     │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
│  ┌─────────────────────┐  │
│  │  "Notre Histoire"   │  │ ← 1.75rem Great Vibes
│  │                     │  │
│  │  Citation           │  │
│  │  romantique du      │  │
│  │  couple...          │  │
│  └─────────────────────┘  │
│                           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │    Photo 3 N&B      │  │
│  │    Paysage 16:9     │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.photos-mobile {
  min-height: 100vh;
  background: #FFFFFF;
  padding: 80px 24px;
}

.photos-grid-mobile {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
}

.photo-item-mobile {
  width: 100%;
  aspect-ratio: 4/5;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid #F5F1E8;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.1);
  }
  
  &.featured {
    aspect-ratio: 16/9;
  }
}

.photos-quote-mobile {
  background: #F5F1E8;
  border-radius: 16px;
  padding: 40px 24px;
  text-align: center;
  position: relative;
  margin-bottom: 32px;
  
  &::before {
    content: '"';
    position: absolute;
    top: -16px;
    left: 20px;
    font-size: 80px;
    font-family: 'Great Vibes', cursive;
    color: rgba(201,168,106,0.3);
    line-height: 1;
  }
  
  h3 {
    font-family: 'Great Vibes', cursive;
    font-size: 1.75rem;     // 28px
    color: #3D4835;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 1rem;        // 16px
    font-weight: 300;
    color: rgba(61,72,53,0.8);
    line-height: 1.7;
    font-style: italic;
  }
}
```

---

## 📱 SECTION 5 : Message Personnel Mobile

```
┌───────────────────────────┐
│   [Fond PARCHMENT]        │
│                           │
│  ✿                     ✿  │
│                           │
│  ┌─────────────────────┐  │
│  │  Sacha & Carla      │  │ ← 2.5rem Great Vibes
│  └─────────────────────┘  │
│                           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │ Message personnel   │  │
│  │ du couple aux       │  │
│  │ invités...          │  │
│  │                     │  │
│  │ Texte chaleureux    │  │
│  │ et romantique       │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
│  ┌─────────────────────┐  │
│  │   Avec Amour ♥      │  │ ← 1.5rem Great Vibes
│  └─────────────────────┘  │
│                           │
│  ✿                     ✿  │
│                           │
└───────────────────────────┘
```

### Specs Mobile
```scss
.message-mobile {
  min-height: 80vh;
  background: #F5F1E8;
  padding: 80px 24px;
  text-align: center;
  position: relative;
  
  &::before,
  &::after {
    content: '✿';
    position: absolute;
    font-size: 48px;
    color: rgba(201,168,106,0.3);
  }
  
  &::before {
    top: 40px;
    left: 24px;
  }
  
  &::after {
    bottom: 40px;
    right: 24px;
  }
}

.message-title-mobile {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;        // 40px
  color: #3D4835;
  margin-bottom: 40px;
}

.message-content-mobile {
  background: #FFFFFF;
  border: 2px solid rgba(201,168,106,0.3);
  border-radius: 16px;
  padding: 40px 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  
  p {
    font-size: 1rem;        // 16px
    font-weight: 300;
    color: #3D4835;
    line-height: 1.8;
    margin-bottom: 16px;
  }
}

.message-signature-mobile {
  font-family: 'Great Vibes', cursive;
  font-size: 1.5rem;        // 24px
  color: #C9A86A;
  margin-top: 32px;
}
```

---

## 📐 Touch Targets & Spacing

### Règles Mobile
```scss
// Touch Targets minimaux (WCAG)
$touch-target-min: 44px;

// Spacing System Mobile
$spacing-mobile: (
  'xs': 8px,
  'sm': 16px,
  'md': 24px,
  'lg': 32px,
  'xl': 48px,
  'xxl': 64px,
  'xxxl': 80px
);

// Paddings sections
.section-mobile {
  padding: 80px 24px;       // Top/Bottom : 80px, Left/Right : 24px
}

// Gaps grids
.grid-mobile {
  gap: 16px;                // Standard mobile gap
}
```

---

## 🎬 Animations Mobile

### Performance Mobile Optimisée
```jsx
// Réduire les animations sur mobile si prefers-reduced-motion
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Animations simplifiées mobile
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ 
    duration: shouldReduceMotion ? 0.3 : 0.6,
    ease: "easeOut" 
  }}
>
```

### Scroll Snap Points (Optionnel)
```scss
// Snap entre sections sur mobile
.mobile-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.section-mobile {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

---

## ✅ Checklist Mobile

- [x] Hero Banner adapté (typo réduite, espacement optimisé)
- [x] Countdown grid 2x2 au lieu de 1x4
- [x] Timeline layout vertical simple (pas d'alternance)
- [x] Dress Code grid 3x2 cercles
- [x] Photos stacked verticalement
- [x] Touch targets min 44px partout
- [x] Padding sections 24px left/right
- [x] Typography scale réduite (56px max numbers)
- [x] Ornements adaptés (taille réduite)

---

**Designer :** Wedding UX Designer  
**Pour :** React Developer Agent  
**Breakpoint :** 320px - 767px  
**Ready for Implementation :** ✅
