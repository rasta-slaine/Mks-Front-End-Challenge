import { motion } from "framer-motion";
import './index.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="loading-spinner"
      />
    </div>
  );
};

export default LoadingSpinner;