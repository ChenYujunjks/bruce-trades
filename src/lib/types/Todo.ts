export interface Todo {
  id: number;
  title: string;
  description?: string | null;
  is_completed: boolean;
  due_date?: string | null; // YYYY-MM-DD; null means unscheduled.
  kind?: "task" | "note";
  tags?: string[];
  is_pinned?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TodoDraft {
  title: string;
  description?: string;
  due_date?: string;
}
export type TodoCreateInput = TodoDraft;
