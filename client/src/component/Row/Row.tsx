import React from "react";
import { motion } from "framer-motion"
import "./Row.scss";

const Row: React.FC<any> = ({
  Left, 
  Right, 
  rightWidth = 6,
  leftWidth = 6,
}) => {

  return (
    <div className="row-wrapper">
      <motion.div 
        animate={{x: 0, opacity: 1}}
        initial={{x: "-100%"}}
        transition={{duration: 0.7, opacity: 0}}
        className={`right col-12 col-lg-${leftWidth}`}
      >
        { Left }
      </motion.div>
      <motion.div 
        animate={{x: 0, opacity: 1}}
        initial={{x: "100%"}}
        transition={{duration: 0.7, opacity: 0}}
        className={`right col-12 col-lg-${rightWidth}`}
      >
        { Right }
      </motion.div>
    </div>
  )
};

export default Row;
