import React from 'react'
import Card from './Card';
import {
  Datos1,
  Datos2,
} from './Datos';
import Facturacionimg from '../../../images/Facturacion-Imagen/factu.png';


function Facturacion() {
  return (
    <div className="facturacion">
      <div className="text-[#412a56] font-bold text-[32px] text-center p-5">FACTURACIÓN</div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <img className="object-contain h-[400px] md:w-1/4" alt="Ellipse outline" src={Facturacionimg} />
        <div className="flex flex-col md:flex-row max-w-full p-5">
          <Card descripcion={Datos1[0].descripcion} />
          <div className="md:pl-5">
            {Datos2.map((item) => (
              <Card key={item.descripcion} descripcion={item.descripcion} />
            ))}
          </div>
          <Card descripcion={Datos1[1].descripcion} />
        </div>
      </div>
    </div>
  )
}

export default Facturacion