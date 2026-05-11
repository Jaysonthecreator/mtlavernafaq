import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { chatWithLaverna } from "@/lib/chat.functions";
import { Send, Sparkles, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "How do I apply for admission?",
  "What are the school fees?",
  "Tell me about the uniform",
  "What time does school start?",
  "Is there bus transport?",
];

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hello! I'm the **Laverna Assistant** 🎓 — ask me anything about admissions, fees, curriculum, uniforms, transport, or activities at Mount Laverna School.",
};

export function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatFn = useServerFn(chatWithLaverna);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await chatFn({
        data: { messages: next.filter((m) => m !== WELCOME).slice(-12) },
      });
      const reply = res.error
        ? `_${res.error}_`
        : res.reply || "I didn't catch that — could you rephrase?";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "_Sorry, something went wrong. Please try again._" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden h-[600px] max-h-[80vh]">
      <header className="flex items-center gap-3 px-5 py-4 border-b border-border bg-primary text-primary-foreground">
        <div
          className="grid place-items-center w-10 h-10 rounded-full"
          style={{ background: "var(--gradient-gold)" }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-display text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Laverna Assistant
          </p>
          <p className="text-xs opacity-80">Online · Powered by AI</p>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-4 bg-muted/30">
        {messages.map((m, i) => (
          <Bubble key={i} msg={m} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin" /> Thinking…
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 px-4 py-3 border-t border-border bg-card"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about admissions, fees, transport…"
          className="flex-1 px-4 py-3 rounded-full bg-muted border border-transparent focus:border-ring focus:outline-none text-sm"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground disabled:opacity-50 hover:opacity-90 transition"
          aria-label="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-card border border-border rounded-bl-sm"
        }`}
      >
        {renderMarkdown(msg.content)}
      </div>
    </div>
  );
}

// Lightweight markdown — bold, italics, line breaks
function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_|\n)/g);
  return parts.map((p, i) => {
    if (p === "\n") return <br key={i} />;
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("_") && p.endsWith("_"))
      return <em key={i} className="opacity-80">{p.slice(1, -1)}</em>;
    return <span key={i}>{p}</span>;
  });
}