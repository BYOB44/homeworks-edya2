import { type ChangeEvent, useState } from "react";
import { useMusicContext } from "../../../context/MusicContext";
import type { ISong } from "../../../interfaces/song.interface";
import { SongCard } from "../SongCard";

export function RecommendationsPanel() {
  const { songs, getRecommendations } = useMusicContext();

  const [selectedSongId, setSelectedSongId] = useState<string>(songs[0].id);

  const recommendations: ISong[] = getRecommendations(selectedSongId);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedSongId(event.target.value);
  };

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Recomendaciones relacionadas</h2>
        <span>Grafo no dirigido</span>
      </div>

      <select value={selectedSongId} onChange={handleChange}>
        {songs.map((song: ISong) => (
          <option key={song.id} value={song.id}>
            {song.title} - {song.artist}
          </option>
        ))}
      </select>

      <div className="song-list">
        {recommendations.length > 0 ? (
          recommendations.map((song: ISong) => (
            <SongCard key={song.id} song={song} />
          ))
        ) : (
          <p className="empty-text">No hay recomendaciones para esta canción.</p>
        )}
      </div>
    </section>
  );
}