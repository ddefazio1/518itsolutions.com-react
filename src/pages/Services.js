import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.main className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section id="services" className="card">
        <h2>Our Services</h2>
        <ul className="services-grid">
          <li><strong>Cybersecurity Assessments & Protection</strong></li>
          <li><strong>Managed IT Services</strong></li>
          <li><strong>Azure Cloud Setup & Management</strong></li>
          <li><strong>Ransomware Prevention with CrowdStrike</strong></li>
          <li><strong>Security Camera Services</strong> (Ubiquiti, Reolink)</li>
          <li><strong>Free 15-Minute Cyber Scans</strong></li>
        </ul>
      </section>
    </motion.main>
  );
}
