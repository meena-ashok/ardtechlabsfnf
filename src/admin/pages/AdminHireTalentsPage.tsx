import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
  { key: "icon", label: "Icon", type: "select" as const, options: ["Code", "Smartphone", "Brain", "Cloud", "Palette", "Database"] },
  { key: "chips", label: "Chips (comma-separated)", type: "text" as const },
  { key: "rate", label: "Rate", type: "text" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminHireTalentsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("hire-talents").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("hire-talents", item.id, item);
    else await adminApi.create("hire-talents", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("hire-talents", id);
    load();
  };

  return <AdminCrudTable title="Hire Talents" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
