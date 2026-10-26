import ChatPanel from "./ChatPanel";
import ScoutPanel from "./ScoutPanel";
import EarningsPanel from "./EarningsPanel";

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-100 sm:text-3xl">Dashboard</h2>
          <p className="mt-1 text-sm text-gray-500">
            Sample/mock data for now — this view is built to wire up to a real backend next.
          </p>
        </div>
        <span className="rounded-full border border-void-700 bg-void-900 px-3 py-1 text-xs font-mono text-gray-400">
          UI only · no backend yet
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="h-[520px] lg:col-span-1">
          <ChatPanel />
        </div>
        <div className="h-[520px] lg:col-span-1">
          <ScoutPanel />
        </div>
        <div className="h-[520px] lg:col-span-1">
          <EarningsPanel />
        </div>
      </div>
    </section>
  );
}
