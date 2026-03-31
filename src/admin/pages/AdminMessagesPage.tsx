import { useEffect, useMemo, useState } from "react";
import { adminApi } from "@/services/api";
import { Download, Mail, MailOpen, Trash2 } from "lucide-react";

type FilterType = "all" | "unread" | "free-trial" | "contact";

const isTrial = (msg: any) =>
  String(msg?.service || "").toLowerCase().includes("free trial") ||
  String(msg?.message || "").includes("[Free Trial Request]");

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

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

  const filteredMessages = useMemo(() => messages.filter((msg) => {
    if (filter === "unread") return !msg.read;
    if (filter === "free-trial") return isTrial(msg);
    if (filter === "contact") return !isTrial(msg);
    return true;
  }), [messages, filter]);

  const exportCsv = () => {
    const rows = [
      ["id", "type", "firstName", "lastName", "email", "phone", "company", "service", "budget", "message", "read", "createdAt"],
      ...filteredMessages.map((m) => [
        m.id,
        isTrial(m) ? "TRIAL" : "CONTACT",
        m.firstName || "",
        m.lastName || "",
        m.email || "",
        m.phone || "",
        m.company || "",
        m.service || "",
        m.budget || "",
        (m.message || "").replace(/\n/g, " "),
        m.read ? "true" : "false",
        m.createdAt || "",
      ]),
    ];
    const csv = rows.map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `messages-${filter}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-foreground">Messages</h1>
        <button onClick={exportCsv} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-secondary/30 hover:border-primary/40">
          <Download className="w-3.5 h-3.5" /> Export CSV
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {[{k:"all",l:"All"},{k:"unread",l:"Unread"},{k:"free-trial",l:"Free Trial"},{k:"contact",l:"Contact"}].map((f) => (
          <button key={f.k} onClick={() => setFilter(f.k as FilterType)} className={`text-xs px-3 py-1.5 rounded-md border ${filter===f.k ? "bg-primary text-primary-foreground border-primary" : "border-secondary/30 text-muted-foreground"}`}>
            {f.l}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {filteredMessages.map((msg) => (
              <div key={msg.id} onClick={() => { setSelected(msg); if (!msg.read) markRead(msg.id); }} className={`p-3 rounded-xl border cursor-pointer transition-all ${selected?.id === msg.id ? "border-primary/30 bg-primary/[0.04]" : msg.read ? "border-secondary/20 bg-background-card/50" : "border-primary/20 bg-primary/[0.02]"}`}>
                <div className="flex items-center gap-2 mb-1">
                  {msg.read ? <MailOpen className="w-3.5 h-3.5 text-muted-foreground" /> : <Mail className="w-3.5 h-3.5 text-primary" />}
                  <span className="text-xs font-semibold text-foreground">{msg.firstName} {msg.lastName}</span>
                  {isTrial(msg) && <span className="text-[0.58rem] font-bold bg-green-500/15 text-green-400 px-1.5 py-0.5 rounded">TRIAL</span>}
                  <span className="text-[0.6rem] text-muted-foreground ml-auto">{new Date(msg.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-[0.7rem] text-muted-foreground truncate">{msg.email}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{msg.message}</p>
              </div>
            ))}
            {filteredMessages.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No messages found.</p>}
          </div>

          {selected && (
            <div className="bg-background-card/70 border border-secondary/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-foreground">{selected.firstName} {selected.lastName}</h2>
                <button onClick={() => deleteMsg(selected.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2 text-xs">
                <div><span className="text-muted-foreground">Type:</span> <span className="text-foreground">{isTrial(selected) ? "Free Trial" : "Contact"}</span></div>
                <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{selected.email}</span></div>
                <div><span className="text-muted-foreground">Phone:</span> <span className="text-foreground">{selected.phone || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Company:</span> <span className="text-foreground">{selected.company || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{selected.service || "N/A"}</span></div>
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
