import React from "react";
import { motion } from "framer-motion";
interface Props {
  filters: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const Filters = ({ filters, filter, setFilter }: Props) => {
  return (
    <motion.div
      id="filters"
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, amount: "all" }}
      whileInView={{ opacity: [0, 0.2, 0.4, 7, 1], y: 0 }}
    >
      {filters.map((_filter) => (
        <div
          key={_filter}
          className={_filter === filter ? "active" : ""}
          onClick={() => setFilter(_filter)}
        >
          {_filter}
        </div>
      ))}
    </motion.div>
  );
};

export default Filters;
