"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplet, Hammer, Sparkles } from 'lucide-react';

const products = [
  {
    title: "Resina Epóxi",
    desc: "Acabamento vítreo de alta resistência mecânica e química.",
    icon: <Droplet size={32} className="text-[#22d3ee]" />
  },
  {
    title: "Poliuretano (PU)",
    desc: "Flexibilidade e resistência contra raios UV e variações térmicas.",
    icon: <Layers size={32} className="text-[#22d3ee]" />
  },
  {
    title: "Uretano",
    desc: "A solução definitiva para choques térmicos e áreas molhadas.",
    icon: <Hammer size={32} className="text-[#22d3ee]" />
  },
  {
    title: "Endurecedores",
    desc: "Tratamento químico para superfícies de concreto de alto tráfego.",
    icon: <Sparkles size={32} className="text-[#22d3ee]" />
  }
];

export function ProductShowcase() {
  return (
    <section className="py-20 px-6 bg-[#1a2332] relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#22d3ee] font-bold tracking-widest uppercase text-sm">Tecnologia de Ponta</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Nossos Materiais</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trabalhamos apenas com insumos de primeira linha para garantir durabilidade extrema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 p-3 bg-[#22d3ee]/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}