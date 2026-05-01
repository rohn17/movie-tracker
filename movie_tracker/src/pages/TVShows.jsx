import useFetch from "../hooks/useFetch";
import TvCard from "../components/TvCard";

export default function TVShows() {
  const { data, loading } = useFetch("/tv/popular");

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.map((show) => (
        <TvCard key={show.id} show={show} />
      ))}
    </div>
  );
}