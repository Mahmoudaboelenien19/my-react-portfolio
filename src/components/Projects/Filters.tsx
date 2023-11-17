import { motion } from "framer-motion";
interface Props {
  filters: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const Filters = ({ filters, filter, setFilter }: Props) => {
  return (
    <div id="filters">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: false }}
        whileInView={{ opacity: [0, 0.4, 1], y: [15, 0] }}
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
      </motion.span>
    </div>
  );
};

export default Filters;
