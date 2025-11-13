# Portfolio Modernization Implementation Guide

## Project Overview
Modernizing Brandon Doey's portfolio website to achieve a sleek, elegant design while maintaining a technical/data science aesthetic.

**Tech Stack:** React 18, TypeScript, Vite, TailwindCSS, Framer Motion

## Implementation Phases

### Phase 1: Foundation & Typography [CURRENT]
**Goal:** Fix fundamental design issues and establish a modern foundation
**Files to modify:**
- `src/index.css`
- `tailwind.config.js`
- `src/components/Header.tsx`

**Key tasks:**
1. Reduce base font size from 25px to 16-18px
2. Implement fluid typography with clamp()
3. Add Inter or JetBrains Mono fonts
4. Simplify text hierarchy (remove excessive uppercase)
5. Reduce animation delays to <100ms
6. Add CSS variables for theming

### Phase 2: Color System & Visual Polish
**Goal:** Implement sophisticated color palette and remove dated effects
**Files to modify:**
- `tailwind.config.js`
- `src/index.css`
- All component files for glass effect removal

**Key tasks:**
1. Define accent color system (cyan/teal/blue spectrum)
2. Replace glass morphism with subtle shadows
3. Implement gradient accents strategically
4. Add dark/light mode preparation
5. Update hover states with modern interactions

### Phase 3: Layout Restructure
**Goal:** Convert from modal-based to single-page scroll design
**Files to modify:**
- `src/App.tsx`
- `src/components/Main.tsx`
- Create new layout components

**Key tasks:**
1. Remove modal navigation system
2. Implement smooth scroll sections
3. Add sticky navigation header
4. Create section components with proper spacing
5. Implement intersection observer for scroll animations

### Phase 4: Background & Visual Effects
**Goal:** Add sophisticated background animations and effects
**New dependencies:** Three.js or tsparticles
**Files to modify:**
- `src/App.tsx`
- Create `src/components/Background.tsx`

**Key tasks:**
1. Remove static background image
2. Implement animated gradient mesh or particle system
3. Add noise texture overlays
4. Optional: WebGL shader effects
5. Implement parallax scrolling

### Phase 5: Data Visualization & Interactivity
**Goal:** Add data-driven elements befitting a data scientist
**New dependencies:** recharts or d3.js
**Files to modify:**
- `src/components/Resume.tsx`
- Create `src/components/SkillChart.tsx`

**Key tasks:**
1. Create interactive skill visualization
2. Add animated statistics/counters
3. Implement project filtering/sorting
4. Add GitHub-style contribution graph
5. Create timeline visualization for experience

### Phase 6: Advanced Features
**Goal:** Add cutting-edge features and optimizations
**Files to modify:**
- Various components
- Create new utility components

**Key tasks:**
1. Implement command palette (cmd+k)
2. Add keyboard navigation
3. Implement virtual scrolling
4. Add loading skeletons
5. Create magnetic cursor effects
6. Add terminal easter egg

## Current Phase Instructions

Start with **Phase 1: Foundation & Typography**

### Immediate Actions:
1. Review current `src/index.css` and `tailwind.config.js`
2. Create backup of current styling
3. Implement typography changes
4. Test responsive behavior
5. Update animation timings

### Success Criteria:
- [ ] Font size feels modern and readable
- [ ] Animations are snappy (<100ms delays)
- [ ] Text hierarchy is clear without uppercase abuse
- [ ] CSS variables are in place for future theming

## Commands for Claude Code

```bash
# Install new dependencies (when needed)
npm install @fontsource/inter @fontsource/jetbrains-mono
npm install framer-motion@latest  # Ensure latest version

# Development
npm run dev

# Build for testing
npm run build
npm run preview

# Type checking
npx tsc --noEmit
```

## File Structure Reference

```
src/
├── components/
│   ├── Header.tsx        # Main header - needs typography updates
│   ├── Footer.tsx        # Simple footer
│   ├── Main.tsx          # Modal container - will be restructured
│   ├── Resume.tsx        # Skills & experience - needs visual updates
│   ├── Projects.tsx      # Project gallery - needs grid layout
│   ├── Publications.tsx  # Academic publications
│   └── Contact.tsx       # Contact form
├── constants.ts          # Data arrays - no changes needed initially
├── types.ts             # TypeScript types
├── App.tsx              # Root component - needs layout changes
├── index.css            # Global styles - PRIMARY FOCUS
└── main.tsx             # Entry point

tailwind.config.js       # Tailwind configuration - needs color updates
```

## Design Principles

1. **Minimalism First:** Remove before adding
2. **Performance:** Every animation should be 60fps
3. **Accessibility:** Maintain keyboard navigation and screen reader support
4. **Progressive Enhancement:** Core functionality works without JS
5. **Data-Driven:** Visualizations should tell a story

## Common Pitfalls to Avoid

- Don't over-animate (subtle is better)
- Avoid too many gradient effects
- Don't sacrifice readability for aesthetics
- Keep mobile experience in mind
- Test performance on slower devices

## Testing Checklist

After each phase:
- [ ] Desktop (1920x1080, 1440x900, 1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 390x844)
- [ ] Animations at 60fps
- [ ] Lighthouse score >90
- [ ] No console errors
- [ ] Cross-browser (Chrome, Firefox, Safari)

## Resources

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Modern CSS](https://moderncss.dev/)
- [Web.dev Performance](https://web.dev/performance/)
