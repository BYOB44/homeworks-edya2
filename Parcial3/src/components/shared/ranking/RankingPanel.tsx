import { useMusicContext } from "../../../context/MusicContext";
import type { ISong } from "../../../interfaces/song.interface";
import { SongCard } from "../SongCard";

export function RankingPanel() {
  const { getTopSongs } = useMusicContext();

  const topSongs: ISong[] = getTopSongs(5);

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Top canciones populares</h2>
        <span>Max Heap</span>
      </div>

      <div className="song-list">
        {topSongs.map((song: ISong, index: number) => (
          <SongCard key={song.id} song={song} position={index + 1} />
        ))}
      </div>
    </section>
  );
}