import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can FrostCodex work in my timezone?",
    answer: "Absolutely. We carefully match developers based on your timezone requirements. Most clients get 4-8 hours of daily overlap. Our teams are spread across multiple regions to ensure real-time collaboration during your working hours.",
  },
  {
    question: "Is top talent actually affordable?",
    answer: "Yes—without compromise. We've built our talent network in regions with world-class engineering education but reasonable cost of living. You get Silicon Valley expertise at 50-70% less than local hiring costs, with zero quality trade-offs.",
  },
  {
    question: "What tech stacks do you support?",
    answer: "If it's used to build modern software, we probably have experts in it. Our core strengths include React, Node.js, Python, Go, React Native, Flutter, AWS, and GCP. But we also handle legacy systems, niche frameworks, and emerging technologies.",
  },
  {
    question: "Can we start with a small or short-term project?",
    answer: "100%. We offer a 2-week trial period with any engagement. Start with a single developer on a specific feature, scale up as confidence grows. No long-term contracts required until you're ready.",
  },
  {
    question: "How fast can you get us developers?",
    answer: "Most clients have their first developer interview within 48-72 hours. Full team assembly typically takes 1-2 weeks. For urgent needs, we maintain a bench of pre-vetted engineers ready for immediate deployment.",
  },
  {
    question: "What if a developer isn't the right fit?",
    answer: "We'll replace them at no additional cost. Our goal is your success, not forcing a bad match. You have full control over team composition, and we stand behind our talent guarantee.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform flex-shrink-0", isOpen && "rotate-180")} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-frost-100 text-frost-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions?{" "}
            <span className="text-gradient-frost">Answered.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with FrostCodex.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
