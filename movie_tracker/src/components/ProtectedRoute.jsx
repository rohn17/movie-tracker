import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
          message: "Please login to access Watchlist",
        }}
        replace
      />
    );
  }

  return children;
}