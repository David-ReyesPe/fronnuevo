import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ imagen, descripcion, nombre, ingeniero }) {
    return (
        <div className="p-14">
            <div className='xl:w-96 md:max-w-sm w-full rounded-lg overflow-hidden shadow-lg p-4 md:p-5 border-2 border-gray-200 '>
                <img className="object-contain mx-auto " src={imagen} alt={descripcion} />
                <h4 className='text-black font-extrabold text-xl mt-2 text-center'>{nombre}</h4>
                <h2 className='text-black font-bold text-lg mt-1 text-center'>{ingeniero}</h2>
                <h3 className='text-base font-normal md:text-lg text-left'>{descripcion}</h3>
            </div>
        </div>
    )
}

Card.propTypes = {
    ingeniero: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}