import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Fix: handle ? and &
        const url = endpoint.includes("?")
          ? `${BASE_URL}${endpoint}&api_key=${API_KEY}`
          : `${BASE_URL}${endpoint}?api_key=${API_KEY}`;

        const res = await fetch(url);
        const json = await res.json();

        setData(json.results || json);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;