# Validations Design - Réponses Hugo

**Date:** 17 Février 2026  
**Designer:** Wedding UX Designer Agent  
**Validé par:** Hugo  

---

## ✅ Réponses aux Questions Design

### 1. Photo Hero Banner
**Status:** ✅ **VALIDÉ**

- **Chemin:** `C:\Users\hugop\Desktop\Kurdant - Entreprise\Carla-Sacha-mariage\images-site\banner-image.jpeg`
- **Action Dev:** Utiliser cette image pour le Hero Banner background
- **Format:** JPEG (à optimiser en WebP si possible pour performance)
- **Note:** Vérifier dimensions et compression, tester responsive

---

### 2. Polices Typographiques
**Status:** ✅ **VALIDÉ**

**Combinaison retenue:**
- **Script (Noms couple):** Great Vibes
- **Sans-serif (Texte):** Inter

```scss
// Import Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700&display=swap');

$font-script: 'Great Vibes', cursive;
$font-sans: 'Inter', sans-serif;
```

---

### 3. Palette Dress Code
**Status:** ✅ **VALIDÉ - 6 couleurs bien dosées**

Afficher les **6 couleurs principales** dans la section Dress Code :

| Couleur | HEX | Nom Affichage |
|---------|-----|---------------|
| Parchment | #F5F1E8 | Crème |
| Sand | #E8DCC8 | Sable |
| Olive | #A6B88F | Olive |
| Sage | #8A9A7B | Sauge |
| Bark | #6B5D54 | Écorce |
| Gold | #C9A86A | Or |

**Note:** Dosage harmonieux prévu dans le design (pas d'Olivewood trop foncé)

---

### 4. Texte Dress Code
**Status:** ✅ **VALIDÉ**

**Texte final retenu:**

```
Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit.
Élégance et confort avant tout !
```

**Alternative possible (si Hugo veut ajuster) :**
```
Si le cœur vous en dit, voici les couleurs qui habilleront notre journée.
Portez ce qui vous fait vous sentir bien.
```

---

### 5. Design Countdown
**Status:** ✅ **VALIDÉ - Gros mais pas trop**

**Interprétation:**
- Numbers lisibles et impactants
- Pas excessive (éviter 100px+)
- **Taille retenue:**
  - Mobile: **48-56px** (confortable sans dominer)
  - Desktop: **64px** (visible, élégant)

**Style:** Cards avec fond blanc, border Sage (variante structurée)

**Détails techniques:**
```scss
.countdown__number {
  font-size: 3rem; // 48px mobile
  font-weight: 700;
  background: $color-white;
  border: 2px solid rgba($color-sage, 0.2);
  border-radius: 8px;
  padding: 24px 16px;
  
  @media (min-width: 768px) {
    font-size: 3.5rem; // 56px tablet
  }
  
  @media (min-width: 1024px) {
    font-size: 4rem; // 64px desktop
  }
}
```

**Hugo dit:** "pour la techno je te laisse te débrouiller"
→ Liberté technique pour l'agent React Dev (cards, bordures, animations)

---

### 6. Scroll Indicator (Hero Banner)
**Status:** ❌ **NON SOUHAITÉ**

- Pas d'indicateur de scroll (flèche animée) en bas du Hero Banner
- Design plus épuré, focus sur les noms et la date
- Action Dev : Ne pas implémenter le composant `hero-banner__scroll-indicator`

---

### 7. Effet Scroll Overlay (Hero Fixe)
**Status:** ✅ **VALIDÉ**

**Effet souhaité par Hugo :**

- **Hero Banner = FIXE** (`position: fixed`)
- Sections suivantes **MONTENT PAR-DESSUS** le Hero au scroll
- Impression de "changer de page" mais reste same-page
- **Overlay opaque** : Sections cachent progressivement le Hero
- **Transition fluide** : Animation slide-up subtile

**Comportement visuel :**
```
┌─────────────────────────┐
│   HERO BANNER (FIXE)    │ ← Reste en place
│   Photo + Noms          │
└─────────────────────────┘
         ↓ Scroll
┌─────────────────────────┐
│   COUNTDOWN             │ ← Monte et recouvre Hero
│   (z-index: 2)          │
│   ─────────────────     │
│   HERO EN DESSOUS       │ ← Partiellement visible
└─────────────────────────┘
         ↓ Continue scroll
┌─────────────────────────┐
│   DRESS CODE            │ ← Recouvre complètement
│   (Hero caché)          │
└─────────────────────────┘
```

**Implémentation technique :**

```scss
.hero-banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.countdown-section,
.dress-code-section {
  position: relative;
  z-index: 2;
  margin-top: 100vh; // Première section commence après Hero
  background-color: $color-parchment; // Opaque
}
```

**Animation Framer Motion :**

```jsx
<motion.section
  className="countdown-section"
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**Avantages :**
- ✅ Effet moderne et élégant
- ✅ Storytelling visuel fluide
- ✅ Compatible Mobile First
- ✅ Performance optimale (GPU-accelerated)
- ✅ Cohérent avec "Nature Sophistiquée"

---

### 8. Hébergement & Domaine
**Status:** ✅ **VALIDÉ - Sous-domaine Hostinger**

- **Hébergement:** Hostinger
- **Type:** Sous-domaine (ex: `mariage.domaine-principal.com`)
- **Action:** Prévoir configuration DNS et déploiement build Vite

**Questions restantes:**
- Nom du sous-domaine exact ? (ex: `carla-sacha`, `mariage`, `wedding`)
- Domaine principal déjà en ligne sur Hostinger ?

---

## 📋 Récapitulatif Décisions

| Élément | Décision | Status |
|---------|----------|--------|
| Photo Hero | `images-site/banner-image.jpeg` | ✅ Validé |
| Polices | Great Vibes + Inter | ✅ Validé |
| Palette Dress Code | 6 couleurs | ✅ Validé |
| Texte Dress Code | Wording proposé | ✅ Validé |
| Taille Countdown | 48-64px (gros mais pas trop) | ✅ Validé |
| Scroll Indicator | Non | ✅ Validé |
| **Effet Scroll** | Hero fixe + Overlay sections | ✅ Validé |
| Hébergement | Sous-domaine Hostinger | ✅ Validé |

---

## ✅ TOUTES VALIDATIONS COMPLÈTES

**Design 100% prêt pour développement React !**

---

## 🚀 Prochaine Étape

**Passer le relais à l'agent React Developer** :

```bash
# Commande pour Hugo
@wedding-react-dev
```

**Documents disponibles pour le dev :**
1. ✅ `Moodboard-Analysis-Carla-Sacha.md`
2. ✅ `Homepage-Design-Specs-MVP.md` (40kb specs complètes)
3. ✅ `Design-Validations-Hugo.md` (validations finales)

**Tous les éléments sont spécifiés :**
- Palette HEX exacte
- Typographie (Great Vibes + Inter)
- Layouts wireframes
- Animations Framer Motion
- Responsive breakpoints
- Effet scroll overlay
- Photo banner path

**Temps estimé développement :** 6-8h (MVP complet)

---

*Document finalisé par Wedding UX Designer Agent*  
*Prêt pour implémentation React*  
*Date : 17/02/2026*
