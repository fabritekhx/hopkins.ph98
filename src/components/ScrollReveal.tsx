import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'blur-in' | 'flip-up';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 850,
  className = '',
  once = true,
}: ScrollRevealProps) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay ? delay.toString() : undefined}
      data-aos-duration={duration ? duration.toString() : undefined}
      data-aos-once={once ? 'true' : 'false'}
      className={className}
    >
      {children}
    </div>
  );
}
