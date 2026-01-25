import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FrostCodex didn't just build our MVP—they helped us rethink our entire product strategy. Their team saved us months of wasted development time.",
    author: "Sarah Chen",
    role: "CEO, FinFlow",
    avatar: "SC",
  },
  {
    quote: "We went from idea to Series A in 8 months. FrostCodex engineers were embedded in our team, shipping features faster than we could design them.",
    author: "Marcus Williams",
    role: "CTO, DataPulse",
    avatar: "MW",
  },
  {
    quote: "The quality of developers is unmatched. Our FrostCodex team caught architectural issues that would have cost us $500K to fix later.",
    author: "Jennifer Park",
    role: "VP Engineering, CloudSync",
    avatar: "JP",
  },
  {
    quote: "Hiring through FrostCodex felt like adding co-founders, not contractors. They genuinely care about our success.",
    author: "David Rodriguez",
    role: "CEO, ShipFast",
    avatar: "DR",
  },
  {
    quote: "48 hours from first call to developer start. No recruiter I've worked with comes close to that speed—or that quality.",
    author: "Amanda Foster",
    role: "CTO, Momentum Labs",
    avatar: "AF",
  },
  {
    quote: "Our FrostCodex team integrated seamlessly. Same timezone, same Slack channels, same commitment. It's like they're full-time employees.",
    author: "Michael Torres",
    role: "VP Product, ScaleUp AI",
    avatar: "MT",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="text-gradient-frost">Builders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it. Here's what founders and CTOs say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-frost-200 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-frost-200 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-frost-400 text-frost-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-frost flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
