import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, UserCheck, Package, Code, Smartphone, Palette, TestTube, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    icon: UserCheck,
    title: "On-Demand Developers",
    description: "Need one rockstar developer? Get precisely matched talent that integrates with your team in days, not months.",
    features: ["Flexible hours", "Instant scaling", "No long-term contracts"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "A complete engineering squad, handpicked for your project. They work exclusively on your product like it's their own.",
    features: ["Full-stack coverage", "Dedicated PM", "Direct communication"],
  },
  {
    icon: Package,
    title: "End-to-End Development",
    description: "From concept to launch and beyond. We handle everything—strategy, design, development, deployment, and maintenance.",
    features: ["Fixed-price projects", "Clear milestones", "Guaranteed delivery"],
  },
];

const roles = [
  { icon: Code, label: "Frontend Developers" },
  { icon: Code, label: "Backend Developers" },
  { icon: Code, label: "Full-Stack Engineers" },
  { icon: Smartphone, label: "Mobile App Developers" },
  { icon: Palette, label: "UI/UX Designers" },
  { icon: TestTube, label: "QA Specialists" },
  { icon: Briefcase, label: "Product Managers" },
];

export const EngagementModels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            Engagement Models
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hire Your Way
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need one developer or an entire team, we flex to fit your timeline and budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border hover:border-frost-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-frost-100 flex items-center justify-center mb-6 group-hover:bg-frost-200 transition-colors">
                <model.icon className="w-6 h-6 text-frost-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{model.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{model.description}</p>
              <ul className="space-y-2">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-frost-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Available Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary/50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">Available Roles</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {roles.map((role) => (
              <div
                key={role.label}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border hover:border-frost-300 transition-colors cursor-pointer"
              >
                <role.icon className="w-4 h-4 text-frost-500" />
                <span className="text-sm font-medium text-foreground">{role.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="frost">Find Your Perfect Match</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
