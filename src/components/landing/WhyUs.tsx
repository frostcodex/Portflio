import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Clock, DollarSign, Search, Eye } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Engineers Who Think Like CEOs",
    description: "Our developers don't wait for tickets—they anticipate needs, challenge assumptions, and optimize for business outcomes, not just technical elegance.",
  },
  {
    icon: Shield,
    title: "Startup-Tested, Battle-Hardened",
    description: "We've weathered pivots, fundraising sprints, and launch crunches. Your challenges aren't new to us—they're our specialty.",
  },
  {
    icon: Clock,
    title: "Time-Zone Aligned Collaboration",
    description: "4+ hours of daily overlap with your team. Real-time Slack conversations. No waiting 24 hours for a reply to unblock progress.",
  },
  {
    icon: DollarSign,
    title: "Affordable Without Compromise",
    description: "Silicon Valley talent at a fraction of the cost. We invest in regions with exceptional engineering talent and reasonable rates.",
  },
  {
    icon: Search,
    title: "Deep Technical Vetting",
    description: "Only 2.7% of applicants make it through our 5-stage vetting process. We test for code quality, system design, problem-solving, and cultural fit.",
  },
  {
    icon: Eye,
    title: "Transparent Daily Updates",
    description: "Know exactly what's happening. Daily standups, weekly demos, and real-time project dashboards—no black boxes or surprise delays.",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            Why FrostCodex
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Execute Like a{" "}
            <span className="text-gradient-frost">CTO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just writing code—we're co-building your company. Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 md:p-8 h-full border border-border hover:border-frost-200 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-frost-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-frost-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
