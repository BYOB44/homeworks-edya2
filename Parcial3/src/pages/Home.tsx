import { Header } from "../components/shared/Header";
import { SearchPanel } from "../components/shared/search/SearchPanel";
import { RankingPanel } from "../components/shared/ranking/RankingPanel";
import { RecommendationsPanel } from "../components/shared/recommendations/RecommendationsPanel";

export function Home() {
  return (
    <main className="app-container">
      <Header />

      <section className="dashboard">
        <SearchPanel />
        <RankingPanel />
        <RecommendationsPanel />
      </section>
    </main>
  );
}