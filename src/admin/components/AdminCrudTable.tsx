import { useState } from "react";
import { Pencil, Trash2, Plus, X, Save } from "lucide-react";

interface Column {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "boolean" | "select";
  options?: string[];
  render?: (value: any, row: any) => React.ReactNode;
}

interface AdminCrudTableProps {
  title: string;
  data: any[];
  columns: Column[];
  onSave: (item: any) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  loading?: boolean;
}

export default function AdminCrudTable({ title, data, columns, onSave, onDelete, loading }: AdminCrudTableProps) {
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  const openNew = () => {
    const empty: any = {};
    columns.forEach((c) => {
      if (c.type === "boolean") empty[c.key] = true;
      else if (c.type === "number") empty[c.key] = 0;
      else empty[c.key] = "";
    });
    setEditingItem(empty);
    setIsNew(true);
  };

  const openEdit = (item: any) => {
    setEditingItem({ ...item });
    setIsNew(false);
  };

  const handleSave = async () => {
    if (!editingItem) return;
    setSaving(true);
    try {
      await onSave(editingItem);
      setEditingItem(null);
    } catch (err) {
      console.error("Save error:", err);
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    await onDelete(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-foreground">{title}</h1>
        <button
          onClick={openNew}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-primary-foreground transition-all hover:-translate-y-0.5"
          style={{ background: "var(--gradient-orange)" }}
        >
          <Plus className="w-3.5 h-3.5" /> Add New
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-secondary/20">
                <th className="text-left px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                {columns.filter(c => c.key !== "id").slice(0, 4).map((col) => (
                  <th key={col.key} className="text-left px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {col.label}
                  </th>
                ))}
                <th className="text-right px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-secondary/10 hover:bg-foreground/[0.02] transition-colors">
                  <td className="px-3 py-2.5 text-xs text-muted-foreground">{item.id}</td>
                  {columns.filter(c => c.key !== "id").slice(0, 4).map((col) => (
                    <td key={col.key} className="px-3 py-2.5 text-xs text-foreground max-w-[200px] truncate">
                      {col.render ? col.render(item[col.key], item) : (
                        col.type === "boolean" ? (
                          <span className={`px-2 py-0.5 rounded text-[0.65rem] font-semibold ${item[col.key] ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                            {item[col.key] ? "Active" : "Inactive"}
                          </span>
                        ) : String(item[col.key] ?? "")
                      )}
                    </td>
                  ))}
                  <td className="px-3 py-2.5 text-right">
                    <button
                      onClick={() => openEdit(item)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors inline-flex"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors inline-flex ml-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1} className="px-3 py-8 text-center text-sm text-muted-foreground">
                    No items found. Click "Add New" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit/Create Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4" onClick={() => setEditingItem(null)}>
          <div
            className="bg-background-alt border border-secondary/20 rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-foreground">
                {isNew ? "Create New" : "Edit"} {title.replace(/s$/, "")}
              </h2>
              <button onClick={() => setEditingItem(null)} className="p-1 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {columns.filter(c => c.key !== "id").map((col) => (
                <div key={col.key}>
                  <label className="block text-[0.68rem] font-semibold text-muted-foreground tracking-widest uppercase mb-1">
                    {col.label}
                  </label>
                  {col.type === "textarea" ? (
                    <textarea
                      value={editingItem[col.key] ?? ""}
                      onChange={(e) => setEditingItem({ ...editingItem, [col.key]: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary focus:bg-primary/[0.04] resize-none"
                    />
                  ) : col.type === "boolean" ? (
                    <button
                      onClick={() => setEditingItem({ ...editingItem, [col.key]: !editingItem[col.key] })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        editingItem[col.key]
                          ? "bg-green-500/10 text-green-400 border border-green-500/30"
                          : "bg-red-500/10 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {editingItem[col.key] ? "Active" : "Inactive"}
                    </button>
                  ) : col.type === "select" ? (
                    <select
                      value={editingItem[col.key] ?? ""}
                      onChange={(e) => setEditingItem({ ...editingItem, [col.key]: e.target.value })}
                      className="w-full px-3 py-2 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary"
                    >
                      <option value="">Select...</option>
                      {col.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={col.type === "number" ? "number" : "text"}
                      value={editingItem[col.key] ?? ""}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          [col.key]: col.type === "number" ? Number(e.target.value) : e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary focus:bg-primary/[0.04]"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-5 justify-end">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-50"
                style={{ background: "var(--gradient-orange)" }}
              >
                <Save className="w-3.5 h-3.5" />
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
