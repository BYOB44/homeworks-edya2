import { useState, useRef } from "react";
import { SearchEngine } from "./SearchEngine";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const engineRef = useRef<SearchEngine | null>(null);

  if (!engineRef.current) {
    engineRef.current = new SearchEngine();
    engineRef.current.insert("Botas de campo", 90);
    engineRef.current.insert("Pantalon vaquero", 95);
    engineRef.current.insert("air jordan", 85);
    engineRef.current.insert("air force", 80);
  }

  const handleSearch = (value: string) => {
    if (!engineRef.current) return;
    const res = engineRef.current.searchTopK(value, 3);
    setResults(res);
  };

  return (
    <div className="container">
      <h1>Smart Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            handleSearch(value); // 🔥 búsqueda en tiempo real
          }}
        />
      </div>

      <ul>
        {results.map((p, index) => (
          <li key={index}>
            <span>{p.name}</span>
            <span className="score">⭐ {p.popularity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;