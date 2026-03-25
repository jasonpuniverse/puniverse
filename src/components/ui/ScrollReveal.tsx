import { motion, useReducedMotion } from 'motion/react';

const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Single element: fades up as it enters the viewport. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

/** Wrapper that staggers its direct children as they enter the viewport. */
export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className,
  stagger = 0.09,
}) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

/** Individual item inside a StaggerReveal. */
export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
