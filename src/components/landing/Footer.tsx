import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Engineering Guides", href: "#" },
    { label: "Tech Salary Report", href: "#" },
  ],
  hireByRole: [
    { label: "Frontend Developers", href: "#" },
    { label: "Backend Developers", href: "#" },
    { label: "Full-Stack Engineers", href: "#" },
    { label: "Mobile Developers", href: "#" },
    { label: "UI/UX Designers", href: "#" },
  ],
  hireByTech: [
    { label: "React Developers", href: "#" },
    { label: "Node.js Developers", href: "#" },
    { label: "Python Developers", href: "#" },
    { label: "AWS Engineers", href: "#" },
    { label: "AI/ML Engineers", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-frost flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-primary-foreground">
                Frost<span className="text-frost-400">Codex</span>
              </span>
            </a>
            <p className="text-sm text-navy-300 mb-6 leading-relaxed">
              Your technical co-founders with 0% equity. Building tomorrow's products, today.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-frost-600 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-navy-300 hover:text-frost-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire by Role */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hire by Role</h4>
            <ul className="space-y-2.5">
              {footerLinks.hireByRole.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-navy-300 hover:text-frost-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire by Tech */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hire by Tech</h4>
            <ul className="space-y-2.5">
              {footerLinks.hireByTech.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-navy-300 hover:text-frost-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-navy-300 hover:text-frost-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-400">
              © 2026 FrostCodex. All rights reserved.
            </p>
            <p className="text-sm text-navy-400">
              Engineers who think like founders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
