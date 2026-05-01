import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import TVShows from "./pages/TVShows.jsx";
import Details from "./pages/Details.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Login from "./pages/Login.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black text-white">
        
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVShows />} />
            <Route path="/:type/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />

            {/* 🔐 Protected Watchlist */}
            <Route
              path="/watchlist"
              element={
                <ProtectedRoute>
                  <Watchlist />
                </ProtectedRoute>
              }
            />

            {/* ❌ 404 Page */}
            <Route
              path="*"
              element={
                <div className="text-center mt-20">
                  <h1 className="text-3xl font-bold">404 ❌</h1>
                  <p className="mt-2 text-gray-400">
                    Page not found
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}