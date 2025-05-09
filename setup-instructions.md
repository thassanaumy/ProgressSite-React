# Setup Instructions

This document provides detailed setup instructions for the ProgressSite React application.

## Step 1: Extract the Files

Extract all files from the downloaded zip archive to a directory of your choice.

## Step 2: Install Node.js

If you don't have Node.js installed:

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download and install the LTS version (recommended)
3. Verify installation by running `node -v` and `npm -v` in your terminal

## Step 3: Install Dependencies

1. Open a terminal window
2. Navigate to the project directory
3. Run the following command:

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

## Step 4: Start Development Server

Run the following command to start the development server:

```bash
npm run dev
```

This will:
- Compile the TypeScript code
- Start a local development server
- Open the application in your default browser (typically at http://localhost:5173)

## Step 5: Making Changes

The application uses:
- **React** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** for styling

Key files to edit if you want to customize the app:

- `src/App.tsx` - Main application logic and section data
- `src/components/` - Individual components
- `tailwind.config.js` - Customize Tailwind settings
- `src/index.css` - Global styles

## Step 6: Building for Production

When you're ready to deploy the application:

```bash
npm run build
```

This creates an optimized production build in the `dist` directory, which you can deploy to any static hosting service.

## Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Make sure you ran `npm install` successfully
   - Check for typos in import statements

2. **Styling issues**
   - Make sure Tailwind is properly configured
   - Check the browser console for CSS errors

3. **TypeScript errors**
   - Address type issues indicated by the compiler
   - Make sure you're using the correct types for props

4. **"Port already in use" error**
   - Another application is using port 5173
   - Kill the process using that port or configure Vite to use a different port

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
