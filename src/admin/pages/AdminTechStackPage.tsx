import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "label", label: "Label", type: "text" as const },
  { key: "items", label: "Items (comma-separated)", type: "textarea" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminTechStackPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("tech-stack").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("tech-stack", item.id, item);
    else await adminApi.create("tech-stack", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("tech-stack", id);
    load();
  };

  return <AdminCrudTable title="Tech Stack" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
