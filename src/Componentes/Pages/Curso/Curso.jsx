import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export function Curso() {
  const [curso, setCurso] = useState([]);
  const { titulo } = useParams();

  const getCurso = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/cursos");
    setCurso(response.data);
  };

  useEffect(() => {
    getCurso();
  }, []);

  const filtro = curso.filter((cursos) => cursos.titulo === titulo);

  return (
    <>
      <div className="">
        {filtro.map((filtro) => (
          <div>
            <div>
              <section className="w-2/5 md:w-[75%] p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-2 ml-2">
                <p className="text-center">{filtro.titulo}</p>
                <iframe
                  className="w-full bg-white aspect-video"
                  src={filtro.images}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                />
              </section>
            </div>
            <div>
              <section className="w-2/5 md:w-[75%] p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-2 ml-2 mb-2">
                <p className="text-base">Descripcion</p>
                <p>{filtro.description}</p>
              </section>
            </div>
            <div>
              <section className="w-2/5 md:w-[22%] h-full p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl mt-10 absolute inset-y-[121px] right-3">
                <p className="text-center">Videos</p>
                <div className="border-slate-950 border-2 h-[120px] m-2"></div>
                <div className="border-slate-950 border-2 h-[120px] m-2"></div>
                <div className="border-slate-950 border-2 h-[120px] m-2"></div>
                <div className="border-slate-950 border-2 h-[120px] m-2"></div>
                <div className="border-slate-950 border-2 h-[120px] m-2"></div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Curso;
