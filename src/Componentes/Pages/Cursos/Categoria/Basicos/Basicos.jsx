import React from "react";
import Card from "./Card/Card";

function Basicos() {
  return (
    <div>
      <div>
        <p className="text-3xl text-black font-normal p-5 text-center">
          Basicos
        </p>
        <p className="md:mx-28 mx-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          fugit eius sint, rerum dolor beatae illo harum obcaecati laudantium
          ipsa repellat libero deleniti modi at nihil alias. Amet, recusandae
          numquam. 
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mx-8 my-4 ">
        <Card />
      </div>

      <hr className="border-4 border-[#000] my-4 mx-6"></hr>
    </div>
  );
}

export default Basicos;
