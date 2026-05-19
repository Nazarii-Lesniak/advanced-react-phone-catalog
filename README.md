# 📱 Nice Gadgets — Phone Catalog

An **e-commerce SPA** built with **React** and **TypeScript**, focused on performance, scalability, and clean architecture.

The application simulates a real-world online store with product browsing, filtering, cart management, and persistent UI state.

---

## 🔗 Live Demo

👉 https://nazarii-lesniak.github.io/advanced-react-phone-catalog/

---

## 🎯 Purpose

This project was built to practice and demonstrate:

- Advanced **React architecture**
- Building and scaling **custom hooks**
- State management using **Context API**
- Performance optimization (**debounce, lazy loading**)
- Writing clean, maintainable, and reusable code

---

## 📸 Screenshots

> *(Add your screenshots here — this is important)*

```md
![Home Page](./screenshots/home.png)
![Product Page](./screenshots/product.png)
```

---

## ✨ Key Features

**📦 Product Catalog**
Browse phones, tablets, and accessories with sorting, filtering, and URL-based pagination.

**🔍 Search with Debounce**
Optimized search using a custom `useDebounce` hook to reduce unnecessary re-renders.

**🛒 Shopping Cart**
Add/remove items, change quantity, and calculate total price. State is managed via Context API.

**❤️ Favourites (Wishlist)**
Save products using a dedicated context provider.

**🌙 Theme Toggle**
Persistent Light/Dark mode using `ThemeContext`.

**🖼️ Product Details Page**
Includes gallery, selectable options (color/capacity), and related products slider.

**🎠 Custom Products Slider**
Built from scratch using `useSlider` and `useSwipe` hooks.

**⚡ Code Splitting**
Lazy loading with `React.lazy` and `Suspense` for better performance.

**🛡️ Error Boundary**
Application-level error handling.

**♿ Accessibility**
Semantic HTML and basic a11y support using `eslint-plugin-jsx-a11y`.

---

## 🧠 Challenges & Solutions

| Challenge | Solution |
|---|---|
| URL-based state management | Implemented via custom hook `useCatalogParams` |
| Performance optimization | Debounce + lazy loading + optimized renders |
| Reusable UI logic | Extracted into custom hooks (`useSlider`, `useSwipe`) |
| Scalable structure | Separation into modules, components, hooks, and contexts |

---

## 🏗 Architecture Overview

**Global state handled via React Context:**
- `CartContext`
- `FavoritesContext`
- `ThemeContext`

**Separation of concerns:**
- `/api` — data fetching layer
- `/components` — reusable UI
- `/modules` — page-level logic (lazy-loaded)
- `/hooks` — reusable logic
- `/utils` — helper functions

---

## 🗂 Project Structure

```
src/
├── api/
├── assets/
├── components/
├── context/
├── hooks/
├── modules/
├── styles/
├── types/
└── utils/
```

---

## 🛠 Technologies Used

| Category | Tool / Library |
|---|---|
| UI | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 5 |
| Routing | React Router DOM v6 (HashRouter) |
| Styling | SCSS (BEM, mixins, variables) |
| State Management | React Context API |
| Linting | ESLint + Prettier + Stylelint |
| Deployment | GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- npm v9+

### 1. Installation

```bash
git clone https://github.com/Nazarii-Lesniak/advanced-react-phone-catalog.git
cd advanced-react-phone-catalog
```
### 2. Install dependencies:

```bash
npm install
```

### 3. Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run linters
npm run lint

# Format code
npm run format

# Format styles
npm run style-format
```

---

## 📄 License

This project is licensed under the [GPL-3.0 License](./LICENSE).
