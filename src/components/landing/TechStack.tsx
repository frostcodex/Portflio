import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Svelte"],
  },
  {
    id: "backend",
    label: "Backend",
    technologies: ["Node.js", "Python", "Go", "Java", "Ruby on Rails", "PHP", "GraphQL", "REST APIs"],
  },
  {
    id: "mobile",
    label: "Mobile",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: "ai",
    label: "AI & ML",
    technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "Computer Vision"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    technologies: ["Shopify", "WooCommerce", "Stripe", "Magento", "BigCommerce"],
  },
  {
    id: "crm",
    label: "CRM & Integrations",
    technologies: ["Salesforce", "HubSpot", "Zapier", "Segment", "Twilio", "SendGrid"],
  },
];

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeData = categories.find((c) => c.id === activeCategory);

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Speak Your{" "}
            <span className="text-gradient-frost">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cutting-edge frameworks to battle-tested platforms—we've got it covered.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === category.id
                  ? "gradient-frost text-accent-foreground shadow-frost"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {activeData?.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-secondary rounded-xl text-foreground font-medium hover:bg-frost-100 hover:text-frost-700 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
