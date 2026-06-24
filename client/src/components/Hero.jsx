import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { Download, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-5 sm:px-8 md:px-12 lg:px-32 pt-28 pb-16 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-primary/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
        
        {/* Profile Image — shown on mobile at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group block lg:hidden w-full flex justify-center"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 mx-auto">
            <img src={profileImg} alt="Vishal Prasad" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 right-1/4 px-3 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
            9+ Months Exp.
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 sm:space-y-8 z-10 text-center lg:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Account Assistant | Finance Expert
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white font-outfit"
          >
            Vishal <br />
            <span className="text-zinc-600">M. Prasad.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mx-auto lg:mx-0"
          >
            Professional Account Assistant specializing in Taxation, GST, TDS, and Financial Reconciliation.
            Expertise in streamlining accounting processes for proprietorship firms and cooperative societies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20 text-sm sm:text-base"
            >
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="relative group/resume w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download="Vishal_Prasad_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 text-sm sm:text-base"
              >
                <Download size={18} /> Download Resume
              </a>
              {/* Owner Upload Tool */}
              <label className="absolute -top-3 -right-3 w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover/resume:opacity-100 transition-opacity hover:bg-primary hover:text-black">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const formData = new FormData();
                    formData.append('resume', file);
                    try {
                      const response = await fetch('http://localhost:5001/api/resume/upload', {
                        method: 'POST',
                        body: formData
                      });
                      if (response.ok) {
                        alert('Resume updated successfully!');
                        window.location.reload();
                      } else {
                        const errData = await response.json();
                        alert('Upload failed: ' + errData.message);
                      }
                    } catch (err) {
                      console.error('Upload error:', err);
                      alert('Upload failed. Check console for details.');
                    }
                  }}
                />
                <span className="text-[10px] font-bold">UP</span>
              </label>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 pt-6 items-center justify-center lg:justify-start border-t border-zinc-900"
          >
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin size={15} className="text-primary shrink-0" /> Pune, Maharashtra
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Phone size={15} className="text-primary shrink-0" /> +91 9284526141
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm">
              <Mail size={15} className="text-primary shrink-0" /> prasadvishal0107@gmail.com
            </div>
          </motion.div>
        </div>

        {/* Profile Image — desktop right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group hidden lg:block shrink-0"
        >
          <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="relative w-[400px] h-[520px] xl:w-[450px] xl:h-[580px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img src={profileImg} alt="Vishal Prasad" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-6 right-6 p-5 border-l-4 border-primary bg-zinc-950/60 backdrop-blur-md rounded-xl">
              <div className="text-primary text-2xl font-bold font-outfit mb-1">9+ Months</div>
              <div className="text-zinc-500 text-[11px] uppercase tracking-widest font-black">Experience as Account Assistant</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
