import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMusicContext } from "../../../context/MusicContext";
import type { ISong } from "../../../interfaces/song.interface";
import { SuggestionsList } from "./SuggestionList";

export function SearchPanel() {
  const { searchSong, getSuggestions } = useMusicContext();

  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");

  const suggestions: ISong[] = getSuggestions(query).slice(0, 5);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setQuery(value);
    setSearchResult("");
  };

  const handleSearch = (): void => {
    if (query.trim().length === 0) {
      setSearchResult("Escribe el nombre de una canción.");
      return;
    }

    const exists: boolean = searchSong(query);

    if (exists) {
      setSearchResult("La canción existe en la plataforma.");
    } else {
      setSearchResult("La canción no fue encontrada.");
    }
  };

  const handleSelectSong = (song: ISong): void => {
    setQuery(song.title);
    setSearchResult("Canción seleccionada desde el Trie.");
  };

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Buscador predictivo</h2>
        <span>Trie</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar canción..."
          value={query}
          onChange={handleChange}
        />

        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {query.trim().length > 0 && (
        <SuggestionsList
          suggestions={suggestions}
          onSelectSong={handleSelectSong}
        />
      )}

      {searchResult.length > 0 && (
        <p className="result-message">{searchResult}</p>
      )}
    </section>
  );
}