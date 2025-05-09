# ProgressSite v0.0.1

![release-banner](https://img.shields.io/badge/release-v0.0.1-blue) ![license](https://img.shields.io/badge/license-MIT-green) ![react](https://img.shields.io/badge/react-18-61DAFB) ![typescript](https://img.shields.io/badge/typescript-5.0-3178C6) ![tailwind](https://img.shields.io/badge/tailwind-3.3-38B2AC)

## 🚀 Initial Release

We're excited to introduce **ProgressSite** - a modern React component library for creating resizable side navigation panels with elegant progress tracking. Perfect for documentation sites, long-form content, and multi-step applications.

## ✨ Features

- **Resizable Sidebar** - Intuitively drag to adjust the width of the side navigation panel
- **Dynamic Progress Tracking** - Visual indicator shows your exact position in the content
- **Smooth Scrolling** - Effortless navigation with animated scrolling to each section
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Modern Tech Stack** - Built with React 18, TypeScript 5, Tailwind CSS 3.3, and Vite

## 📦 Installation

```bash
# Using npm
npm install side-column-progress

# Using yarn
yarn add side-column-progress

# Using pnpm
pnpm add side-column-progress
```

## 🛠️ Quick Start

```jsx
import { SideProgress, Section } from 'side-column-progress';
import 'side-column-progress/dist/style.css';

function App() {
  const sections = [
    { id: 'introduction', title: 'Introduction', content: '...' },
    { id: 'getting-started', title: 'Getting Started', content: '...' },
    // Add more sections as needed
  ];

  return (
    <div className="flex h-screen">
      <SideProgress sections={sections} initialWidth={280} />
      <div className="flex-1 overflow-y-auto">
        {sections.map(section => (
          <Section key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            <div>{section.content}</div>
          </Section>
        ))}
      </div>
    </div>
  );
}
```

## 📋 Documentation

For complete documentation and examples, visit our [documentation site](https://side-column-progress.dev).

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## 🔄 Breaking Changes

None (initial release)

## 📝 Notes

- Requires React 18 or higher
- Built with TypeScript for type safety
- Full accessibility support with ARIA attributes

## 🙏 Acknowledgements

This project was inspired by modern documentation sites and aims to provide a reusable solution for tracking progress in long-form content.

## 📜 License

[MIT](LICENSE)
