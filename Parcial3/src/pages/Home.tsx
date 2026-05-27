import { Header } from "../components/shared/Header";
import { SearchPanel } from "../components/shared/search/searchPanel";
import { RankingPanel } from "../components/shared/ranking/RankingPanel";
import { RecommendationsPanel } from "../components/shared/recommendations/RecommendationsPanel";
import { AddSongForm } from "../components/shared/addsong/AddSongForm";

export function Home() {
  return (
    <main className="app-container">
      <Header />

      <section className="dashboard">
        <SearchPanel />
        <RankingPanel />
        <RecommendationsPanel />
        <AddSongForm />
      </section>
    </main>
  );
}