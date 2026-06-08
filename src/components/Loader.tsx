import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-16 w-16 rounded-full border-2 border-primary/20 border-t-primary"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 font-display text-xl text-gradient-gold"
            >
              Rosahai Mahal
            </motion.p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Preparing your table…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
