import React, { useState } from 'react';
import Hero from './components/Hero';
import Loader from './components/Loader';
import { Briefcase, GraduationCap, CheckCircle2, Award, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Experience' },
    { href: '#qualification', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Loader finishLoading={() => setIsLoading(false)} />

      {!isLoading && (
        <main className="animate-in fade-in duration-1000">

          {/* ── Navbar ── */}
          <nav className="pro-navbar px-5 sm:px-8 md:px-12 py-4 z-[100]">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-black font-black">V</div>
                <span className="hidden sm:inline font-outfit uppercase tracking-widest text-sm">Vishal Prasad</span>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                ))}
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-zinc-800 py-6 px-5 flex flex-col gap-5 z-50">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-zinc-400 hover:text-primary font-black uppercase tracking-[0.3em] text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <Hero />

          {/* ── Work Experience ── */}
          <section id="about" className="px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-3">Professional</h2>
                <p className="text-3xl sm:text-4xl font-bold text-white font-outfit leading-none mb-4">Work <br /><span className="text-zinc-600">Experience</span></p>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>

              <div className="lg:w-2/3">
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                  <div className="mb-5">
                    <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">Nov 2022 — Present</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Account Assistant</h3>
                    <p className="text-zinc-500 font-bold text-xs sm:text-sm tracking-widest">PRUTHA SHAH C.A. | Pune</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Proprietorship & Society Accounting',
                      'Invoicing (Purchase & Sales)',
                      'GST & TDS Liability Management',
                      'Bank Reconciliation (BRS)',
                      'Petty Cash Management',
                      'Vendors & Customers Balances',
                      'Employee Reimbursements',
                      'Client Data Follow-up'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 pro-card">
                        <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-zinc-400 text-xs font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Education ── */}
          <section id="qualification" className="px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 border-y border-zinc-900 bg-zinc-950/30 max-w-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-3">Academic</h2>
                <p className="text-3xl sm:text-4xl font-bold text-white font-outfit leading-none mb-4">Education</p>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { e: 'BCom', u: 'Savitribai Phule Pune University', y: 'March 2022', g: '67.28%' },
                  { e: 'HSC', u: 'Maharashtra Board', y: 'April 2019', g: '56.46%' },
                  { e: 'SSC', u: 'Maharashtra State Board', y: 'June 2017', g: '77.20%' },
                ].map((item, i) => (
                  <div key={i} className="pro-card group hover:bg-zinc-900/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <GraduationCap size={22} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-primary font-mono text-xs font-bold">{item.g}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{item.e}</h4>
                    <p className="text-zinc-500 text-xs font-medium mb-3">{item.u}</p>
                    <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">{item.y}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Skills ── */}
          <section id="skills" className="px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-4">
              <div>
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-2">Capabilities</h2>
                <h3 className="text-4xl sm:text-5xl font-bold font-outfit tracking-tighter text-white">Technical <span className="text-zinc-600">Toolkit</span></h3>
              </div>
              <div className="hidden sm:block text-[10px] text-zinc-600 font-black uppercase tracking-widest">Industry Standard Proficiency</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-zinc-900 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
              {['Tally 9 ERP', 'Accounting Specialist', 'Taxation Analysis', 'GST Calculation', 'TDS Liability', 'Bank Reconciliation', 'MS Excel', 'Audit Support', 'Profit Loss Admin'].map((skill, i) => (
                <div key={i} className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center group hover:bg-zinc-950 transition-all duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-primary transition-colors">
                    <Award size={16} className="text-zinc-600 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-zinc-500 group-hover:text-white transition-colors font-bold text-[10px] uppercase tracking-widest text-center leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Personal Profile ── */}
          <section className="px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 border-t border-zinc-900 max-w-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-3">Identity</h2>
                <p className="text-3xl sm:text-4xl font-bold text-white font-outfit leading-none mb-4">Personal <br /><span className="text-zinc-600">Details</span></p>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="pro-card space-y-4">
                  <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Languages Known</h4>
                  <div className="flex flex-wrap gap-2 text-white font-bold">
                    {['English', 'Hindi', 'Marathi'].map(lang => (
                      <span key={lang} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">{lang}</span>
                    ))}
                  </div>
                </div>
                <div className="pro-card space-y-4">
                  <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Interests & Hobbies</h4>
                  <div className="text-white font-bold flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>Reading & Continuous Learning</span>
                  </div>
                </div>
                <div className="pro-card sm:col-span-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div>
                      <div className="text-[9px] uppercase font-black text-zinc-600 tracking-widest mb-1">Gender</div>
                      <div className="text-white font-bold text-sm">Male</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-black text-zinc-600 tracking-widest mb-1">D.O.B</div>
                      <div className="text-white font-bold text-sm">01.07.2001</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-black text-zinc-600 tracking-widest mb-1">Status</div>
                      <div className="text-white font-bold text-sm">Unmarried</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-black text-zinc-600 tracking-widest mb-1">Nationality</div>
                      <div className="text-white font-bold text-sm">Indian</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Contact ── */}
          <section id="contact" className="px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 border-t border-zinc-950 bg-gradient-to-b from-zinc-950/10 to-primary/5 max-w-full">
            <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-white tracking-tighter">Let's work <span className="text-primary italic">together.</span></h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light max-w-xl mx-auto px-4">
                Currently available for Account Assistant roles and professional finance consultancy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 pt-6 sm:pt-10">
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-black text-zinc-600 tracking-widest">Email Address</div>
                  <a href="mailto:prasadvishal0107@gmail.com" className="text-base sm:text-xl font-bold text-white hover:text-primary transition-colors break-all">prasadvishal0107@gmail.com</a>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-black text-zinc-600 tracking-widest">Phone Number</div>
                  <a href="tel:+919284526141" className="text-base sm:text-xl font-bold text-white hover:text-primary transition-colors">+91 9284526141</a>
                </div>

              </div>
            </div>
          </section>

          {/* ── Footer ── */}
          <footer className="py-12 sm:py-20 border-t border-zinc-900 px-5 text-center">
            <div className="flex justify-center gap-6 mb-8">
              <a href="tel:+919284526141" className="p-3 pro-card rounded-full hover:text-primary hover:border-primary transition-all" title="Call Vishal"><Phone size={18} /></a>
              <a href="mailto:prasadvishal0107@gmail.com" className="p-3 pro-card rounded-full hover:text-primary hover:border-primary transition-all" title="Email Vishal"><Mail size={18} /></a>
              <a href="https://maps.google.com/?q=Pune,Maharashtra,India" target="_blank" rel="noopener noreferrer" className="p-3 pro-card rounded-full hover:text-primary hover:border-primary transition-all" title="View Location"><MapPin size={18} /></a>
              <a href="https://wa.me/919284526141" target="_blank" rel="noopener noreferrer" className="p-3 pro-card rounded-full hover:text-[#25D366] hover:border-[#25D366] transition-all" title="WhatsApp Vishal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
            <div className="text-zinc-600 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black">
              © 2026 VISHAL M. PRASAD — PERSONAL PORTFOLIO
            </div>
          </footer>

        </main>
      )}
    </div>
  );
}

export default App;
