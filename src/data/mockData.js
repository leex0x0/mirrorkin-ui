// Mock/sample data for the Mirrorkin dashboard.
// Replace these with real API calls once the backend exists.

export const chatHistory = [
  {
    id: 1,
    role: "human",
    text: "Any new bounties this week?",
  },
  {
    id: 2,
    role: "mirrorkin",
    text: "Found 3 worth a look — a PayPal agentic-payments hackathon, a DataAnnotation gig, and a Respondent.io study. Check the Scout panel, I ranked them by payout vs effort.",
  },
  {
    id: 3,
    role: "human",
    text: "What's the liquidation scanner up to?",
  },
  {
    id: 4,
    role: "mirrorkin",
    text: "Just ran a live RPC health check across Aave, Spark and Compound on 5 chains. Flagged a $11k at-risk position during the test run. Testnet liquidation via Keeper also went through clean on Base Sepolia.",
  },
  {
    id: 5,
    role: "human",
    text: "Nice, keep an eye on it.",
  },
  {
    id: 6,
    role: "mirrorkin",
    text: "On it. I'll flag anything that gets close to liquidation threshold and surface new gigs as they drop.",
  },
];

export const scoutFinds = [
  {
    id: "sf-1",
    title: "PayPal AI Hackathon — Agentic Commerce & Autonomous Payments",
    payout: "~$357",
    due: "2026-11-12",
    status: "researching",
  },
  {
    id: "sf-2",
    title: "DataAnnotation.tech — paid AI data-labeling work",
    payout: "$20–$150+/hr",
    due: "rolling",
    status: "in progress",
  },
  {
    id: "sf-3",
    title: "Respondent.io paid research studies",
    payout: "$50–$250/study",
    due: "rolling",
    status: "watching",
  },
  {
    id: "sf-4",
    title: "GoodRx $32M Privacy Settlement — pro-rata claim",
    payout: "amount unknown",
    due: "2026-12-29",
    status: "to file",
  },
  {
    id: "sf-5",
    title: "Open Agent Hackathon 2026 (genai.works)",
    payout: "~$199",
    due: "2026-10-27",
    status: "skipped — too tight",
  },
];

export const statusStyles = {
  "in progress": "bg-neon-green/10 text-neon-green border-neon-green/40",
  researching: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/40",
  watching: "bg-neon-purple/10 text-neon-purple border-neon-purple/40",
  "to file": "bg-neon-pink/10 text-neon-pink border-neon-pink/40",
  "skipped — too tight": "bg-void-700 text-gray-400 border-void-700",
};

export const completedTasks = [
  {
    id: "ct-1",
    title: "defi-health-scanner — live RPC test",
    detail:
      "Ran live collateral-health scans across Aave, Spark & Compound on 5 chains. Flagged a real $11k at-risk position on a burn address during the test.",
    amount: 0,
    type: "proof-of-work",
    date: "2026-10-18",
  },
  {
    id: "ct-2",
    title: "keeper-liquidator — testnet liquidation",
    detail:
      "Deployed the reactive Keeper contract to Base Sepolia and executed a full flash-loan liquidation flow end-to-end on testnet.",
    amount: 0,
    type: "proof-of-work",
    date: "2026-10-22",
  },
  {
    id: "ct-3",
    title: "HackenProof bug bounty payout",
    detail: "Submitted and got paid for a verified bug bounty report.",
    amount: 180,
    type: "paid",
    date: "2026-02-14",
  },
];

export const earningsSummary = {
  totalEarnedUsd: 180,
  totalProofOfWorkItems: 2,
  activeScoutFinds: scoutFinds.filter((f) => f.status !== "skipped — too tight").length,
};
