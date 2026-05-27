import type { ISong } from "../../../interfaces/song.interface";

interface SuggestionsListProps {
  suggestions: ISong[];
  onSelectSong: (song: ISong) => void;
}

export function SuggestionsList({
  suggestions,
  onSelectSong,
}: SuggestionsListProps) {
  if (suggestions.length === 0) {
    return <p className="empty-text">No hay sugerencias para este prefijo.</p>;
  }

  return (
    <ul className="suggestions-list">
      {suggestions.map((song: ISong) => (
        <li key={song.id}>
          <button type="button" onClick={() => onSelectSong(song)}>
            <img src={song.imageUrl} alt={song.title} />
            <div>
              <span>{song.title}</span>
              <small>{song.artist}</small>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}