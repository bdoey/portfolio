# Brandon Doey - Personal Portfolio

A modern, responsive portfolio website showcasing my experience, skills, projects, and publications as a Data & ML Engineer.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React, TypeScript, and Vite
- **Dynamic Navigation**: Hash-based routing for smooth transitions between sections
- **SEO Optimized**: Comprehensive meta tags for search engines and social media sharing
- **Professional Sections**:
  - Resume with experience, education, and skills
  - Publications from academic research
  - Project portfolio with categorized work
  - Contact information and social links

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Source Sans 3)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bdoey/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Main.tsx
│   │   ├── Resume.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   └── Contact.tsx
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Entry point
│   ├── constants.ts  # Data constants (skills, experience, projects, etc.)
│   └── types.ts      # TypeScript type definitions
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Customization

### Updating Content

Edit the following files to customize the portfolio content:

- **Personal Information**: `src/components/Header.tsx`, `src/components/Contact.tsx`
- **Experience & Skills**: `src/constants.ts` (EXPERIENCE, SKILLS, EDUCATION arrays)
- **Projects**: `src/constants.ts` (PROJECTS array)
- **Publications**: `src/constants.ts` (PUBLICATIONS array)

### Styling

The portfolio uses TailwindCSS for styling. Custom styles can be found in:
- `index.html` (global styles in `<style>` tag)
- Individual component files (inline Tailwind classes)

### Images

- Profile photo is hosted on GitHub
- Background image uses a placeholder service - replace the URL in `src/App.tsx` with your own image
- You can add images to the `public/images/` directory and reference them with `/images/filename.jpg`

## Deployment

This portfolio can be deployed to various platforms:

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

### Netlify / Vercel
- Connect your repository
- Build command: `npm run build`
- Publish directory: `dist`

## License

This project is open source and available under the MIT License.

## Contact

Brandon Doey
- LinkedIn: [linkedin.com/in/bdoey](https://www.linkedin.com/in/bdoey)
- GitHub: [github.com/bdoey](https://github.com/bdoey)
- Twitter: [@bdoey](https://twitter.com/bdoey)
