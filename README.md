
# FoodCircle — Community Food Sharing Platform

**FoodCircle** is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to promote **community food sharing** and reduce surplus food waste. The platform empowers users to share extra food, request items from others, and manage their contributions—all through an intuitive and responsive web interface.

---

## 🌟 Features

- 🔐 User Authentication (Email/Password + Google Login via Firebase)
- 📦 Post surplus food with title, description, image, and quantity
- 🤝 Request shared food items with status tracking
- 🧾 Manage personal shared items and food requests
- 🔍 Search and filter food items by keywords
- 🌗 Full-featured Dark/Light mode toggle
- 🤖 AI Food Freshness Analyzer using Teachable Machine + Cloudinary
- 🍞 Breadcrumb navigation using Mamba UI
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
- **Mamba UI Breadcrumb** for better navigation UX

### 🧩 Backend

- **Node.js + Express.js** for RESTful API server
- **MongoDB + Mongoose** for flexible document-based data storage
- **JWT (JSON Web Tokens)** for secure protected route access

---

## 📸 AI Model Setup (Optional but Recommended)

1. Create a model using [Teachable Machine](https://teachablemachine.withgoogle.com/).
2. Export the model as **TensorFlow.js - Web** format.
3. Place the full exported model folder inside the frontend `public/model/` directory:

```

## 📷 Food Analyzer (AI Feature)

- Upload an image of the food.
- System uploads it to **Cloudinary**.
- Once uploaded, the image is passed to a **Teachable Machine** model.
- The model predicts freshness, showing results like:
  - ✅ *Food seems fresh (~2-3 days remaining)*
  - ❌ *Spoilage detected — do not consume!*

---

## 📱 Responsive UI

- Mobile-friendly layout using Tailwind's responsive utilities.
- Dark/Light theme toggle button in the Navbar (context-based + localStorage persistence).

---

## 📬 Contact

For questions, collaboration, or feedback:  
**📧 jakir.devbd@gmail.com**

---

> Together, let's build a world with less food waste and more community sharing. 💚
