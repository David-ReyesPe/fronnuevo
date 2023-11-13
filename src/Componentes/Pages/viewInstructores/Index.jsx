import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorCard({ instructor, onUpdateStatus, onDeleteInstructor }) {
  const [isButtonActive, setButtonActive] = useState(
    instructor.estado === "Habilitado"
  );
  const [originalStatus, setOriginalStatus] = useState(instructor.estado);

  const handleButtonClick = () => {
    const newStatus = isButtonActive ? "Deshabilitado" : "Habilitado";
    setButtonActive(!isButtonActive);
    onUpdateStatus(instructor.idInstructores, newStatus);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/auth/instructores/editar/${instructor.idInstructores}`,
        {
          estado: isButtonActive ? "Habilitado" : "Deshabilitado",
        }
      );
      if (response.status === 200) {
        setOriginalStatus(isButtonActive ? "Habilitado" : "Deshabilitado");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Manejar errores si es necesario
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/auth/instructores/eliminar/${instructor.idInstructores}`
      );
      if (response.status === 200) {
        // Lógica adicional después de la eliminación (si es necesario)
        onDeleteInstructor(instructor.idInstructores);
      }
    } catch (error) {
      console.error("Error al intentar eliminar el instructor:", error);
      // Manejar errores si es necesario
    }
  };

  const handleCancelClick = () => {
    // Restaurar el estado original
    setButtonActive(originalStatus === "Habilitado");
  };

  return (
    <div className="xl:w-96 md:max-w-sm w-full rounded-lg overflow-hidden shadow-lg p-4 md:p-5 border-2 border-gray-200">
      <img
        className="object-contain mx-auto"
        src={instructor.images}
        alt={instructor.nombre}
      />
      <h4 className="text-black font-extrabold text-xl mt-2 text-center">
        {instructor.nombre}
      </h4>
      <h2 className="text-black font-bold text-lg mt-1 text-center">
        {instructor.titulos}
      </h2>
      <h3 className="text-base font-normal md:text-lg text-left">
        {instructor.description}
      </h3>
      <br />
      <button
        className={`rounded border-2 p-2 ${
          isButtonActive
            ? "text-white bg-[#9A1B76] hover:bg-[#c23099]"
            : "hover:bg-[#9A1B76] bg-[#c23099]"
        }`}
        onClick={handleButtonClick}
      >
        {isButtonActive ? "Habilitado" : "Deshabilitado"}
      </button>
      <div className="mt-4">
        {isButtonActive !== (originalStatus === "Habilitado") && (
          <>
            <button
              className="mr-2 bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
              onClick={handleSaveClick}
            >
              Guardar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg px-4 py-2 focus:outline-none"
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          </>
        )}
        <button
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
          onClick={handleDeleteClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default function Card() {
  const [Instructores, setInstructores] = useState([]);

  const getInstructores = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/auth/Instructores"
    );
    setInstructores(response.data);
  };

  useEffect(() => {
    getInstructores();
  }, []);

  const handleStatusUpdate = (instructorId, newStatus) => {
    const updatedInstructores = Instructores.map((instructor) =>
      instructor.idInstructores === instructorId
        ? { ...instructor, estado: newStatus }
        : instructor
    );
    setInstructores(updatedInstructores);
  };

  const handleDeleteInstructor = (instructorId) => {
    const updatedInstructores = Instructores.filter(
      (instructor) => instructor.idInstructores !== instructorId
    );
    setInstructores(updatedInstructores);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-14">
      {Instructores.map((instructor) => (
        <InstructorCard
          key={instructor.idInstructores}
          instructor={instructor}
          onUpdateStatus={handleStatusUpdate}
          onDeleteInstructor={handleDeleteInstructor}
        />
      ))}
    </div>
  );
}
