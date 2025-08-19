import { api } from "@/convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { TodoItem } from "./TodoItem";
import { CheckCircle2, Circle, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type FilterType = "all" | "active" | "completed";

export function TodoList() {
  const todos = useQuery(api.todos.list);
  const [filter, setFilter] = useState<FilterType>("all");

  if (todos === undefined) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="space-y-4">
      {/* Filter Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="flex items-center gap-2"
          >
            <List className="h-4 w-4" />
            All ({todos.length})
          </Button>
          <Button
            variant={filter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("active")}
            className="flex items-center gap-2"
          >
            <Circle className="h-4 w-4" />
            Active ({activeCount})
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            Completed ({completedCount})
          </Button>
        </div>
      </div>

      {/* Todo Items */}
      <div className="space-y-2">
        <AnimatePresence>
          {filteredTodos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-muted-foreground"
            >
              {filter === "all" && "No todos yet. Add one above!"}
              {filter === "active" && "No active todos. Great job!"}
              {filter === "completed" && "No completed todos yet."}
            </motion.div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
