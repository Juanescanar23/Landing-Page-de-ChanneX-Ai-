"use client";

import { motion, useInView } from "framer-motion";
import { type PropsWithChildren, useRef } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  amount?: number;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y, x, scale }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
