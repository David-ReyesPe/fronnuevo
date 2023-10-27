import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import imageninicio from "../../images/Iniciarses-imagen/InicioImagen.png";
import { useLoginMutation } from "../../services/Services";

function IniciarSesion() {
  const [nombre, setUser] = useState("");
  const [apellido, setapellido] = useState("");
  const [password, setPwd] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  //toast tipo alerta
  const displayLoginError = () => {
    toast.error("!Error al Iniciar Sesión verifica tu usuario o contraseña.!");
  };
  const token = window.localStorage.getItem("token");
  //guardo el nombre en el localstorage para en el navbar cuando lo llame pueda traer el nombre de la persona logueada
  const nombreUsuario = JSON.stringify(nombre);
  localStorage.setItem("nombre", nombreUsuario);

  //constante para validar si hay algun elemento que coincida con la llave principal
  const loginMutation = useLoginMutation();
  //Parte del boton
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !password) {
      setError(true);
      return;
    }
    try {
      const accessToken = await loginMutation.mutateAsync({ nombre, password });
      // Si la autenticación es exitosa, se obtiene el token de acceso
      if (accessToken) {
        window.localStorage.setItem("token", accessToken);
        setUser("");
        setPwd("");
        setError(false);
        navigate("/");
      }
    } catch (error) {
      // Captura y maneja los errores de autenticación aquí
      console.error(error.message); // Esto mostrará "Nombre de usuario incorrecto" o "Contraseña incorrecta"
      displayLoginError(); // Muestra la alerta de error
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        {token ? (
          <section>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full"
            >
              Ya has iniciado sesion
            </button>
          </section>
        ) : (
          <section>
            <div className="flex flex-col md:flex-row justify-center p-10 gap-4 sm:gap-6 md:gap-8">
              <img
                className="rounded-lg w-full sm:w-1/2 lg:w-1/3 md:w-[300px] md:h-[300px] "
                alt="login it's time"
                src={imageninicio}
              />
              <div className="w-full max-w-md">
                <form
                  className="bg-white shadow-md rounded border-2 px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Nombre
                    </label>
                    <input
                      placeholder="Nombre"
                      type={"text"}
                      name="nombre"
                      value={nombre}
                      onChange={(e) => setUser(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-[#9A1B76] text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Contraseña"
                      type={"password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPwd(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                      Iniciar Sesion
                    </button>
                    <a
                      className="inline-block align-baseline font-bold text-sm text-[#9A1B76] hover:text-[#db43b0]"
                      href="/RecuperarContraseña"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="py-2 text-lg text-center">
                    {error && <p>Todos los campos son obligatorios</p>}
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default IniciarSesion;
