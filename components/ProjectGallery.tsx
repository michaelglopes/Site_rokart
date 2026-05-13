"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ArrowRight, X } from 'lucide-react';
import Link from 'next/link'; // Importante para mudar de página
import { projects } from '../app/data/projects'; // Importando a lista

export function ProjectGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // LÓGICA: Pega apenas os 4 primeiros (os mais recentes)
  const recentProjects = projects.slice(0, 4);

  return (
    <section className="py-24 px-6 bg-[#151c29]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Obras Recentes</h2>
            <div className="h-1 w-20 bg-[#22d3ee] rounded-full"></div>
          </div>
          
          {/* BOTÃO QUE LEVA PARA A NOVA PÁGINA */}
          <Link href="/obras">
            <button className="group flex items-center gap-2 text-[#22d3ee] hover:text-white transition font-semibold">
              Ver portfólio completo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </Link>
        </div>

        {/* GRID (Mostra só os 4 recentes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative h-72 md:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-gray-800"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#22d3ee] text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {project.title} <ZoomIn size={20} className="text-gray-400" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL DE ZOOM (Mantivemos para ver detalhes rápidos na home) */}
        <AnimatePresence>
          {selectedId && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" 
              onClick={() => setSelectedId(null)}
            >
              {recentProjects.map((project) => (
                project.id === selectedId && (
                  <motion.div
                    key={project.id}
                    layoutId={`card-${project.id}`}
                    className="relative w-full max-w-5xl bg-[#1a2332] rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 p-2 bg-black/60 text-white rounded-full hover:bg-[#22d3ee] hover:text-black transition z-10"><X size={24} /></button>
                    <div className="h-[60vh] md:h-[70vh] bg-black flex items-center justify-center">
                        <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-[#22d3ee] font-medium mt-1">{project.category}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}