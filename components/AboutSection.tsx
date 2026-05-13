"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    // 1. MUDANÇA AQUI: bg-white virou bg-[#1a2332] e text-[#1a2332] virou text-white
    <section className="py-24 px-6 md:px-10 bg-[#1a2332] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Imagem vindo da Esquerda (Mantive a animação igual) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.1)]"
        >
          {/* Usando a mesma imagem de fundo para manter a identidade */}
          <img 
            src="/hero-bg.jpg" 
            alt="Obra da Rokart"
            className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-500"
          />
          {/* Overlay azulado para a imagem não ficar muito clara no tema escuro */}
          <div className="absolute inset-0 bg-[#1a2332]/20"></div>
        </motion.div>

        {/* Texto vindo da Direita */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-[#22d3ee] font-bold tracking-widest uppercase text-sm">Nossa História</span>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight mt-2 text-white">
            Compromisso com a <span className="text-[#22d3ee]">Resistência</span>
          </h2>
          
          {/* Textos ajustados para Cinza Claro (gray-300) */}
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            A **Rokart** é especializada em soluções de revestimentos de alto desempenho para o setor industrial e comercial. Nosso foco é transformar superfícies em bases sólidas e seguras.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
            Utilizamos as tecnologias mais recentes do mercado para garantir que cada projeto suporte o tráfego pesado e as exigências químicas de cada nicho de atuação.
          </p>
          
          {/* Cards internos ajustados para o tema escuro */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-[#232d3f] rounded-xl border-l-4 border-[#22d3ee] shadow-lg">
              <p className="text-xl md:text-2xl font-bold text-white">Qualidade</p>
              <p className="text-sm text-gray-400 italic">Materiais Premium</p>
            </div>
            <div className="p-4 bg-[#232d3f] rounded-xl border-l-4 border-[#22d3ee] shadow-lg">
              <p className="text-xl md:text-2xl font-bold text-white">Precisão</p>
              <p className="text-sm text-gray-400 italic">Mão de obra técnica</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}