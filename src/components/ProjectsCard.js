import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectsCard = ({title, description, imgUrl}) => {
    return (
        // <Col size={12} sm={6} md={4} >
        <Col size={12} sm={6} >
            <div className="proj-imgbx">
                <img src={imgUrl} alt='pic' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};

export default ProjectsCard;