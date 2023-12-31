import React, { useEffect, useState } from "react";
import axios from "axios";

export function Cursos() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isImageVisible, setImageVisible] = useState(true);
  const [currentCard, setCurrentCard] = useState(null);

  const handleClick = (card) => {
    setCurrentCard(card);
    const iframe = document.querySelector("iframe");
    iframe.onload = function () {
      iframe.play();
    };
    setIsVideoPlaying(true);
    setImageVisible(false);
  };

  const [cursos, setCursos] = useState([]);

  const getCursos = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/cursos");
    setCursos(response.data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  const filtro = cursos.filter((curso) => curso.categoria === "intermedio");
  

  return (
    <div>
      <div className="justify-between gap-4 xl:gap-14 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 :w-[1400px] md:ml-11">
        {filtro.map((filtro) => (
          <div
            class="md:w-96 h-[352px] rounded-2xl overflow-hidden bg-[#fff] shadow-lg inline-block hover:scale-105 transition duration-700"
            onMouseEnter={() => handleClick(filtro)}
            onMouseLeave={() => {
              setIsVideoPlaying(false);
              setImageVisible(true);
            }}
          >
            <img
              class="w-full h-64"
              src={filtro.images}
              alt="Sunset in the mountains"
              style={
                !isVideoPlaying || currentCard !== filtro
                  ? {}
                  : { display: "none" }
              }
            />

            <iframe
              class="w-full h-64 aspect-video"
              width="560"
              height="315"
              src={filtro.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={
                !isVideoPlaying || currentCard !== filtro
                  ? { display: "none" }
                  : {}
              }
            ></iframe>

            <div class="px-6 py-4 h-24">
              <div class="font-bold text-lg mb-2 text-center">
                {filtro.titulo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
