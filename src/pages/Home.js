import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section id="home" className="card">
        <h2>Welcome</h2>
        <p>
          Protect your business with cutting-edge cybersecurity and managed IT services.
          Serving Albany, Schenectady, Troy, and beyond.
        </p>
        <img src="/images/cybersecurityteam.webp" alt="Cybersecurity Team" />
        <p>Call us at (518) 629-5630 for a free consultation!</p>

        <h3>Our Mission</h3>
        <p>
          At 518 IT Solutions LLC, our mission is to empower small and medium-sized businesses
          in Albany, Schenectady, Troy, and beyond with robust cybersecurity and reliable managed IT
          services. With 37 years of expertise and industry-leading certifications (CISSP, GSEC, A+),
          we deliver tailored Azure cloud solutions and AI-powered CrowdStrike protection to safeguard
          your business from cyber threats, ensuring peace of mind and operational success.
        </p>
      </section>
    </motion.main>
  );
}
