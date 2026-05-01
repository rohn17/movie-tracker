# 🎬 MovieHub – Movie & TV Tracker App

A modern React-based web application that allows users to explore movies and TV shows, search content, view details, and manage a personalized watchlist.

---

## 🚀 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 📌 Features

* 🔍 Search movies & TV shows
* 🎞 Browse popular content
* 📄 View detailed movie/TV information
* ⭐ Add/remove items from Watchlist
* 🔐 Login system (local authentication)
* 📑 Protected routes (Watchlist requires login)
* 🎯 Genre filtering
* 📄 Pagination (Next / Prev)
* ⏳ Loading spinner (better UX)
* 💾 Persistent login using localStorage
* 📱 Fully responsive design

---

## 🛠 Tech Stack

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🔗 React Router DOM
* 🔥 Context API (Auth + Watchlist)
* 🎥 TMDB API
* 🍞 React Hot Toast

---

## 📁 Project Structure

```
src/
│── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── Loader.jsx
│   ├── ProtectedRoute.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── TVShows.jsx
│   ├── Details.jsx
│   ├── Watchlist.jsx
│   ├── Login.jsx
│
│── context/
│   ├── AuthContext.jsx
│   ├── WatchlistContext.jsx
│
│── hooks/
│   ├── useFetch.js
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/moviehub.git
cd moviehub
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Add Environment Variables

Create a `.env` file in the root:

```
VITE_API_KEY=your_tmdb_api_key
VITE_IMAGE_URL=https://image.tmdb.org/t/p/w500
```

---

### 4️⃣ Run the app

```
npm run dev
```

---

## 🌐 Deployment

This project is deployed on **Vercel**

### Steps:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy 🚀

---

## 🔐 Authentication

* Simple login using username
* Protected Watchlist route
* User session stored in localStorage

---

## 📸 Screenshots

(Add screenshots here for better presentation)

---

## 💡 Future Improvements

* 🎬 Trailer popup (YouTube API)
* 🌙 Dark/Light mode toggle
* ❤️ Save watchlist per user (backend)
* 🔄 Infinite scroll
* 🎨 UI animations (Framer Motion)

---

## 👨‍💻 Author

**Rohan Choudhary**

* GitHub: https://github.com/rohn17
* LinkedIn: https://www.linkedin.com/in/rohan-choudhary-a716b034b?utm_source=share_via&utm_content=profile&utm_medium=member_android

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

---
