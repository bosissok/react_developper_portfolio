import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
// import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ProjectsCard = ({ open, data }) => {
  const [isSelected, setSelected] = useState(false);
  const controls = useAnimation();
  const { title, description, imgUrl } = data;

  useEffect(() => {
    controls.start({
      scale: isSelected ? 1 : 0.95,
      transition: { duration: 0.2 },
    });
  }, [isSelected, controls]);

  const handleHover = () => {
    setSelected((prevState) => !prevState);
  };

  return (
    <Col size={12} sm={6}>
      <motion.div
        className="proj-imgbx"
        animate={controls}
        onHoverStart={handleHover}
        onHoverEnd={handleHover}
        onClick={open}
        layout={true}
        key={title}
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
