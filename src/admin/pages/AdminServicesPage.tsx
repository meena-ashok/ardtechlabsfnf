import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "serviceName", label: "Service Name", type: "text" as const },
  { key: "serviceDescription", label: "Service Description", type: "textarea" as const },
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
