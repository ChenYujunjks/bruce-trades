// hooks/useCategorizedTodos.ts
import type { Todo } from "@/lib/types/Todo";
import { useMemo } from "react";
import { classifyTodoDate, type TodoBucket } from "@/lib/types/TodoClassify";

type BucketData = {
  pending: Todo[];
  completed: Todo[];
};

export function useCategorizedTodos(todos: Todo[] = []) {
  return useMemo(() => {
    const buckets: Record<TodoBucket, BucketData> = {
      expired: { pending: [], completed: [] },
      week: { pending: [], completed: [] },
      future: { pending: [], completed: [] },
    };

    for (const t of todos) {
      const b = classifyTodoDate(t.due_date);
      (t.is_completed ? buckets[b].completed : buckets[b].pending).push(t);
    }

    return buckets;
  }, [todos]);
}
