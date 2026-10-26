import { useRef } from "react";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";

function App() {
  const dashboardRef = useRef(null);

  function scrollToDashboard() {
    dashboardRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-void-950 text-gray-100">
      <header className="sticky top-0 z-20 border-b border-void-700 bg-void-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="text-gradient">Mirrorkin</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-gray-400">
            <button onClick={scrollToDashboard} className="transition hover:text-neon-cyan">
              Dashboard
            </button>
            <a
              href="https://github.com/leex0x0/mirrorkin-ui"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neon-cyan"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <Hero onLaunch={scrollToDashboard} />

      <div ref={dashboardRef}>
        <Dashboard />
      </div>

      <footer className="border-t border-void-700 py-8 text-center text-xs text-gray-500">
        Mirrorkin — built by tiny Lydia. UI only, no backend yet. Sample data shown above.
      </footer>
    </div>
  );
}

export default App;
