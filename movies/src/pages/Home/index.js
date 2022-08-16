import { useEffect, useState } from "react";
import { CardMovie } from "../../components/CardMovie";
import { api } from "../../services/api";

import "./styles.css";

export function Home() {
  const [movies, setMovies] = useState([]);

  async function handleGetMovies() {
    try {
      const { data } = await api.get("movies");
      setMovies(data);
    } catch ({ response }) {
      alert(response.data);
    }
  }

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <div className="div-home-page">
      <div className="div-title-home-page">
        <strong className="title-home-page title1-home-page">Series</strong>
        <strong className="title-home-page title2-home-page">and</strong>
        <strong className="title-home-page title1-home-page">Movie</strong>
      </div>

      <section className="section-home-page">
        {movies.map((item, key) => (
          <CardMovie key={key} movie={item} />
        ))}
      </section>
    </div>
  );
}
