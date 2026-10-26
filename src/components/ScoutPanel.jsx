import { scoutFinds, statusStyles } from "../data/mockData";
import { PanelHeader } from "./ChatPanel";

export default function ScoutPanel() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-void-700 bg-void-900/60 backdrop-blur">
      <PanelHeader
        title="Scout finds"
        subtitle="Gigs & bounties found this week"
        dotColor="bg-neon-purple"
      />

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {scoutFinds.map((find) => (
          <ScoutCard key={find.id} find={find} />
        ))}
      </div>
    </div>
  );
}

function ScoutCard({ find }) {
  const badgeClass =
    statusStyles[find.status] ?? "bg-void-700 text-gray-300 border-void-700";

  return (
    <div className="rounded-lg border border-void-700 bg-void-950/60 p-3 transition hover:border-neon-purple/50">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-medium leading-snug text-gray-100">{find.title}</h4>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-void-800 px-2 py-0.5 font-mono text-neon-green">
          {find.payout}
        </span>
        <span className="text-gray-500">due {find.due}</span>
        <span className={`ml-auto rounded-full border px-2 py-0.5 ${badgeClass}`}>
          {find.status}
        </span>
      </div>
    </div>
  );
}
