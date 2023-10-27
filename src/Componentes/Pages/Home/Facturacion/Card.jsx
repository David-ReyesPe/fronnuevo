import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ descripcion }) {
  return (
    <div className="border-x-2 border-l-[#c7c6c6] border-solid p-4 md:p-8">
      <h3 className="text-left text-[#412a56] text-base md:text-lg">{descripcion}</h3>
    </div>
  );
}

Card.propTypes = {
  descripcion: PropTypes.string.isRequired,
};