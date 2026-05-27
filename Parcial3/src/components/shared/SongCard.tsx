import type { ISong } from "../../interfaces/song.interface";

interface SongCardProps {
  song: ISong;
  position?: number;
}

export function SongCard({ song, position }: SongCardProps) {
  return (
    <article className="song-card">
      {position !== undefined && (
        <span className="song-card__position">#{position}</span>
      )}

      <img className="song-card__image" src={song.imageUrl} alt={song.title} />

      <div className="song-card__content">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>

      <div className="song-card__info">
        <span>{song.genre}</span>
        <strong>{song.popularity}</strong>
      </div>
    </article>
  );
}