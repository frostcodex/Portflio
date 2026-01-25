import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      
      {/* Frost glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-frost-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-frost-400/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-frost-500/20 border border-frost-400/30 mb-8">
            <Zap className="w-4 h-4 text-frost-400" />
            <span className="text-sm font-medium text-frost-200">Start Building in 48 Hours</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Ship{" "}
            <span className="text-frost-400">Faster?</span>
          </h2>

          <p className="text-lg md:text-xl text-navy-200 mb-10 leading-relaxed">
            Stop waiting. Stop compromising. Get the engineering team you need to turn your vision into a product that wins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="frost" size="xl" className="group">
              Hire Engineers Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
            >
              Book a Call
            </Button>
          </div>

          <p className="mt-8 text-sm text-navy-300">
            No commitment required. 2-week risk-free trial available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
