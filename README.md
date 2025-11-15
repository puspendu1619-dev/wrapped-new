# Wrapped.Co Landing Page - React + Tailwind CSS

A modern, responsive landing page built with React and Tailwind CSS, matching the Figma design exactly.

## Features

- **React 18** with Vite for fast development
- **Tailwind CSS** for styling
- **Component-based architecture** - Each section is a separate component
- **Fully responsive** design
- **Modern UI** matching Figma design exactly

## Project Structure

```
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main app component
    ├── index.css          # Tailwind imports
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── SpendingAnalysis.jsx
        ├── ClaritySection.jsx
        ├── Features.jsx
        ├── SubscriptionTracking.jsx
        ├── SpendingCoach.jsx
        ├── OtherBenefits.jsx
        ├── Blog.jsx
        ├── Resources.jsx
        ├── Testimonials.jsx
        └── Footer.jsx
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Components

Each section of the landing page is a separate React component:

- **Header** - Navigation and logo
- **Hero** - Main hero section with CTA
- **SpendingAnalysis** - Real-time spending analysis with graphs
- **ClaritySection** - Clarity focused section
- **Features** - Features grid with comparison badges
- **SubscriptionTracking** - Subscription dashboard
- **SpendingCoach** - AI spending coach section
- **OtherBenefits** - Additional benefits grid
- **Blog** - Blog posts grid
- **Resources** - Resources cards
- **Testimonials** - User testimonials
- **Footer** - Footer with links

## Styling

All styling is done with Tailwind CSS utility classes. Custom colors and fonts are defined in `tailwind.config.js`:

- **Colors**: Purple gradients, text colors matching Figma
- **Fonts**: Mulish (primary), Inter (secondary), Mochiy Pop One (logo)
- **Spacing**: Consistent spacing using Tailwind's spacing scale

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses Vite for fast HMR (Hot Module Replacement) during development. Changes to components will automatically refresh in the browser.
