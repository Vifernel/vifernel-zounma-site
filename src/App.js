import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Accueil */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-6xl font-bold text-gold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Vifernel Zounma
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Entrepreneur Web & Digital Innovator
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="https://wa.me/233XXXXXXXXX" className="bg-gold text-black px-6 py-2 rounded hover:scale-105 transition-transform">
            WhatsApp
          </a>
          <a href="#contact" className="border border-gold px-6 py-2 rounded hover:bg-gold hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-4xl font-semibold text-gold mb-6">À propos</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Passionné par le design et la technologie, je crée des expériences numériques élégantes et fonctionnelles.
        </p>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20 bg-black text-center">
        <h2 className="text-4xl font-semibold text-gold mb-6">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["React", "Tailwind", "UI/UX", "SEO"].map((skill) => (
            <motion.div
              key={skill}
              className="border border-gold p-6 rounded hover:bg-gold hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 text-center">
        <h2 className="text-4xl font-semibold text-gold mb-6">Services</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Création de sites web, branding digital et optimisation SEO pour booster votre présence en ligne.
        </p>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 bg-black text-center">
        <h2 className="text-4xl font-semibold text-gold mb-6">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              className="border border-gold p-6 rounded hover:bg-gold hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Projet {num}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-semibold text-gold mb-6">Contact</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Discutons de votre prochain projet ! Écrivez-moi sur WhatsApp ou par email.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gold">
        <p className="text-sm text-gold">© 2026 Vifernel Zounma — Tous droits réservés.</p>
      </footer>
    </div>
  );
}
