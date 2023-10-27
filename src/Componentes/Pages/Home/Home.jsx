import React from 'react'
import Capacitaciones from './Capacitaciones/Capacitaciones';
import QuienesSomos from './QuienesSomos/QuienesSomos';
import Proposito from './Proposito/Proposito';
import MisionVision from './Mision-Vision/Mision-Vision';
import Aprendizaje from './Aprendizaje/Aprendizaje';
import Corporativo from './Corporativo/Corporativo';
import Beneficio from './Beneficio/Beneficio';
import Facturacion from './Facturacion/Facturacion';
// imagenes
import imagenhome from '../../images/imagen-page-inicio/image1.png';
import personamorada from '../../images/imagen-page-inicio/personamorada.png';
function Home() {
  return (
    <div className="di">
      <div className="lg:pt-14 lg:pb-10 lg:justify-center items-center text-center bg-cover bg-center p-4 sm:p-5 lg:p-5" style={{ backgroundImage: `url(${personamorada})` }}>
        <div className="flex justify-center object-contain">
          <img className="w-full md:w-auto" alt="Image" src={imagenhome} />
        </div>
        <p className="text-white font-['Open_Sans'] text-base sm:text-2xl lg:text-3xl">
          Promovemos la empleabilidad y emprendimiento,
          <br /> generando nuevas oportunidades.
        </p>
      </div>
      <Capacitaciones />
      <QuienesSomos />
      <Proposito />
      <MisionVision />
      <Aprendizaje />
      <Corporativo />
      <Beneficio />
      <Facturacion />
    </div>
  )

}

export default Home