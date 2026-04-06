import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
  { key: "sector", label: "Sector", type: "text" as const },
  { key: "gradient", label: "Gradient", type: "text" as const },
  { key: "emoji", label: "Emoji", type: "text" as const },
  {
    key: "metrics",
    label: "Metrics (JSON)",
    type: "textarea" as const,
    render: (value: any) => <pre className="text-xs bg-foreground/5 p-2 rounded whitespace-pre-wrap">{JSON.stringify(value, null, 2)}</pre>,
  },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminCaseStudiesPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("case-studies").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    // The metrics field might be a string, so we need to parse it
    if (typeof item.metrics === 'string') {
      try {
        item.metrics = JSON.parse(item.metrics);
      } catch (e) {
        console.error("Error parsing metrics JSON:", e);
        // Handle error appropriately, maybe show a message to the user
        return;
      }
    }

    if (item.id) await adminApi.update("case-studies", item.id, item);
    else await adminApi.create("case-studies", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("case-studies", id);
    load();
  };

  return <AdminCrudTable title="Case Studies" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
