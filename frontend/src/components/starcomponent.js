// src/components/StarRating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ condition }) => {
  const rating = parseFloat(condition);
  const filledStars = Math.round((rating / 10) * 5);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: i < filledStars ? 'gold' : 'lightgray' }}
      />
    );
  }
  return <div>{stars}</div>;
};

export default StarRating;
