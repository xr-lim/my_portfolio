# ✨ Xin Rou — Personal Portfolio

A modern, Apple-inspired personal portfolio website built with React and Vite. Featuring a sleek dark/light alternating design system, smooth animations, and a fully responsive layout.

## 🖥️ Live Sections

| Section | Theme | Description |
|---------|-------|-------------|
| **About** | 🌑 Dark | Hero section with animated gradient heading, profile photo, and contact links |
| **Projects** | 🌕 Light | Showcases key projects with images, descriptions, and GitHub links |
| **Skills** | 🌑 Dark | Interactive skill grid organized by Languages, Frameworks & Tools, and Technologies |
| **Beyond Tech** | 🌕 Light | Photo showcase of hobbies — Dance, Baking, and Travel — with animated transitions |

<<<<<<< HEAD
## 🎨 Design System

Inspired by Apple's design philosophy:

- **Typography** — [Inter](https://fonts.google.com/specimen/Inter) with SF Pro fallbacks, tight letter-spacing at all sizes
- **Color Palette** — Binary dark (`#000000`) / light (`#f5f5f7`) section rhythm with Apple Blue (`#0071e3`) as the sole accent
- **Navbar** — Translucent glass effect with `backdrop-filter: saturate(180%) blur(20px)`
- **Animations** — Shimmer gradient on hero text, ambient glow effects, card hover lifts, fade-in transitions, hobby carousel animations
- **Layout** — Full-width cinematic sections, centered 980px content, generous whitespace
=======
>>>>>>> ba5c378d2308fbafbd4df1f8c6506505385d7966

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) 19
- **Build Tool:** [Vite](https://vite.dev/) 6
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons pack)
- **Styling:** Vanilla CSS with CSS custom properties
- **Font:** Google Fonts (Inter)

<<<<<<< HEAD
## 📁 Project Structure

```
my_portfolio/
├── public/
├── src/
│   ├── assets/            # Images, resume PDF, SVGs
│   ├── components/
│   │   ├── About.jsx      # Hero section with profile and contact links
│   │   ├── BeyondTech.jsx # Hobby photo carousel with animations
│   │   ├── Footer.jsx     # Copyright footer
│   │   ├── Navbar.jsx     # Sticky glass navigation bar
│   │   ├── Projects.jsx   # Project showcase cards
│   │   └── Skills.jsx     # Skills grid with icon cards
│   ├── App.jsx            # Root component
│   ├── App.css            # Legacy styles (unused)
│   ├── index.css          # Main design system & all styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/xr-lim/my_portfolio.git
cd my_portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

## ✏️ Customization

### Update Personal Info
- **Profile photo** → Replace `src/assets/informal_pic.png`
- **Resume** → Replace `src/assets/resume.pdf`
- **Contact links** → Edit URLs in `src/components/About.jsx`
- **Bio text** → Edit paragraphs in `src/components/About.jsx`

### Update Projects
Edit the `projects` array in `src/components/Projects.jsx`:
```js
{
    title: "Project Name",
    image: importedImage,
    alt: "Project preview",
    description: "Project description...",
    technologies: "React, Node.js, ...",
    link: "https://github.com/...",
}
```

### Update Hobbies
Edit the `hobbies` array in `src/components/BeyondTech.jsx` to add/remove hobbies and photos.

### Update Skills
Edit the `skillGroups` array in `src/components/Skills.jsx` to modify skill categories and items.

## 📄 License

© 2026 Xin Rou. All rights reserved.
=======
>>>>>>> ba5c378d2308fbafbd4df1f8c6506505385d7966
