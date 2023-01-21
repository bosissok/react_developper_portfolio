import React from "react";
import "../styles/Modal.css";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ data, close }) => {
  const { title, description, imgUrl, icon, icon2 } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img className="modal_image" src={imgUrl} alt="test" />

      <motion.div className="modal_info">
        <motion.div className="modal_row">
          <motion.p className="modal_title">{title}</motion.p>
        </motion.div>
        <motion.div className="modal_row" variants={modalVariants}>
          <motion.span className="modal_icon">{icon}</motion.span>
          {icon2 && <motion.span className="modal_icon">{icon2}</motion.span>}
        </motion.div>
        <motion.div className="modal_row">
          <motion.p className="modal_desription">{description}</motion.p>
        </motion.div>
        <motion.button
          className="modal_close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal_close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
