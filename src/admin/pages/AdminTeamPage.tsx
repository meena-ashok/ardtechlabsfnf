import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "name", label: "Name", type: "text" as const },
  { key: "role", label: "Role", type: "text" as const },
  { key: "bio", label: "Bio", type: "textarea" as const },
  { key: "imageUrl", label: "Image URL", type: "text" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminTeamPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("team").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("team", item.id, item);
    else await adminApi.create("team", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("team", id);
    load();
  };

  return <AdminCrudTable title="Team Members" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
