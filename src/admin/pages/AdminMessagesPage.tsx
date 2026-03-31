import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import { Mail, MailOpen, Trash2 } from "lucide-react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);

  const load = () => {
    setLoading(true);
    adminApi.getMessages().then(setMessages).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const markRead = async (id: number) => {
    await adminApi.markMessageRead(id);
    load();
  };

  const deleteMsg = async (id: number) => {
    if (!confirm("Delete this message?")) return;
    await adminApi.deleteMessage(id);
    if (selected?.id === id) setSelected(null);
    load();
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-foreground mb-4">Messages</h1>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => {
                  setSelected(msg);
                  if (!msg.read) markRead(msg.id);
                }}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selected?.id === msg.id
                    ? "border-primary/30 bg-primary/[0.04]"
                    : msg.read
                      ? "border-secondary/20 bg-background-card/50 hover:border-secondary/40"
                      : "border-primary/20 bg-primary/[0.02] hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {msg.read ? (
                    <MailOpen className="w-3.5 h-3.5 text-muted-foreground" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  )}
                  <span className="text-xs font-semibold text-foreground">
                    {msg.firstName} {msg.lastName}
                  </span>
                  <span className="text-[0.6rem] text-muted-foreground ml-auto">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-[0.7rem] text-muted-foreground truncate">{msg.email}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{msg.message}</p>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">No messages yet.</p>
            )}
          </div>

          {selected && (
            <div className="bg-background-card/70 border border-secondary/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-foreground">
                  {selected.firstName} {selected.lastName}
                </h2>
                <button
                  onClick={() => deleteMsg(selected.id)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 text-xs">
                <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{selected.email}</span></div>
                <div><span className="text-muted-foreground">Phone:</span> <span className="text-foreground">{selected.phone || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Company:</span> <span className="text-foreground">{selected.company || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{selected.service || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Budget:</span> <span className="text-foreground">{selected.budget || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Date:</span> <span className="text-foreground">{new Date(selected.createdAt).toLocaleString()}</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/20">
                <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Message</h3>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
