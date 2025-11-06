import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section id="about" className="card">
        <h2>About Us</h2>
        <p>
          Founded by David DeFazio, 518 IT Solutions brings 37 years of IT expertise,
          from help desk support to advanced network architecture. Certified in CISSP, GSEC, and A+,
          we deliver Azure cloud solutions and CrowdStrike AI-powered cybersecurity.
          Serving Albany, Schenectady, Troy, and beyond, our mission is to protect local SMBs from cyber threats.
        </p>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="IT Professional at Work" />
      </section>
    </motion.main>
  );
}
