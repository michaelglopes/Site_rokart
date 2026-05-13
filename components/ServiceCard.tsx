"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion'; // Importamos 'Variants' aqui

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// Definindo o tipo explicitamente para o TypeScript não se perder
const cardVariants: Variants = {
  offscreen: { 
    y: 50, 
    opacity: 0 
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      bounce: 0.4, 
      duration: 0.8 
    }
  }
};

export function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="p-8 bg-[#232d3f] border border-cyan-900/30 rounded-2xl relative group overflow-hidden"
    >
      {/* Efeito de Glow no Hover */}
      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all" />

      <div className="mb-6 relative z-10">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 relative z-10">{desc}</p>
      
      <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
    </motion.div>
  );
}