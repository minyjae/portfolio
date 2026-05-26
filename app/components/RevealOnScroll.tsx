"use client";

import { useInView } from "react-intersection-observer";

export const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`tw:transition-all tw:duration-700 tw:ease-out ${
        inView
          ? "tw:opacity-100 tw:translate-y-0"
          : "tw:opacity-0 tw:translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};
