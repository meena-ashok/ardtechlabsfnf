import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  useEffect(() => {
    adminApi.getSettings()
      .then((data) => {
        setSettings(data);
        const vals: Record<string, string> = {};
        data.forEach((s: any) => { vals[s.settingKey] = s.settingValue; });
        setEditValues(vals);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (key: string) => {
    try {
      await adminApi.updateSetting(key, editValues[key]);
      toast.success(`Setting "${key}" updated successfully`);
    } catch (err) {
      toast.error("Failed to update setting");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-lg font-bold text-foreground mb-1">Site Settings</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage global site configuration</p>

      <div className="space-y-4 max-w-2xl">
        {settings.map((setting) => (
          <div key={setting.settingKey} className="bg-background-card/70 border border-secondary/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <label className="text-xs font-bold text-foreground">{setting.settingKey}</label>
                {setting.description && (
                  <p className="text-[0.65rem] text-muted-foreground">{setting.description}</p>
                )}
              </div>
              <button
                onClick={() => handleSave(setting.settingKey)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-[0.68rem] font-semibold rounded-lg text-primary-foreground transition-all hover:-translate-y-0.5"
                style={{ background: "var(--gradient-orange)" }}
              >
                <Save className="w-3 h-3" /> Save
              </button>
            </div>
            <textarea
              value={editValues[setting.settingKey] || ""}
              onChange={(e) => setEditValues({ ...editValues, [setting.settingKey]: e.target.value })}
              rows={setting.settingValue.length > 50 ? 3 : 1}
              className="w-full px-3 py-2 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary focus:bg-primary/[0.04] resize-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
