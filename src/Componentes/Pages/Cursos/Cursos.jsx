import React from "react";
import imagenhome from "../../images/imagen-page-inicio/image1.png";
import personamorada from "../../images/imagen-cursos/imagencursos.png";
import Card from "./Card/Card";
import Buscador from "./Buscador/Buscador";
import Destacado from "./Destacado/Destacado";
import Basicos from "./Categoria/Basicos/Basicos"
import Intermedio from "./Categoria/Intermedio/Intermedio";
import Avanzado from "./Categoria/Avanzados/Avanzados";
function Cursos() {
  return (
    <div className="di">
      <div
        className="lg:pt-14 lg:pb-10 lg:justify-center items-center text-center bg-cover bg-center p-4 sm:p-5 lg:p-5"
        style={{ backgroundImage: `url(${personamorada})`, height: "800px" }}
      >
        <div className="flex justify-center object-contain p-10">
          <img
            className="w-full md:w-auto h-auto"
            alt="Image"
            src={imagenhome}
          />
        </div>
        <p className="text-white font-['Open_Sans'] text-base sm:text-2xl lg:text-3xl">
          Descubre un mundo de posibilidades y abre nuevas
          <br /> puertas con nuestros cursos en línea.
        </p>
        <Card />
      </div>
      <Buscador />
      <Destacado />
      <Basicos />
      <Intermedio />
      <Avanzado />
    </div>
  );
}

export default Cursos;
