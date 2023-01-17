import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

const ProjectsCard = ({ open, data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const controls = useAnimation();
  const { title, description, imgUrl } = data;

  return (
    <Col size={12} sm={6}>
      <motion.div
        className="proj-imgbx"
        animate={controls}
        onHoverStart={() => {
          setIsSelected(!isSelected);
          controls.start({
            scale: isSelected ? 1 : 0.95,
            transition: { duration: 0.2 },
          });
        }}
        onClick={open}
      >
        <motion.img src={imgUrl} alt="pic" />
        <motion.div className="proj-txtx">
          <motion.h4 className="title-container">{title}</motion.h4>
          <motion.span>{description}</motion.span>
        </motion.div>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;
