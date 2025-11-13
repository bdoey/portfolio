# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with Brandon Doey's personal portfolio codebase. It explains the architecture, conventions, workflows, and best practices to ensure consistent and effective contributions.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture & Design Patterns](#architecture--design-patterns)
5. [Key Files & Their Purposes](#key-files--their-purposes)
6. [Development Workflows](#development-workflows)
7. [Code Conventions](#code-conventions)
8. [Common Tasks](#common-tasks)
9. [Styling Guidelines](#styling-guidelines)
10. [Testing & Quality](#testing--quality)
11. [Deployment](#deployment)
12. [Important Notes & Gotchas](#important-notes--gotchas)

---

## Project Overview

**Name:** Brandon Doey - Personal Portfolio
**Purpose:** A modern, responsive portfolio website showcasing Brandon's experience, skills, projects, and publications as a Data & ML Engineer.

**Key Features:**
- Single-page application with hash-based routing
- Responsive design (mobile-first approach)
- Modal-based content sections
- Professional animations and transitions
- SEO optimized
- Built with modern React patterns

---

## Tech Stack

### Core Framework
- **React 18** - UI library with hooks-based components
- **TypeScript 5.2** - Type-safe development
- **Vite 5.0** - Fast build tool and dev server

### Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- Custom animations defined in `tailwind.config.js`

### Libraries
- **framer-motion** (v12.23) - Advanced animations
- **react-type-animation** (v3.2) - Typing animation effects
- **react-intersection-observer** (v10.0) - Scroll-based triggers

### Build & Development
- **Node.js** v16+ required
- **npm** package manager
- **ESLint/TSC** for code quality

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Landing page header with profile
│   │   ├── Footer.tsx       # Copyright and credits
│   │   ├── Main.tsx         # Modal container and routing logic
│   │   ├── Resume.tsx       # Experience, education, skills
│   │   ├── Projects.tsx     # Project portfolio grid
│   │   ├── Publications.tsx # Academic publications
│   │   └── Contact.tsx      # Contact information
│   ├── App.tsx              # Root component, state management
│   ├── index.tsx            # Entry point, ReactDOM render
│   ├── constants.ts         # ALL CONTENT DATA (see below)
│   ├── types.ts             # TypeScript interfaces
│   └── index.css            # Global CSS and Font Awesome
├── public/                  # Static assets (currently unused)
├── index.html               # HTML template with meta tags
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript config (application)
├── tsconfig.node.json       # TypeScript config (node/build)
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind theme and animations
├── postcss.config.js        # PostCSS configuration
├── black2-bg.jpeg           # Background image
├── bdoey3.png               # Profile photo
└── README.md                # User-facing documentation
```

---

## Architecture & Design Patterns

### Component Hierarchy

```
App.tsx (root)
├── Header.tsx (landing page)
│   ├── Profile image
│   ├── Name & title animation
│   ├── Social links
│   └── Navigation menu
├── Footer.tsx (copyright)
└── Main.tsx (modal container)
    ├── Resume.tsx
    ├── Projects.tsx
    ├── Publications.tsx
    └── Contact.tsx
```

### State Management
- **Local state** using React hooks (`useState`, `useEffect`)
- **Hash-based routing** via `window.location.hash`
- **No external state management library** (Redux, Zustand, etc.)

### Key Patterns

1. **Hash-Based Navigation:**
   - URLs like `#resume`, `#projects`, `#publications`, `#contact`
   - Handled in `App.tsx` via `hashchange` event listener
   - Toggles modal visibility and active content

2. **Modal System:**
   - `Main.tsx` acts as a modal container
   - Renders different content based on `activeArticle` prop
   - Background blurs when modal is active
   - Smooth enter/exit animations

3. **Data-Driven Content:**
   - ALL portfolio content lives in `src/constants.ts`
   - Components consume exported arrays (`SKILLS`, `EXPERIENCE`, `PROJECTS`, etc.)
   - Separation of content from presentation logic

4. **Animation Strategy:**
   - **Framer Motion** for complex animations (Header, profile image)
   - **Tailwind animations** for simple transitions (hover states)
   - **react-type-animation** for typing effects
   - **Intersection Observer** for scroll-triggered animations

---

## Key Files & Their Purposes

### 🔴 Critical Files (Modify with Care)

#### `src/constants.ts`
**THE MOST IMPORTANT FILE FOR CONTENT CHANGES**

Contains all portfolio data:
- `SKILLS` - Skills grouped by category (Languages, AI/ML, etc.)
- `EXPERIENCE` - Work history with roles, companies, duration, bullet points
- `EDUCATION` - Degrees and concentrations
- `PROJECTS` - Project portfolio with categories, descriptions, tech stacks
- `PUBLICATIONS` - Academic publications with abstracts and DOIs

**When to edit:**
- Updating Brandon's work experience
- Adding new skills or projects
- Changing publication information
- Any content change that doesn't affect UI structure

#### `src/types.ts`
TypeScript type definitions for all data structures. **Must be updated** if you change the shape of data in `constants.ts`.

#### `src/App.tsx`
Root component managing:
- Modal visibility state
- Hash-based routing logic
- Background blur effects
- Overall layout orchestration

**When to edit:**
- Changing routing behavior
- Adding new sections to the portfolio
- Modifying global animations or transitions

#### `tailwind.config.js`
Defines the entire design system:
- Color palette (`primary`, `dark` shades)
- Custom animations (`fade-in`, `float`, `drift`, etc.)
- Typography (Source Sans 3 font)

**When to edit:**
- Changing color scheme
- Adding new animations
- Modifying spacing/sizing scales

### 🟡 Component Files

All located in `src/components/`. Each is a functional React component using TypeScript and Framer Motion.

**Pattern:** Each component has a JSDoc comment at the top explaining its purpose and what it controls.

### 🟢 Configuration Files

- `vite.config.ts` - Build tool config (rarely needs changes)
- `tsconfig.json` - TypeScript compiler settings
- `postcss.config.js` - CSS processing (Tailwind integration)
- `package.json` - Dependencies and npm scripts

---

## Development Workflows

### Starting Development

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start dev server at http://localhost:5173
```

### Building for Production

```bash
npm run build        # TypeScript compile + Vite build → dist/
npm run preview      # Preview production build locally
```

**Build process:**
1. TypeScript compilation (`tsc`)
2. Vite bundles and minifies
3. Output in `dist/` directory

### Git Workflow

- **Main branch:** Production-ready code
- **Feature branches:** Named like `claude/feature-description-{session-id}`
- **Commit messages:** Clear, descriptive (see existing git log)
- **Push:** Always to the designated feature branch (see session instructions)

---

## Code Conventions

### TypeScript

- **Strict mode enabled** (`tsconfig.json`)
- **No unused variables/parameters** enforced
- **Explicit types** for props and state
- **Interfaces over types** for object shapes (existing pattern)

### React Components

```typescript
/**
 * Component Name
 *
 * Purpose: [Brief description]
 * Controls: [What this component manages/displays]
 */

import React from 'react';

interface ComponentProps {
  // Explicit prop types
}

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

export default ComponentName;
```

**Patterns to follow:**
- Functional components with hooks
- Props destructured in function signature
- Explicit `React.FC` typing
- Default exports
- JSDoc comments at file top

### File Headers

**Every file** has a JSDoc comment explaining:
1. Purpose: What this file does
2. Controls: What it manages/affects

**Example:**
```typescript
/**
 * Header Component
 *
 * Purpose: Main header section displayed on the portfolio home page.
 * Controls: Profile photo, name display, rotating job title, bio, social links, navigation menu.
 */
```

### Naming Conventions

- **Components:** PascalCase (`Header.tsx`, `NavLink`)
- **Files:** PascalCase for components, camelCase for utilities
- **Constants:** UPPER_SNAKE_CASE (`SKILLS`, `EXPERIENCE`)
- **CSS classes:** Tailwind utilities (kebab-case in custom CSS)

---

## Common Tasks

### Adding a New Skill

1. Open `src/constants.ts`
2. Find the appropriate `SKILLS` category
3. Add to the `skills` array:
   ```typescript
   {name: 'New Skill Name'}
   ```

### Adding Work Experience

1. Open `src/constants.ts`
2. Add to `EXPERIENCE` array (newest first):
   ```typescript
   {
     role: 'Job Title',
     company: 'Company Name',
     duration: 'Month Year – Month Year',
     points: [
       'Achievement 1 with metrics',
       'Achievement 2 with impact',
     ]
   }
   ```

### Adding a Project

1. Open `src/constants.ts`
2. Add to `PROJECTS` array:
   ```typescript
   {
     category: 'Category Name',
     title: 'Project Title',
     image: 'https://...',
     description: 'Brief description',
     link: 'https://github.com/...',
     techStack: ['Tech1', 'Tech2', 'Tech3']
   }
   ```

### Adding a Publication

1. Open `src/constants.ts`
2. Add to `PUBLICATIONS` array:
   ```typescript
   {
     title: 'Publication Title',
     meta: 'Month Year · Journal Name',
     authors: 'Author 1, Author 2',
     abstract: 'Full abstract text...',
     doi: 'https://doi.org/...'
   }
   ```

### Creating a New Section

This is more complex and requires:
1. Create component in `src/components/NewSection.tsx`
2. Import in `Main.tsx` and add routing logic
3. Add navigation link in `Header.tsx`
4. Add types in `types.ts` if new data structures needed
5. Add content to `constants.ts`

### Modifying Animations

**Tailwind-based animations:**
- Edit `tailwind.config.js` → `theme.extend.animation` and `keyframes`

**Framer Motion animations:**
- Edit component files directly
- Common props: `initial`, `animate`, `transition`, `whileHover`

### Changing Colors

1. Edit `tailwind.config.js` → `theme.extend.colors`
2. Update components using old color references
3. Test in dark backgrounds (portfolio has dark theme)

---

## Styling Guidelines

### Tailwind Usage

- **Utility-first approach** - use Tailwind classes directly in JSX
- **Responsive design** - use `sm:`, `md:`, `lg:` prefixes
- **Custom classes** - defined in `index.css` (minimal, prefer Tailwind)

### Custom CSS Classes

Located in `index.html` `<style>` tag and `index.css`:
- `.glass` - Glassmorphism effect (backdrop blur + transparency)
- `.text-gradient` - Animated text gradient

### Responsive Breakpoints

- **Mobile-first** approach
- `sm:` 640px+ (tablet)
- `md:` 768px+ (small desktop)
- `lg:` 1024px+ (large desktop)

### Animation Best Practices

1. **Use `transition-all duration-150`** for hover states
2. **Stagger animations** with `delay` in Framer Motion
3. **Keep durations short** (150-600ms) for snappy feel
4. **Test on slower devices** - avoid janky animations

---

## Testing & Quality

### Type Checking

```bash
npm run build  # Runs tsc before build
```

**TypeScript catches:**
- Type mismatches
- Missing required props
- Unused variables/parameters
- Invalid property access

### Manual Testing Checklist

Before committing changes:
- [ ] Test on mobile viewport (DevTools)
- [ ] Test all navigation links work
- [ ] Verify animations are smooth
- [ ] Check console for errors
- [ ] Test modal open/close behavior
- [ ] Verify hash navigation works
- [ ] Test back/forward browser buttons

### Code Quality

- **No `any` types** unless absolutely necessary
- **No console logs** in production code (remove debug statements)
- **Consistent formatting** (follow existing patterns)
- **Meaningful variable names**

---

## Deployment

### Supported Platforms

1. **GitHub Pages**
2. **Netlify**
3. **Vercel**

### Build Configuration

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 16+

### Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test `npm run preview` locally
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Confirm no console errors
- [ ] SEO meta tags correct in `index.html`

---

## Important Notes & Gotchas

### ⚠️ Common Pitfalls

1. **Image URLs are absolute GitHub links**
   - Background: `https://raw.githubusercontent.com/bdoey/portfolio/refs/heads/main/black2-bg.jpeg`
   - Profile: `https://raw.githubusercontent.com/bdoey/portfolio/refs/heads/main/bdoey3.png`
   - **Don't use relative paths** for these images

2. **Hash-based routing**
   - Changing routes requires updating:
     - `Header.tsx` navigation links
     - `Main.tsx` routing logic
     - `App.tsx` hash handling

3. **Modal animation timing**
   - 325ms delay for outro animation (`App.tsx:31`)
   - Keep this in sync with CSS transitions

4. **TypeScript strict mode**
   - Cannot use `any` without explicit typing
   - All props must be typed
   - Unused variables cause build failures

5. **Tailwind purging**
   - Dynamic class names won't work: ❌ `className={dynamicClass}`
   - Use full class strings: ✅ `className="text-blue-500"`
   - Or use `safelist` in `tailwind.config.js`

6. **Font Awesome**
   - Loaded via CDN in `index.css`
   - Use classes like `fa-brands fa-linkedin`
   - **Don't install npm package** (uses CDN)

### 🔍 Debugging Tips

**Component not updating?**
- Check if `constants.ts` was saved
- Verify import path is correct
- Check browser console for errors

**Animation not working?**
- Verify Framer Motion is imported
- Check Tailwind animation is defined in config
- Inspect element to see if classes applied

**TypeScript errors?**
- Check `types.ts` matches `constants.ts` structure
- Verify all required props passed
- Look for unused variables

**Build failing?**
- Check for TypeScript errors: `npm run build`
- Verify all imports resolve
- Check for syntax errors

---

## Quick Reference

### Most Common Edits

| What to Change | File | Lines |
|----------------|------|-------|
| Skills | `src/constants.ts` | 13-30 |
| Work Experience | `src/constants.ts` | 32-104 |
| Education | `src/constants.ts` | 106-117 |
| Projects | `src/constants.ts` | 119-216 |
| Publications | `src/constants.ts` | 218-233 |
| Colors | `tailwind.config.js` | 18-43 |
| Animations | `tailwind.config.js` | 48-109 |
| Social Links | `src/components/Header.tsx` | 137-142 |
| Bio Text | `src/components/Header.tsx` | 127-134 |

### NPM Scripts

```bash
npm run dev      # Development server (port 5173)
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build
```

### External Dependencies

All icons and fonts loaded via CDN (no local files):
- Font Awesome 6.7.2 (icons)
- Google Fonts (Source Sans 3)

---

## Summary for AI Assistants

**Primary Workflow:**
1. 95% of content changes happen in `src/constants.ts`
2. UI/styling changes happen in component files + `tailwind.config.js`
3. New features require component creation + routing updates
4. Always maintain TypeScript types in sync with data structures
5. Test locally with `npm run dev` before committing
6. Follow existing code patterns and JSDoc comment style
7. Commit descriptive messages, push to feature branch

**Golden Rules:**
- ✅ Edit `constants.ts` for content changes
- ✅ Keep types in sync with data
- ✅ Follow existing component patterns
- ✅ Test before committing
- ✅ Write clear commit messages
- ❌ Don't break TypeScript strict mode
- ❌ Don't remove JSDoc comments
- ❌ Don't use `any` types unnecessarily
- ❌ Don't commit console.log statements

---

*Last Updated: November 2025*
*Maintained by: Brandon Doey*
*For AI assistants working with this codebase*
