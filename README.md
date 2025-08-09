Project name: FoodCircle

# FoodCircle — Community Food Sharing Platform

**FoodCircle** is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to reduce food waste and foster community engagement by enabling users to share and request surplus food in their local communities.

---

## 🎯 Purpose

The purpose of the FoodCircle project is to reduce food waste and foster community engagement through a digital platform that enables people to share surplus food.

In many households and communities, perfectly edible food is discarded due to over-purchasing, events, or lack of access. FoodCircle addresses this problem by:

- 🥡 Creating a space where users can share extra food instead of wasting it  
- 🧑‍🤝‍🧑 Enabling those in need to easily request and receive food  
- 🏘️ Encouraging local collaboration and mutual support within neighborhoods  
- 🌱 Promoting sustainable living practices by minimizing food surplus  

> Ultimately, FoodCircle aims to build a compassionate, eco-conscious community where technology bridges the gap between excess and need.

---

## 🌐 Live URL : https://foodcircle-ph-eleven.netlify.app/


---

## 🌟 Key Features

- 🔐 User Authentication (Email/Password + Google Login via Firebase)
- 📦 Post surplus food with title, description, image, and quantity
- 🤝 Request shared food items with status tracking
- 🧾 Manage personal shared items and food requests
- 🔍 Search and filter food items by keywords
- 🌗 Full-featured Dark/Light mode toggle
- 🤖 AI Food Freshness Analyzer using Teachable Machine + Cloudinary
- 🧪 React Query's `useMutation` used for optimized Add Food operations
- 🔐 Axios Secure Hook integrated for authenticated data operations
- 📱 Fully responsive design (mobile-first)

---

## 🛠️ Tech Stack

### 🚀 Frontend

- **React.js** (Vite-based)
- **Tailwind CSS** for clean and modern styling
- **React Router DOM** for routing and navigation
- **Firebase Authentication** for secure login via email/password and Google
- **SweetAlert2** for user-friendly alerts and confirmations
- **Teachable Machine + TensorFlow.js** for image-based AI food analysis
- **React Query (TanStack Query)** for data fetching & mutations  
  - `useMutation` used in `AddFood` for form submission
- **Axios Secure Custom Hook** for token-based API access in:  
  - `AddFood`, `FoodDetails`, `ManageMyFoods`, `MyFoodRequest`, `UpdateFoodInfo`


### 🧩 Backend

- **Node.js + Express.js** for RESTful API server
- **MongoDB + Mongoose** for flexible document-based data storage
- **JWT (JSON Web Tokens)** for secure protected route access

---

## 📦 Frontend NPM Packages Used

### 🔧 Core Libraries

- `react`
- `react-dom`
- `react-router`
- `react-router-dom`
- `@tanstack/react-query`
- `axios`

### 🎨 Styling & Animation

- `tailwindcss`
- `@tailwindcss/vite`
- `daisyui`
- `framer-motion`
- `swiper`
- `react-icons`
- `lucide-react`
- `lottie-react`

### 🔐 Authentication & Utilities

- `firebase`
- `js-cookie`

### 🤖 AI & Image Processing

- `@teachablemachine/image`
- `@tensorflow/tfjs`
- `react-dropzone`
- `react-intersection-observer`

### 💬 Alerts & UI Enhancements

- `sweetalert2`
- `sweetalert2-react-content`

---

## 🛠️ Dev Dependencies

- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `@types/react`
- `@types/react-dom`
- `globals`

---

## 🚀 Backend NPM Packages Used

### 📦 Core Server & Middleware

- `express` – Fast, unopinionated web framework for Node.js
- `cors` – Enable Cross-Origin Resource Sharing
- `cookie-parser` – Parse Cookie header and populate req.cookies
- `dotenv` – Load environment variables from `.env` file

### 🔐 Authentication & Security

- `bcrypt` – Password hashing for secure storage
- `jsonwebtoken` – Sign and verify JSON Web Tokens (JWT)

### 🗄️ Database

- `mongodb` – Native MongoDB driver for Node.js

### 🔄 Development Utility

- `nodemon` – Automatically restart the server during development

---

## 📸 AI Model Setup (Optional but Recommended)

1. Create a model using [Teachable Machine](https://teachablemachine.withgoogle.com/)
2. Export the model as **TensorFlow.js - Web** format
3. Place the full exported model folder inside the frontend `public/model/` directory:

```bash
/public/model/model.json
/public/model/metadata.json
```

---

## 📷 Food Analyzer (AI Feature)

- Upload an image of the food  
- System uploads it to **Cloudinary**  
- Once uploaded, the image is passed to a **Teachable Machine** model  
- The model predicts freshness, showing results like:
  - ✅ *Food seems fresh (~2-3 days remaining)*
  - ❌ *Spoilage detected — do not consume!*

---

## 📱 Responsive UI

- Mobile-friendly layout using Tailwind's responsive utilities
- Dark/Light theme toggle button in the Navbar (context-based + localStorage persistence)

---

## 📬 Contact

For questions, collaboration, or feedback:  
📧 **jakir.devbd@gmail.com**

---

> 💚 Together, let's build a world with less food waste and more community sharing.

