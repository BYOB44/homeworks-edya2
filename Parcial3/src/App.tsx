import { MusicProvider } from "./context/MusicContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <MusicProvider>
      <Home />
    </MusicProvider>
  );
}

export default App;