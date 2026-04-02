import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "title", label: "Title", type: "text" as const },
  { key: "description", label: "Description", type: "textarea" as const },
  { key: "icon", label: "Icon", type: "select" as const, options: ["Code", "Smartphone", "Brain", "Cloud", "RefreshCw", "Users", "Database", "Palette"] },
  { key: "variant", label: "Variant", type: "select" as const, options: ["orange", "navy"] },
  { key: "chips", label: "Chips (comma-separated)", type: "text" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminServicesPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("services").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) {
      await adminApi.update("services", item.id, item);
    } else {
      await adminApi.create("services", item);
    }
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("services", id);
    load();
  };

  return <AdminCrudTable title="Services" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
