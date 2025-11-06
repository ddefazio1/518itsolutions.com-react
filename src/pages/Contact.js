import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main className="page"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section id="contact" className="card contact">
        <h2>Contact Us</h2>

        <form action="https://formspree.io/f/xpwyowba" method="POST" className="contact-form">
          <label>Name: <input type="text" name="name" required /></label>
          <label>Email: <input type="email" name="email" required /></label>
          <label>Message: <textarea name="message" required></textarea></label>
          <button type="submit">Send</button>
        </form>

        <p>Email: <a href="mailto:ddefazio@518itsolutions.com">ddefazio@518itsolutions.com</a></p>
        <p>Phone: (518) 629-5630</p>
        <p>Schedule a Free Consultation: <a href="https://calendly.com/ddefazio-518itsolutions" target="_blank" rel="noreferrer">Book Now</a></p>
      </section>
    </motion.main>
  );
}
