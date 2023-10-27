import React from 'react';
import PropTypes from 'prop-types';
export default function Card({ imagen, descripcion }) {
    return (

        <div className="relative p-4">
            <div className="bg-slate-400 xl:w-55 md:max-w-sm overflow-hidden shadow-lg border-2 border-slate-400">
                <img className='object-cover h-96 w-full' src={imagen} alt={descripcion} />
                <h3 className='absolute  top-52 left-0 p-16 text-lg'>{descripcion}</h3>
            </div>
        </div>
    )
}

Card.propTypes = {
    descripcion: PropTypes.string.isRequired,
}