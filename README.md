# 🚀 Cleva Landing Page Redesign

A responsive, modern, and component-based landing page built for **Cleva**, a UK-based IT services company. This project transforms the UI design into clean, maintainable, and scalable front-end code using Tailwind CSS, daisyUI, Alpine.js, Nunjucks, and Webpack.

---

## 🛠 Tech Stack

- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first CSS framework for building modern, responsive UIs
- **[daisyUI 5](https://daisyui.com/)** – Prebuilt UI components for Tailwind CSS
- **[Alpine.js 3](https://alpinejs.dev/)** – Lightweight reactive JavaScript framework for interactivity
- **[SwiperJS](https://swiperjs.com/)** – Touch-friendly slider and carousel library
- **[PostCSS](https://postcss.org/)** – CSS processor used for Tailwind and plugin handling
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** – Templating engine for layouts, components, and partials
- **[Prettier](https://prettier.io/)** – Code formatter for consistent styling
- **[Webpack](https://webpack.js.org/)** – Module bundler for compiling assets and managing the build system
- **Webpack Plugins Used:**
  - **[`html-bundler-webpack-plugin`](https://github.com/webdiscus/html-bundler-webpack-plugin)** – Processes HTML templates as entry points, bundles all referenced assets, and generates complete web pages — replacing the need for multiple plugins with a simpler configuration.
  - **[`copy-webpack-plugin`](https://webpack.js.org/plugins/copy-webpack-plugin/)** – Copies static files to the `dist/` directory during build

---

## 📦 Deliverables

✅ Clean and semantic HTML output

✅ Fully responsive design

✅ Tailwind 4 and daisyUI 5 for styling and UI components

✅ Alpine.js 3 for interactive features

✅ Component-based structure with Nunjucks

✅ Production build and optimization with Webpack

✅ Prettier formatting and configuration

✅ Setup documentation

---

## 📁 Project Structure

```
WDAN-Cleva/
├── docs/                        # GitHub Pages deployment (optional for demo/preview)
├── src/
│   ├── assets/                  # Static assets like images, icons, fonts, css, js, etc.
│   ├── data/                    # JS files, follows structure of `pages/` (e.g., blog-tech.js for blog/tech.html)
│   │   ├── _global.js           # Global data accessible in all templates
│   │   └── index.js             # Page-specific data for index.html
│   └── views/
│       ├── layouts/             # Nunjucks base layouts (e.g., main.html, blog.html)
│       ├── macros/              # Nunjucks reusable logic blocks
│       ├── pages/               # Page templates (e.g., index.html, blog/tag/tech.html)
│       └── partials/            # Reusable UI sections and components
├── .gitignore                   # Files and folders ignored by Git
├── .prettierrc                  # Code formatting rules for Prettier
├── CHANGELOG.md                 # Project changelog
├── nodemon.json                 # Auto-restarts server on changes to config or data files
├── package.json                 # Project metadata, dependencies, and scripts
├── postcss.config.js            # PostCSS plugin config for Tailwind CSS processing
├── README.md                    # Project overview and usage guide
├── webpack.config.js            # Webpack build configuration
└── WDAN-Cleva.code-workspace    # VS Code workspace settings and extension recommendations
```

---

## ⚙️ Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/IndraSukma/WDAN-Cleva.git
cd WDAN-Cleva
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm start
```

### 4. Build for Production

```bash
npm run build-prod
```

---

## 💻 Recommended VSCode Setup

This project includes a `.vscode` folder containing:

- `settings.json` – Editor configuration for formatting, indentation, and file behavior tailored to the project (e.g. Prettier, Tailwind class sorting).
- `extensions.json` – Suggested extensions to improve the development experience with syntax highlighting, IntelliSense, and formatting.

When you open the project in VSCode, it will prompt you to install the recommended extensions and automatically apply the workspace settings, ensuring consistency across different machines and developers.

### 🔧 Recommended Extensions

These extensions are recommended in the workspace:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) – Code formatter for consistent style
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) – Autocomplete, syntax highlighting, and linting for Tailwind classes
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold) – Folds long Tailwind class lists for better code readability
- [Alpine.js IntelliSense](https://marketplace.visualstudio.com/items/?itemName=adrianwilczynski.alpine-js-intellisense) – Autocompletion and suggestions for Alpine.js attributes
- [Alpine.js Syntax Highlight](https://marketplace.visualstudio.com/items/?itemName=sperovita.alpinejs-syntax-highlight) – Syntax highlighting for Alpine.js directives
- [Better Nunjucks](https://marketplace.visualstudio.com/items/?itemName=ginfuru.better-nunjucks) – Enhanced syntax highlighting and support for Nunjucks templates

---

## 📝 Usage

You can integrate the output (dist/) into your existing platform or CMS, or extend the component system for a full application. It’s structured to be easy to hand off and scale with any backend framework or SPA.

---

## 👨‍💻 Author

Crafted with care by Indra Sukmajaya
