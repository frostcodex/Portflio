import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVPs & Full-Scale Products",
    description: "From napkin sketch to market-ready product. We validate fast, iterate faster, and build for scale from day one.",
  },
  {
    icon: Zap,
    title: "Sales Automation Systems",
    description: "Custom automation that turns leads into revenue. CRM integrations, pipeline optimization, and intelligent workflows.",
  },
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description: "Native-quality experiences across every platform. React, React Native, Flutter—we speak them all fluently.",
  },
  {
    icon: Layers,
    title: "Scalable SaaS Platforms",
    description: "Multi-tenant architecture built for millions. Stripe integrations, user management, and enterprise-grade security.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Products That Actually{" "}
            <span className="text-gradient-frost">Ship</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't do busywork. Every line of code moves the needle toward your business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-frost-200"
            >
              <div className="w-14 h-14 rounded-xl gradient-frost flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-frost-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
