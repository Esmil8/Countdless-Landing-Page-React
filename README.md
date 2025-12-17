# 🌟 Countdless Landing Page

A minimalist, conversion-focused landing page built with **React + TypeScript + TailwindCSS**.  
Its main goal is to clearly present the value proposition and collect sign-ups through a simple and accessible form.

---

## 🚀 Technologies Used

- **React + Vite**
- **TypeScript**
- **TailwindCSS**
- **React Hooks (useState, useEffect)**
- Accessible and optimized HTML

---

## 🎨 Main Features

- Clean, CTA-centered design.
- Light/Dark Mode controlled through global state.
- Form validated using HTML5 + additional React logic.
- Modular components:  
  - Header  
  - NavBar  
  - Hero  
  - Features
  - Testimonials
  - CTA  
  - Footer  
  - Form1  
- Smooth animations powered by Tailwind.
- Fully responsive layout.

---

## 🌓 Dark Mode (Implementation)

The global `darkMode` state is defined in `App.tsx` and passed down to components via props.  
It also syncs with the `<body>` element using `useEffect`.


## Add backend API Consumption

--Fetch to Backend to save information 18/12/2025

--CORS Configuration: Secure communication established between localhost:5173 (Frontend) and localhost:3000 (Backend).

--Strict Typing: Integrate Typescript interface (SubmitResponse, UserEntity) to ensure data integry beetweet frontend and backend

--API Endpoint: POST http://localhost:3000/coundless/submit

