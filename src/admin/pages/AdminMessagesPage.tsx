import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import { Download, Mail, MailOpen, Trash2 } from "lucide-react";
import { toast } from "sonner";

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

  const exportCsv = () => {
    if (!messages.length) {
      toast.error("No submissions available to export.");
      return;
    }

    const headers = [
      "id",
      "source",
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "country",
      "service",
      "budget",
      "privacyAccepted",
      "cookieConsentAccepted",
      "read",
      "createdAt",
      "message",
    ];

    const escapeCsv = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const rows = messages.map((msg) => headers.map((header) => escapeCsv(msg[header])).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ardtechlabs-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
    toast.success("CSV export downloaded.");
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-lg font-bold text-foreground">Messages & Leads</h1>
        <button
          onClick={exportCsv}
          className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/15"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

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
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider text-primary">
                    {msg.source || "contact"}
                  </span>
                  <span className="text-[0.6rem] text-muted-foreground ml-auto">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-[0.65rem] text-muted-foreground truncate">{msg.company || msg.country || "No company / country provided"}</p>
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
                <div><span className="text-muted-foreground">Source:</span> <span className="text-foreground capitalize">{selected.source || "contact"}</span></div>
                <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{selected.email}</span></div>
                <div><span className="text-muted-foreground">Phone:</span> <span className="text-foreground">{selected.phone || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Company:</span> <span className="text-foreground">{selected.company || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Country:</span> <span className="text-foreground">{selected.country || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{selected.service || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Budget:</span> <span className="text-foreground">{selected.budget || "N/A"}</span></div>
                <div><span className="text-muted-foreground">Privacy Accepted:</span> <span className="text-foreground">{selected.privacyAccepted ? "Yes" : "No"}</span></div>
                <div><span className="text-muted-foreground">Cookie Consent:</span> <span className="text-foreground">{selected.cookieConsentAccepted ? "Yes" : "No"}</span></div>
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
