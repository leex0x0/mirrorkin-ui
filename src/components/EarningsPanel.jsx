import { completedTasks, earningsSummary } from "../data/mockData";
import { PanelHeader } from "./ChatPanel";

export default function EarningsPanel() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-void-700 bg-void-900/60 backdrop-blur">
      <PanelHeader title="Earnings" subtitle="Real + proof-of-work tasks" dotColor="bg-neon-green" />

      <div className="border-b border-void-700 px-4 py-4">
        <div className="text-xs uppercase tracking-wide text-gray-500">Total earned (real $)</div>
        <div className="font-display text-3xl font-bold text-neon-green">
          ${earningsSummary.totalEarnedUsd.toLocaleString()}
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {earningsSummary.totalProofOfWorkItems} proof-of-work items · {earningsSummary.activeScoutFinds} active leads
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {completedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

function TaskCard({ task }) {
  const isPaid = task.type === "paid";
  return (
    <div className="rounded-lg border border-void-700 bg-void-950/60 p-3">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-medium leading-snug text-gray-100">{task.title}</h4>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-mono ${
            isPaid
              ? "border-neon-green/40 bg-neon-green/10 text-neon-green"
              : "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan"
          }`}
        >
          {isPaid ? `+$${task.amount}` : "proof-of-work"}
        </span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{task.detail}</p>
      <div className="mt-2 text-xs text-gray-500">{task.date}</div>
    </div>
  );
}
