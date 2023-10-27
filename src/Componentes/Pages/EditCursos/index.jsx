import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCursoMutation } from "../../services/Services";
import { ToastContainer, toast } from "react-toastify";

function index() {
  const [error, setError] = useState(false);
  const [curso, setCurso] = useState({
    categoria: "",
    titulo: "",
    description: "",
    images: "",
  });

  const resetCurso = () => {
    setCurso({
      categoria: "",
      titulo: "",
      description: "",
      images: "",
    });
  };
  const navigate = useNavigate();

  const { categoria, titulo, description, images } = curso;

  const { mutate, isLoading, isError } = useCursoMutation();

  const onInputChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };
  const displayRegistrationNotification = () => {
    toast.success("Exitoso");
    // Redirige a la página deseada después del tiempo de espera
    setTimeout(() => {
      navigate("/Cursos");
    }, 1250); // Redirige a /login después de 3 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !description || !categoria) {
      setError(true);
      return;
    }
    curso.images = encodedImage;
    try {
      await mutate(curso, {
        onSuccess: () => {
          resetCurso();
          setError(false);
          displayRegistrationNotification();
        },
      });
    } catch (error) {
      // Maneja los errores aquí si es necesario
    }
  };

  const options = [
    { value: "basico" },
    { value: "intermedio" },
    { value: "avanzados" },
  ];

  const [encodedImage, setEncodedImage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const encodedData = event.target.result;
      setEncodedImage(encodedData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form className="h-full" onSubmit={handleSubmit}>
        <div className="h-full p-5">
          <div className="block md:flex justify-center">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md border border-zinc-300 rounded-3xl ml-2">
              <input
                value={titulo}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="titulo"
                placeholder="Titulo"
                className="mb-4  block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
              />
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-[#9A1B76] hover:text-[#db43b0] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#9A1B76] focus-within:ring-offset-2 "
                    >
                      <span>Sube</span>
                      <input
                        id="file-upload"
                        type={"file"}
                        name="images"
                        onChange={handleFileChange}
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">o suelta tu video aqui</p>
                  </div>
                </div>
              </div>
              <p>{encodedImage}</p>
              <input
                value={description}
                onChange={(e) => onInputChange(e)}
                type={"text"}
                name="description"
                placeholder="Descripcion"
                className="mb-4 w-full h-24 rounded-lg border mt-4 border-gray-300 px-4 py-3 focus:outline-none"
              />
              <select
                className="mb-4 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
                value={categoria}
                onChange={(e) =>
                  setCurso({ ...curso, categoria: e.target.value })
                }
              >
                <option>Selecciona una categoria</option>
                {options.map((option) => (
                  <option value={option.value}>{option.value}</option>
                ))}
              </select>
              <button
                disabled={isLoading}
                type="submit"
                className="bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-lg px-4 py-3 focus:outline-none"
              >
                {isLoading ? "Creando..." : "Crear"}
              </button>
            </div>
            <div className="py-2 text-lg text-center">
              {error && <p>Todos los campos son obligatorios</p>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default index;
