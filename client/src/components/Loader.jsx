import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setComplete(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence onExitComplete={finishLoading}>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="flex justify-between items-end">
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500"
              >
                System Boot
              </motion.div>
              <div className="text-primary text-xs font-mono">01.0.0_v</div>
            </div>
            
            <div className="h-[2px] w-full bg-zinc-900 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full w-full bg-primary"
              />
            </div>

            <div className="flex justify-between text-zinc-600 text-[10px] font-bold uppercase">
               <span>Loading Assets</span>
               <motion.span
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 1 }}
               >
                 In Progress
               </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
