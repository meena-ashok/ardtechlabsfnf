import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import AdminCrudTable from "@/admin/components/AdminCrudTable";

const columns = [
  { key: "id", label: "ID", type: "number" as const },
  { key: "projectName", label: "Project Name", type: "text" as const },
  { key: "projectDescription", label: "Project Description", type: "textarea" as const },
  { key: "imageUrl", label: "Image URL", type: "text" as const },
  { key: "category", label: "Category", type: "select" as const, options: ["web", "mobile", "ai", "cloud"] },
  { key: "githubUrl", label: "Github URL", type: "text" as const },
  { key: "websiteUrl", label: "Website URL", type: "text" as const },
  { key: "techStack", label: "Tech Stack (comma-separated)", type: "text" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "boolean" as const },
];

export default function AdminProjectsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getAll("projects").then(setData).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleSave = async (item: any) => {
    if (item.id) await adminApi.update("projects", item.id, item);
    else await adminApi.create("projects", item);
    load();
  };

  const handleDelete = async (id: number) => {
    await adminApi.remove("projects", id);
    load();
  };

  return <AdminCrudTable title="Projects" data={data} columns={columns} onSave={handleSave} onDelete={handleDelete} loading={loading} />;
}
