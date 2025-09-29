import { motion } from "motion/react";
import type { HiddenContainerProps, ImageContainerProps } from "../../interfaces/component";

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <div className={`relative ${props.className?.container}`}>
      <img src={props.src} alt="Not found image" className={props.className?.image} />
      <div className={`absolute ${props.className?.children}`}>
        {props.children}
      </div>
    </div>
  );
}

export const HiddenContainer = (props: HiddenContainerProps) => {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: props.active ? 1 : 0, height: props.active ? props.height : 0 }}
      exit={{ opacity: 0, height: 0 }}
    >
      {props.active && props.children}
    </motion.div>
  );
}