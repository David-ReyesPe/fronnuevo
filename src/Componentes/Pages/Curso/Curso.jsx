// @flow
import React from "react";

export function Curso() {
  return (
    <>
      <div className="">
        <div>
          <section className="border-slate-950 border-2 h-[500px] w-[1000px] m-1">
            <p className="text-center">Video Principal</p>
            <div className="border-slate-950 border-2 h-[450px] m-2"></div>
          </section>
        </div>
        <div>
          <section className="border-slate-950 border-2 h-[200px] w-[1000px] m-1 p-2">
            <p className="text-center">Descripcion</p>
            <div className="border-slate-950 border-2 h-[155px] p-2 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis expedita deleniti minus fugit odit similique
                reprehenderit. Ducimus in iure minima cumque inventore libero
                laudantium et porro? Laboriosam, tenetur! Totam, iure!Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                expedita deleniti minus fugit odit similique reprehenderit.
                Ducimus in iure minima cumque inventore libero laudantium et
                porro? Laboriosam, tenetur! Totam, iure!
              </p>
            </div>
          </section>
        </div>
        <div>
          <section className="border-slate-950 border-2 h-[704px] w-[470px] m-1 absolute inset-y-[121px] right-0">
            <p className="text-center">Videos</p>
            <div className="border-slate-950 border-2 h-[120px] m-2"></div>
            <div className="border-slate-950 border-2 h-[120px] m-2"></div>
            <div className="border-slate-950 border-2 h-[120px] m-2"></div>
            <div className="border-slate-950 border-2 h-[120px] m-2"></div>
            <div className="border-slate-950 border-2 h-[120px] m-2"></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Curso;
