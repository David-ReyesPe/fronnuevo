import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ imagen, descripcion, titulo }) {
    return (
        <div className="di">
            <div className="xl:w-72 md:max-w-sm w-full rounded-lg overflow-hidden shadow-lg p-4 md:p-5 border-2 border-gray-200 text-center">
                <h3 className="text-[#ffbd69] font-mono text-[28px] md:text-[32px]">{titulo}</h3>
                <h3 className="text-base md:text-lg">{descripcion}</h3>
                <img className="h-40 w-full md:w-25 p-2 md:p-3 object-contain" src={imagen} alt={descripcion} />
            </div>
        </div>
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}