import "./styles.css";

export function CardMovie({ movie }) {
  return (
    <div className="div-card-movie">
      <div className="title-card-movie">
        <strong>{movie.name}</strong>
      </div>

      <div className="div-infos-card-movie">
        <div className="div-collum-infos-card-movie">
          <div className="div-info-card-movie">
            <strong className="title-info-card-movie">Categoria: </strong>
            <strong className="info-card-movie">{movie.category}</strong>
          </div>

          <div className="div-info-card-movie">
            <strong className="title-info-card-movie">Diretor: </strong>
            <strong className="info-card-movie">{movie.director}</strong>
          </div>
        </div>

        <div className="div-collum-infos-card-movie">
          <div className="div-info-card-movie">
            <strong className="title-info-card-movie">Ano: </strong>
            <strong className="info-card-movie">{movie.release_year}</strong>
          </div>

          <div className="div-info-card-movie">
            <strong className="title-info-card-movie">Avaliação: </strong>
            <strong className="info-card-movie">{movie.avaliation}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
