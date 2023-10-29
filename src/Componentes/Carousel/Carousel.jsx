import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagenhome from '../images/imagen-page-inicio/image1.png';
import personamorada from '../images/imagen-page-inicio/personamorada.png';
import personamorada1 from '../images/imagen2caru.jpg';
import personamorada2 from '../images/imagen2caru2.png';

function Carrusel() {
  const images = [
    { url: personamorada, caption: 'Imagen 1' },
    { url: personamorada1, caption: 'Imagen 2' },
    { url: personamorada2, caption: 'Imagen 3' },
  ];

  return (
    <div className="di">
       <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-full md:w-auto">
                <img src={imagenhome} alt="Image" className="w-full" />
              </div>
              <p className="text-white text-base sm:text-2xl lg:text-3xl mt-2">
                Promovemos la empleabilidad y emprendimiento,
                <br /> generando nuevas oportunidades.
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carrusel;
