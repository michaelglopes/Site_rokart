"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ShieldCheck, Paintbrush, ChevronDown, Search, Menu, X, Mail, Phone, MapPin, Layers, Hammer, Route, Droplets } from 'lucide-react';

// --- IMPORTANTE: AQUI ESTÃO OS IMPORTS DOS SEUS COMPONENTES ---
import { ServiceCard } from '../components/ServiceCard';
import { AboutSection } from '../components/AboutSection';
import { ProductShowcase } from '../components/ProductShowcase';
import { ProjectGallery } from '../components/ProjectGallery';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- NOVA FUNÇÃO DO WHATSAPP ---
  const openWhatsApp = () => {
    setIsMenuOpen(false); // Fecha o menu se estiver no celular
    const numero = "5562993386656";
    const mensagem = encodeURIComponent("Olá! Acessei o site da Rokart e gostaria de solicitar um orçamento de piso de alta resistência.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1a2332] text-white font-sans">
      
      {/* --- NAVBAR FIXA --- */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-[#1a2332]/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800 shadow-md">
        
        {/* LOGO (Ao clicar volta para o topo) */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
          <img 
            src="/logo-rokart.png" 
            alt="Rokart Soluções" 
            className="h-10 md:h-13 w-auto object-contain" 
          />
          <span className="text-2xl font-black tracking-tighter italic">ROKART</span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 font-semibold uppercase text-sm tracking-widest text-gray-300 items-center">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-[#22d3ee] transition duration-300">Início</button>
          <button onClick={() => scrollToSection('servicos')} className="hover:text-[#22d3ee] transition duration-300">Serviços</button>
          <button onClick={() => scrollToSection('sobre')} className="hover:text-[#22d3ee] transition duration-300">Sobre</button> 
          
          {/* BOTÃO CONTATO AGORA VAI PRO WHATSAPP */}
          <button 
            onClick={openWhatsApp}
            className="px-5 py-2 border border-[#22d3ee] text-[#22d3ee] rounded-full hover:bg-[#22d3ee] hover:text-[#1a2332] transition duration-300 flex items-center gap-2"
          >
            <Phone size={16} /> Contato
          </button>
        </div>

        {/* BOTÃO HAMBÚRGUER (Mobile) */}
        <div className="md:hidden text-white">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={30} className="text-[#22d3ee]" /> : <Menu size={30} />}
          </button>
        </div>

        {/* --- MENU MOBILE (Gaveta) --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-[#1a2332] border-b border-gray-800 overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col items-center py-10 space-y-8 font-bold text-xl uppercase tracking-widest">
                <button onClick={() => scrollToSection('inicio')} className="hover:text-[#22d3ee]">Início</button>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-[#22d3ee]">Serviços</button>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-[#22d3ee]">Sobre</button>
                {/* BOTÃO CONTATO MOBILE AGORA VAI PRO WHATSAPP */}
                <button onClick={openWhatsApp} className="text-[#22d3ee] flex items-center gap-2">
                  <Phone size={20} /> Fale Conosco
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION (ID: inicio) --- */}
      <section id="inicio" className="relative h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a2332]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <span className="px-4 py-1 border border-[#22d3ee]/30 rounded-full text-[#22d3ee] text-xs font-bold tracking-[0.2em] uppercase bg-[#22d3ee]/10 backdrop-blur-md">
              Especialistas em Revestimentos
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none drop-shadow-lg">
            Pisos de Alta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-blue-500">Resistência</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Durabilidade Extrema para o seu Negócio.
          </p>
          
          {/* BOTÃO PRINCIPAL AGORA VAI PRO WHATSAPP */}
          <motion.button 
            onClick={openWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] text-[#1a2332] rounded-full font-black text-lg shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all border border-white/20"
          >
            SOLICITE UM ORÇAMENTO
          </motion.button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10 text-[#22d3ee]/50 cursor-pointer"
          onClick={() => scrollToSection('servicos')}
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* --- SEÇÃO SOBRE NÓS (ID: sobre) --- */}
      <div id="sobre">
        <AboutSection />
      </div>

      {/* --- SEÇÃO DE SERVIÇOS (ID: servicos) --- */}
      <section id="servicos" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Nossas Soluções</h2>
          <div className="h-1.5 w-24 bg-[#22d3ee] mb-6 rounded-full md:mx-auto"></div>
          <p className="text-gray-400 text-lg">Tecnologia e resistência para cada metro quadrado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard icon={<Hammer size={40} className="text-[#22d3ee]" />} title="Pavimentação em Concreto" desc="Execução completa: lançamento do concreto, nivelamento a laser e lapidação com exposição de agregados." />
          <ServiceCard icon={<Paintbrush size={40} className="text-[#22d3ee]" />} title="Revestimentos Monolíticos" desc="Aplicação de sistemas Epóxi e Uretano para proteção, estética e facilidade de limpeza." />
          <ServiceCard icon={<ShieldCheck size={40} className="text-[#22d3ee]" />} title="Restauração de Pisos" desc="Revitalização de pisos antigos, tratamento de juntas de dilatação e correção de fissuras." />
          <ServiceCard icon={<Layers size={40} className="text-[#22d3ee]" />} title="Remoção de Epóxi" desc="Desbaste mecânico de alta performance para remover tintas, epóxi e resinas antigas, preparando a base para novos tratamentos." />
          <ServiceCard icon={<Route size={40} className="text-[#22d3ee]" />} title="Sinalização Industrial" desc="Pintura de faixas de segurança, rotas de empilhadeiras e demarcação de áreas operacionais conforme as normas vigentes." />
          <ServiceCard icon={<Droplets size={40} className="text-[#22d3ee]" />} title="Impermeabilização e Selamento" desc="Aplicação de seladores e endurecedores químicos para blindar o concreto contra a absorção de água, óleos e graxas." />
        </div>
      </section>

      {/* --- NOVAS SEÇÕES ADICIONADAS AQUI --- */}
      <ProductShowcase />
      <ProjectGallery />

      {/* --- FOOTER / CONTATO (ID: contato) --- */}
      <footer id="contato" className="py-20 border-t border-gray-800 bg-[#151c29] text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="col-span-1 md:col-span-5">
             <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <img src="/logo-rokart.png" alt="Rokart" className="h-12" />
                <span className="text-2xl font-black tracking-tighter italic">ROKART</span>
             </div>
             <p className="text-gray-400 leading-relaxed mb-6">
               Especialistas em transformar ambientes industriais com pisos de altíssima resistência e durabilidade. 
             </p>
          </div>

          {/* Coluna 2: Contato Rápido (Ajuste de espaço e flex-shrink-0) */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Fale Conosco</h3>
            <ul className="space-y-4 text-gray-400">
              
              {/* O segredo aqui foi o flex-shrink-0 e o break-all */}
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-[#22d3ee] flex-shrink-0" />
                <span className="break-all">alessandrosilvalopes27@gmail.com</span>
              </li>
              
              {/* Adicionei a função de clique no WhatsApp direto no número do rodapé também! */}
              <li 
                onClick={openWhatsApp}
                className="flex items-center gap-3 justify-center md:justify-start cursor-pointer hover:text-[#22d3ee] transition-colors"
              >
                <Phone size={18} className="text-[#22d3ee] flex-shrink-0" />
                <span>(62) 99338-6656</span>
              </li>
              
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-[#22d3ee] flex-shrink-0" />
                <span>Goiânia, GO</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('inicio')} className="hover:text-[#22d3ee]">Voltar ao Topo</button></li>
              <li><button onClick={() => scrollToSection('servicos')} className="hover:text-[#22d3ee]">Serviços</button></li>
              <li><button onClick={() => scrollToSection('sobre')} className="hover:text-[#22d3ee]">Quem Somos</button></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p>© 2026 Rokart Pisos. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
} 