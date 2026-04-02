import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "text", label: "Text", type: "textarea" as const },
  { key: "name", label: "Name", type: "text" as const },
  { key: "role", label: "Role", type: "text" as const },
  { key: "featured", label: "Featured", type: "boolean" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminTestimonialsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("testimonials").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("testimonials", item.id, item);
    else await adminApi.create("testimonials", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("testimonials", id);
    load();
  };

  return <AdminCrudTable title="Testimonials" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
