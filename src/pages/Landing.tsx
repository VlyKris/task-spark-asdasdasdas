import { AuthButton } from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckSquare, Plus, Zap, Shield, Smartphone } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <CheckSquare className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">TodoApp</span>
        </div>
        <AuthButton trigger={<Button>Get Started</Button>} />
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Get Things
            <span className="text-primary block">Done</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, beautiful todo app that helps you stay organized and productive. 
            Add tasks, track progress, and achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AuthButton 
              trigger={
                <Button size="lg" className="text-lg px-8 py-6">
                  <Plus className="mr-2 h-5 w-5" />
                  Start Adding Todos
                </Button>
              } 
            />
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl border shadow-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-4 h-4 rounded border-2 border-primary"></div>
                <span className="text-sm">Plan the product roadmap</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-4 h-4 rounded border-2 border-muted-foreground bg-primary"></div>
                <span className="text-sm line-through text-muted-foreground">Review design mockups</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-4 h-4 rounded border-2 border-primary"></div>
                <span className="text-sm">Schedule team meeting</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to stay productive
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Add and manage todos instantly with our optimized interface
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your todos are encrypted and stored securely in the cloud
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Works Everywhere</h3>
              <p className="text-muted-foreground">
                Access your todos from any device, anywhere, anytime
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 bg-card rounded-2xl p-12 border"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to get organized?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with TodoApp
          </p>
          <AuthButton 
            trigger={
              <Button size="lg" className="text-lg px-8 py-6">
                <Plus className="mr-2 h-5 w-5" />
                Get Started for Free
              </Button>
            } 
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Built with ❤️ using modern web technologies</span>
        </div>
      </footer>
    </div>
  );
}