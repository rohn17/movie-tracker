import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Add item (no duplicates)
  const addToWatchlist = (item) => {
    const exists = watchlist.find((i) => i.id === item.id);

    if (exists) {
      toast.error("Already in Watchlist!");
      return;
    }

    setWatchlist((prev) => [...prev, item]);
    toast.success("Added to Watchlist!");
  };

  // Remove item
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from Watchlist!");
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};