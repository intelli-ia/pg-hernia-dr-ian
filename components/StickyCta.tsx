"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cta } from "@/components/shared";

/** Barra fixa no mobile, aparece depois da primeira dobra. */
export default function StickyCta({ label }: { label?: string } = {}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-secondary/10 bg-primary/95 p-3 backdrop-blur-md sm:hidden"
        >
          <Cta className="w-full">{label}</Cta>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
