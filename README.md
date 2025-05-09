# ProgressSite

A modern React application featuring a resizable side navigation with progress tracking. This project demonstrates how to implement a responsive, interactive UI with React, TypeScript, and Tailwind CSS.

## Features

- **Resizable Sidebar**: Drag to adjust the width of the side navigation panel
- **Progress Tracking**: Visual progress indicator shows your position in the content
- **Smooth Scrolling**: Click on navigation items to smoothly scroll to the corresponding section
- **Responsive Design**: Works on all screen sizes
- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and Vite

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will launch the application at [http://localhost:5173](http://localhost:5173).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
ProgressSite/
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript Node configuration
├── vite.config.ts              # Vite configuration
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Main application component
│   ├── index.css              # Global styles
│   └── components/            # React components
│       ├── SideProgress.tsx   # Side navigation component
│       ├── Section.tsx        # Content section component
│       └── ResizableBox.tsx   # Resizable container component
```

## Customization

### Modifying Sections

Edit the `sectionData` array in `src/App.tsx` to change the sections displayed in the navigation and content areas.

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying classes directly in the component files
2. Extending the Tailwind configuration in `tailwind.config.js`
3. Adding custom styles in `src/index.css`

## License

MIT

## Acknowledgements

This project was created as a modern React implementation of a ProgressSite component, originally built with vanilla JavaScript and CSS.
