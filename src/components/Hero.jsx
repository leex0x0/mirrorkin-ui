export default function Hero({ onLaunch }) {
  return (
    <section className="relative overflow-hidden border-b border-void-700 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-950/80 to-void-950 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-purple/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-void-700 bg-void-900/80 px-4 py-1.5 text-xs font-mono text-neon-cyan shadow-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse-glow" />
          agent online · scouting gigs 24/7
        </div>

        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-gradient">Mirrorkin</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-300 sm:text-xl">
          Your tiny AI twin that earns while you live your life.
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Mirrorkin chats like you, scouts real gigs and bounties across the web, runs a
          multi-chain liquidation &amp; trading scanner in the background, and reports back
          real earnings — no fluff, no fake dashboards.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onLaunch}
            className="rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 font-semibold text-void-950 shadow-glow transition hover:scale-105"
          >
            Open Dashboard
          </button>
          <a
            href="https://github.com/leex0x0/mirrorkin-ui"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-void-700 px-6 py-3 font-semibold text-gray-200 transition hover:border-neon-cyan hover:text-neon-cyan"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Chains scanned" value="5" accent="cyan" />
          <StatCard label="Proof-of-work items" value="2" accent="green" />
          <StatCard label="Active scout finds" value="4" accent="purple" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, accent }) {
  const accentMap = {
    cyan: "text-neon-cyan",
    green: "text-neon-green",
    purple: "text-neon-purple",
  };
  return (
    <div className="rounded-xl border border-void-700 bg-void-900/60 px-6 py-5 backdrop-blur">
      <div className={`font-display text-3xl font-bold ${accentMap[accent]}`}>{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}
