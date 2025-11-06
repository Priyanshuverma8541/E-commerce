# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



problem ----
🧩 Hash Scroll Handling (Problem & Solution)

Problem:
When navigating to routes like /legal#report, React Router didn’t auto-scroll to the section with id="report" because it doesn’t handle hash anchors by default.

Solution:
Created a small helper component ScrollToHashElement.jsx using useLocation and useEffect that listens for hash changes and smoothly scrolls to the target element.

Usage:
Imported and used <ScrollToHashElement /> inside App.jsx to enable smooth scrolling for routes like /legal#report or /about#team.

Result:
Now, clicking any hash link (e.g., /legal#privacy, /about#mission) automatically scrolls to the respective section with smooth animation.