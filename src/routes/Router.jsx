import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom";
import { Root } from "../Componentes/Root/Root";
import Home from "../Componentes/Pages/Home/Home";
import Cursos from "../Componentes/Pages/Cursos/Cursos";
import Intructores from "../Componentes/Pages/Instructores/Instructores";
import Contacto from "../Componentes/Pages/Contacto/Contacto";
import IniciarSesion from "../Componentes/Login/IniciarSesion/IniciarSesion";
import Registrarme from "../Componentes/Login/Registro/Registro";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Perfil from "../Componentes/Pages/Perfil/index";
import RecuperarContraseña from "../Componentes/Login/IniciarSesion/OlvideContraseña/RecuperarContraseña";
import NuevaContraseña from "../Componentes/Login/IniciarSesion/OlvideContraseña/NuevaContraseña";
import EditCursos from "../Componentes/Pages/EditCursos/index";
import Curso from "../Componentes/Pages/Curso/Curso";
import CursosAdmin from "../Componentes/Pages/CursosAdmin/CursosAdmin";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />} path="/">
        <Route element={<Home />} index />
        <Route element={<PrivateRouter />}>
          <Route element={<Cursos />} path="/cursos" />
          <Route element={<CursosAdmin/>}path="/CursosAdmin"/>
          <Route element={<Intructores />} path="/instructores" />
          <Route element={<Curso />} path="/Curso/:titulo"/>
        </Route>
        <Route element={<Contacto />} path="/contactos" />
        <Route element={<EditCursos />} path="/EditCursos" />
        <Route element={<Perfil />} path="/perfil" />
        <Route element={<RecuperarContraseña />} path="/RecuperarContraseña" />
        <Route element={<NuevaContraseña />} path="/reset-password" />
        <Route element={<IniciarSesion />} path="/login" />
        <Route element={<Registrarme />} path="/registrarme" />
      </Route>
    </>
  )
);
