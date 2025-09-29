import { motion } from "motion/react";
import type { Children } from "../../interfaces/component";
import type { ElementTranstionProps } from "../../interfaces/animation";

export const PageWrapper = ({
  children,
}: {
  children?: Children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export const PageTransition = ({
  children, className
}: {
  children?: Children,
  className?: string
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: .5 }}
    >
      {children}
    </motion.div>
  );
}

export const ElementTranstion = (props: ElementTranstionProps) => {
  return (
    <motion.div
      className={props.className}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: props.x, y: props.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: props.duration, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  )
}