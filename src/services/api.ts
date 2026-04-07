const API_BASE = import.meta.env.VITE_API_URL || '';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('admin_token');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');

  if (!res.ok) {
    const error = isJson
      ? await res.json().catch(() => ({ error: res.statusText }))
      : { error: res.statusText };
    throw new Error(error.error || error.message || `Request failed: ${res.status}`);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  if (isJson) {
    return res.json();
  }

  return undefined as T;
}

// Public API
export const publicApi = {
  getServices: () => request<any[]>('/api/public/services'),
  getProjects: (category?: string) =>
    request<any[]>(`/api/public/projects${category ? `?category=${category}` : ''}`),
  getCaseStudies: () => request<any[]>('/api/public/case-studies'),
  getTestimonials: () => request<any[]>('/api/public/testimonials'),
  getFaqs: () => request<any[]>('/api/public/faqs'),
  getTeam: () => request<any[]>('/api/public/team'),
  getTechStack: () => request<any[]>('/api/public/tech-stack'),
  getHireTalents: () => request<any[]>('/api/public/hire-talents'),
  submitContact: (data: any) =>
    request<any>('/api/public/contact', { method: 'POST', body: JSON.stringify(data) }),
  getSettings: () => request<Record<string, string>>('/api/public/settings'),
  getSetting: (key: string) => request<any>(`/api/public/settings/${key}`),
};

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    request<{ token: string; email: string; name: string; role: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  me: () => request<{ email: string; name: string; role: string }>('/api/auth/me'),
};

// Admin API
export const adminApi = {
  getStats: () => request<any>('/api/admin/stats'),

  // Generic CRUD helpers
  getAll: (resource: string) => request<any[]>(`/api/admin/${resource}`),
  create: (resource: string, data: any) =>
    request<any>(`/api/admin/${resource}`, { method: 'POST', body: JSON.stringify(data) }),
  update: (resource: string, id: number, data: any) =>
    request<any>(`/api/admin/${resource}/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (resource: string, id: number) =>
    request<any>(`/api/admin/${resource}/${id}`, { method: 'DELETE' }),

  // Messages
  getMessages: () => request<any[]>('/api/admin/contact-messages'),
  getUnreadMessages: () => request<any[]>('/api/admin/contact-messages/unread'),
  markMessageRead: (id: number) =>
    request<any>(`/api/admin/contact-messages/${id}/read`, { method: 'PUT' }),
  deleteMessage: (id: number) =>
    request<any>(`/api/admin/contact-messages/${id}`, { method: 'DELETE' }),

  // Settings
  getSettings: () => request<any[]>('/api/admin/settings'),
  updateSetting: (key: string, value: string) =>
    request<any>(`/api/admin/settings/${key}`, { method: 'PUT', body: JSON.stringify({ value }) }),
};
