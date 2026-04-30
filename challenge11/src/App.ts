import { SearchEngine } from "./SearchEngine";
import "./index.css";

const engine = new SearchEngine();

engine.insert("Botas de campo", 90);
engine.insert("Pantalon vaquero", 95);
engine.insert("air jordan", 85);
engine.insert("air force", 80);

const results = engine.searchTopK("air", 2);

console.log(results);