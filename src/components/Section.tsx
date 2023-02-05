import { motion } from "framer-motion";
import { SectionType } from "../utils/types";

export default function Section(props: SectionType) {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, type: "tween" }}
    >
      {children}
    </motion.div>
  );
}
