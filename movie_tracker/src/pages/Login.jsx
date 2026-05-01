import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("Please enter username and password");
      return;
    }

    // 🔐 Simple demo validation
    if (password.length < 4) {
      toast.error("Password must be at least 4 characters");
      return;
    }

    if (loading) return;

    setLoading(true);

    // simulate login
    login(username);

    toast.success("Login successful!");

    setTimeout(() => {
      navigate(from, { replace: true });
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          🔐 Login
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter username"
          className="w-full p-3 mb-4 rounded text-black outline-none focus:ring-2 ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-4 rounded text-black outline-none focus:ring-2 ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Demo: Any username + password (min 4 chars)
        </p>
      </form>
    </div>
  );
}