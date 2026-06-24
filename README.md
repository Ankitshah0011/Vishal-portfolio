# Premium Futuristic MERN Portfolio 2026

A world-class, production-ready portfolio website with a high-end design language inspired by Apple, Vercel, and Linear.

## ✨ Features
- **3D Interactive Background**: Powered by Three.js and React Three Fiber.
- **Premium Glassmorphism**: High-end UI with sophisticated transparency and blur.
- **Automated Info Extraction**: Upload your resume to auto-populate skills, contact info, and role.
- **GSAP & Framer Motion**: Ultra-smooth landing animations and scroll reveal effects.
- **Admin Dashboard**: Manage your content via a dedicated secure panel.
- **SEO Optimized**: Dynamic meta tags and clean semantic structure.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### 1. Server Setup
```bash
cd server
npm install
npm run dev # using nodemon
```
*Note: Ensure your MongoDB is running on localhost:27017 or update `.env`.*

### 2. Client Setup
```bash
cd client
npm install
npm run dev
```

### 3. Populating Content
1. Navigate to `http://localhost:5173/admin`.
2. Upload your **Resume (PDF)**.
3. The system will parse your name, email, phone, and skills, saving them to the database.
4. Refresh the home page to see your personalized content!

## 🛠 Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js, Lucide Icons.
- **Backend**: Node.js, Express, Mongoose, Multer, pdf-parse.
- **Database**: MongoDB.
