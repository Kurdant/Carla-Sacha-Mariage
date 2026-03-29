# ProjectContext - Carla-Sacha-Mariage

## Informations Projet

**Nom du projet** : Carla-Sacha-Mariage  
**Type** : Site vitrine événementiel (mariage)  
**Date de l'événement** : 25 Juillet 2026, 10H30  
**Chef de projet** : Hugo (développeur front React expérimenté)  
**Équipe** : Hugo seul  
**Workflow de validation** : Hugo crée → Carla valide via Hugo → Hugo ajuste  
**Deadline** : ASAP (publier les informations au plus vite)  
**Hébergement** : Hostinger  

---

## Stack Technique

```yaml
Framework: React 18.x (dernière version stable)
Build Tool: Vite
Langage: JavaScript ES6+
Styling: SCSS (Sass)
Animations: Framer Motion
Approche: Mobile First
Déploiement: Build statique sur Hostinger
```

---

## Glossaire Métier

| Concept | Définition | Détails |
|---------|-----------|---------|
| **Hero Banner** | Section d'accueil pleine page avec photo du couple et informations principales | Texte "Sacha & Carla 25 Juillet 2026", typographie élégante, placement non-intrusif sur la photo |
| **Countdown Timer** | Décompte en temps réel jusqu'au début de la cérémonie | Cible : 25/07/2026 à 10H30 |
| **Dress Code** | Code vestimentaire suggéré aux invités avec palette de couleurs | Texte générique modifiable + image palette + message "Si le cœur vous en dit..." |
| **Slide-up Transition** | Animation au scroll où la section suivante monte devant la précédente | Effet élégant et fluide, implémenté avec Framer Motion |
| **Palette Couleurs** | Couleurs recommandées aux invités pour leurs tenues | Olive Garden, Sage, Beige/Sand, Blanc cassé, touches dorées |
| **Mobile First** | Approche de développement priorisant l'expérience mobile | 70% des visiteurs consultent sur mobile |
| **One-Page** | Site composé d'une seule page avec sections qui défilent | Architecture simple, navigation fluide |

---

## Univers Visuel

### Style Design
**Identité** : Élégant, sobre, romantique, moderne, épuré  
**Description** : Minimalisme raffiné avec touches de douceur romantique  
**Ambiance** : Nature sophistiquée  

### Palette de Couleurs
- **Olive Garden** (vert olive principal)
- **Sage** (vert sauge)
- **Sand/Beige** (tons sable/beige chauds)
- **Blanc cassé/Crème**
- **Bark/Olivewood** (tons bois/écorce)
- **Or** (touches subtiles pour accents et cadres)

### Typographie
- **Titres/Noms** : Police script élégante et romantique
- **Texte courant** : Sans-serif moderne et lisible
- **Hiérarchie** : Claire et aérée

### Éléments Visuels
- Eucalyptus et feuillages naturels
- Roses blanches
- Espaces blancs généreux
- Photos romantiques en extérieur naturel
- Cadres dorés subtils

### Inspirations
Moodboard disponible dans : `/images inspi/`
- 5 images de référence (WhatsApp Images)
- Style cohérent : nature sophistiquée, palette olive/sage/beige

---

## Structure MVP - Phase 1

### Architecture One-Page

```
┌─────────────────────────────────────┐
│   SECTION 1 : HERO BANNER           │
│   - Photo couple (arrière-plan)     │
│   - "Sacha & Carla 25 Juillet 2026" │
│   - Typographie élégante            │
│   - Placement texte non-intrusif    │
└─────────────────────────────────────┘
              ↓ scroll
┌─────────────────────────────────────┐
│   COUNTDOWN TIMER                   │
│   Décompte → 25/07/2026 10H30       │
└─────────────────────────────────────┘
              ↓ scroll (slide-up)
┌─────────────────────────────────────┐
│   SECTION 2 : DRESS CODE            │
│   - Texte dress code [GÉNÉRIQUE]    │
│   - Image palette couleurs          │
│   - "Si le cœur vous en dit..."     │
└─────────────────────────────────────┘
```

### Détails Techniques

**Section 1 - Hero Banner**
- Photo haute qualité fournie par Hugo
- Texte exact : "Sacha & Carla 25 Juillet 2026"
- Optimisation image gérée manuellement par Hugo (compression WebP)
- Responsive : texte positionné pour ne pas gêner les visages sur mobile

**Countdown Timer**
- Date cible : 2026-07-25T10:30:00
- Affichage : Jours, Heures, Minutes, Secondes
- Style : Élégant et sobre (cohérent avec la palette)
- Animation subtile (optionnelle)

**Transition Scroll**
- Effet slide-up : la section 2 monte devant la section 1
- Implémentation : Framer Motion `whileInView`
- Fluide et performant sur mobile

**Section 2 - Dress Code**
- Texte générique placeholder (Hugo modifiera après)
- Palette couleurs fournie par Hugo à l'agent UX
- Message générique "Si le cœur vous en dit, portez ces couleurs"
- Présentation visuelle élégante

---

## Phases Futures

**Phase 2+** : Sections additionnelles à définir ultérieurement
- Programme du jour J (timeline)
- Informations pratiques (lieu, parking, hébergement)
- RSVP/Confirmation de présence
- Galerie photos
- Liste de mariage/cadeaux
- Footer avec contacts

**Gestion continue** : Hugo gère 100% du contenu et des mises à jour (couple non-technique)

---

## Acteurs

| Acteur | Rôle | Responsabilités |
|--------|------|----------------|
| **Hugo** | Chef de projet & Développeur | Développement, design, coordination, mises à jour |
| **Carla & Sacha** | Couple marié | Validation finale du design et du contenu |
| **Invités** | Utilisateurs finaux | Consultent le site (70% mobile) pour obtenir infos |

---

## Contraintes & Exigences

### Techniques
- **Performance** : Site léger et rapide (hébergement Hostinger)
- **Responsive** : Mobile First (70% trafic mobile attendu)
- **Navigateurs** : Support des navigateurs modernes (Chrome, Firefox, Safari, Edge)
- **Animations** : Fluides et non-bloquantes
- **SEO** : Basique (titre, meta description)

### Design
- **Cohérence** : Respecter strictement le moodboard et la palette
- **Élégance** : Chaque détail doit être soigné
- **Simplicité** : Pas de surcharge visuelle
- **Lisibilité** : Textes clairs et hiérarchie évidente

### Métier
- **Rapidité** : Livraison ASAP pour publier les infos
- **Évolutivité** : Architecture permettant ajouts futurs faciles
- **Maintenabilité** : Code propre pour modifications de contenu

---

## Règles Métier

1. **Mobile First** : L'expérience mobile est prioritaire
2. **Photo couple non-intrusive** : Le texte ne doit jamais cacher les visages
3. **Palette stricte** : Utiliser uniquement les couleurs définies (olive, sage, beige, or, blanc cassé)
4. **Animations subtiles** : Améliorer l'expérience sans distraire
5. **Textes modifiables** : Structure permettant changements faciles par Hugo
6. **Performance** : Images optimisées, bundle minimal
7. **Accessibilité** : Contrastes suffisants, textes lisibles

---

## Success Criteria

### Phase 1 (MVP)
- ✅ Hero banner avec photo et texte élégant
- ✅ Countdown fonctionnel jusqu'au 25/07/2026 10H30
- ✅ Transition slide-up fluide
- ✅ Section dress code avec palette
- ✅ Responsive parfait (mobile/tablet/desktop)
- ✅ Performance optimale (< 3s chargement)
- ✅ Design validé par Carla

### Global
- Site reflète exactement la vision d'Hugo/Carla
- Design épate et transmet l'ambiance élégante/romantique
- Navigation fluide et intuitive
- Fonctionne parfaitement sur tous devices
- Livraison rapide respectée

---

## Notes Complémentaires

- Hugo compresse les images manuellement (pas de gestion automatique)
- Textes génériques en Phase 1 (Hugo modifiera après génération)
- Palette couleurs fournie séparément à l'agent UX
- Photo couple fournie séparément
- Code doit être propre, auto-documenté, sans commentaires inutiles
- Pas d'emojis dans le code ou les commits Git
- Architecture simple et évolutive (principe Ockham's Razor)
