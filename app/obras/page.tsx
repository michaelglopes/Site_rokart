"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
// Importe direto do arquivo de dados que você já criou
import { projects } from '../data/projects';

export default function ObrasPage() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white font-sans">
      
      {/* HEADER */}
      <nav className="flex items-center px-6 md:px-10 py-6 bg-[#1a2332] border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#22d3ee] transition font-semibold uppercase tracking-wider text-sm">
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
        <div className="flex-1 flex justify-center opacity-80 font-bold text-xl italic tracking-tighter">
            ROKART
        </div>
        <div className="w-[100px]"></div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-blue-500">Obras</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Confira a qualidade e acabamento dos nossos projetos entregues.
          </p>
        </div>

        {/* Verificação de segurança para a lista de projetos */}
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-gray-800 bg-gray-900"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#22d3ee] text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-20">
            <p>Carregando projetos...</p>
          </div>
        )}

      </div>
    </div>
  );
}