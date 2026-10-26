import { useState } from "react";
import { chatHistory } from "../data/mockData";

export default function ChatPanel() {
  const [messages, setMessages] = useState(chatHistory);
  const [draft, setDraft] = useState("");

  function handleSend(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const nextId = messages.length + 1;
    setMessages((prev) => [
      ...prev,
      { id: nextId, role: "human", text },
      {
        id: nextId + 1,
        role: "mirrorkin",
        text:
          "(demo mode — this reply is mocked. Wire this panel up to a real backend/LLM endpoint to get live responses.)",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-void-700 bg-void-900/60 backdrop-blur">
      <PanelHeader title="Chat" subtitle="Talk to your tiny twin" dotColor="bg-neon-cyan" />

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <ChatBubble key={m.id} role={m.role} text={m.text} />
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2 border-t border-void-700 p-3">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask Mirrorkin something…"
          className="flex-1 rounded-lg border border-void-700 bg-void-950 px-3 py-2 text-sm text-gray-200 outline-none placeholder:text-gray-500 focus:border-neon-cyan"
        />
        <button
          type="submit"
          className="rounded-lg bg-neon-cyan/90 px-4 py-2 text-sm font-semibold text-void-950 transition hover:bg-neon-cyan"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function ChatBubble({ role, text }) {
  const isHuman = role === "human";
  return (
    <div className={`flex ${isHuman ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
          isHuman
            ? "bg-neon-purple/20 text-gray-100 border border-neon-purple/30"
            : "bg-void-800 text-gray-200 border border-void-700"
        }`}
      >
        {!isHuman && (
          <div className="mb-1 text-xs font-mono font-semibold text-neon-cyan">mirrorkin</div>
        )}
        {text}
      </div>
    </div>
  );
}

export function PanelHeader({ title, subtitle, dotColor }) {
  return (
    <div className="flex items-center justify-between border-b border-void-700 px-4 py-3">
      <div>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse-glow`} />
          <h3 className="font-display text-sm font-semibold text-gray-100">{title}</h3>
        </div>
        {subtitle && <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}
