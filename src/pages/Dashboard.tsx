import { Protected } from "@/lib/protected-page";
import { AddTodoForm } from "@/components/todos/AddTodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { UserButton } from "@/components/auth/UserButton";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function Dashboard() {
  return (
    <Protected>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckSquare className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight">TodoApp</h1>
            </div>
            <UserButton />
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Your Todos</h2>
              <p className="text-muted-foreground">
                Stay organized and get things done
              </p>
            </div>

            <AddTodoForm />
            <TodoList />
          </motion.div>
        </main>
      </div>
    </Protected>
  );
}