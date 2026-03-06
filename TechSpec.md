# Active Chiropractic & Rehab - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submit | Custom colors, pill shape |
| Card | Service cards, testimonials | Custom shadows, hover effects |
| Input | Contact form fields | Focus states, validation |
| Textarea | Contact form message | Resize, focus states |
| Sheet | Mobile navigation drawer | Slide from right |
| Separator | Visual dividers | Custom color |

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| Navigation | Fixed header with scroll effect | - |
| MobileNav | Hamburger menu for mobile | isOpen, onClose |
| HeroSection | Main hero with animations | - |
| ServiceCard | Individual service display | icon, title, description, benefits |
| TestimonialCard | Patient review display | quote, author, rating, treatment |
| FeatureItem | Why Choose Us item | icon, title, description |
| ContactForm | Appointment request form | - |
| Footer | Site footer | - |
| ScrollReveal | Animation wrapper | children, delay, direction |

### Animation Components

| Component | Purpose |
|-----------|---------|
| FadeInUp | Scroll-triggered fade + slide up |
| FadeInLeft | Scroll-triggered fade + slide from left |
| StaggerContainer | Parent for staggered children |
| FloatingElement | Continuous float animation |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | Framer Motion | AnimatePresence + stagger | Medium |
| Nav scroll shadow | React hooks | useScrollPosition + conditional class | Low |
| Hero content entrance | Framer Motion | motion.div with variants | Medium |
| Hero image float | Framer Motion | animate prop with repeat | Low |
| Scroll reveal (fade-up) | Framer Motion | whileInView + viewport | Medium |
| Service card stagger | Framer Motion | staggerChildren in variants | Medium |
| Card hover lift | CSS/Tailwind | hover:translate-y + transition | Low |
| Button hover scale | CSS/Tailwind | hover:scale + transition | Low |
| Testimonial fade-in | Framer Motion | whileInView with stagger | Medium |
| Why Choose Us icons | Framer Motion | whileInView + bounce | Low |
| Contact form focus | CSS/Tailwind | focus: ring + border | Low |
| Mobile menu slide | Framer Motion | AnimatePresence + x transform | Medium |
| Smooth scroll | CSS | scroll-behavior: smooth | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent scroll animations
- **Use for**: All entrance animations, scroll triggers, hover states, page transitions

### Secondary: CSS/Tailwind
- **Rationale**: Performance, simplicity for basic transitions
- **Use for**: Hover effects, focus states, simple transitions

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-chiropractic.jpg
│   │   └── doctor-portrait.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── separator.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileNav.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Auto-installed)
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui base

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts (Google Fonts via CDN)
- Poppins (400, 500, 600, 700)
- Inter (400, 500, 600)

---

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5f7a',
          dark: '#134b61',
          light: '#2a7f9a',
        },
        secondary: {
          DEFAULT: '#57c5b6',
          light: '#7dd3c7',
        },
        accent: {
          warm: '#f4a261',
          'warm-hover': '#e76f51',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing with srcset

2. **Animation Performance**
   - Use transform and opacity only
   - Apply will-change to animated elements
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load sections if needed
   - Optimize bundle size

4. **SEO**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Meta tags for social sharing

---

## Accessibility Requirements

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip links for navigation

2. **Screen Readers**
   - Proper ARIA labels
   - Alt text for images
   - Semantic HTML

3. **Motion**
   - prefers-reduced-motion support
   - No essential info in animations only

4. **Color Contrast**
   - WCAG AA compliance (4.5:1 for text)
   - Test all color combinations
