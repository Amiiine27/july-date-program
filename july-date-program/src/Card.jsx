import React from 'react';
import PropTypes from 'prop-types'

function Card({ img, alt, title, desc }) {
  return (
    <div className="card">
      <img src={img} alt={alt} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{desc}</p>
    </div>
  );
}

Card.defaultProps ={
    img: "https://via.placeholder.com/",
    alt: "placeholder de substitution",
    title: "en attente de modification",
    desc: "en attente de modification"
}

export default Card;
