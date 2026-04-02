import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "question", label: "Question", type: "textarea" as const },
  { key: "answer", label: "Answer", type: "textarea" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminFaqsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("faqs").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("faqs", item.id, item);
    else await adminApi.create("faqs", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("faqs", id);
    load();
  };

  return <AdminCrudTable title="FAQs" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
