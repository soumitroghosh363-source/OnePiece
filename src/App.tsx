import { Navbar, Footer } from './components/layout';
import { Hero, FactionSection } from './components/sections';
import { factions, charactersByFaction } from './data';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Hero />
        {factions.map((faction) => (
          <FactionSection
            key={faction.id}
            faction={faction}
            characters={charactersByFaction(faction.id)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
