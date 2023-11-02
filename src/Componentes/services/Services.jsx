import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
//useContactoMutation
export const useContactoMutation = () => {
  return useMutation(
    async (data) => {
      const response = await axios.post(
        "http://localhost:8080/api/auth//enviarMensaje",
        data
      );
      return response.data;
    }
  );    
}

export const useLoginMutation = () => {
  return useMutation(async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/ingresar",
        data
      );
      return response.data.accessToken;
    } catch (error) {
      // Maneja los errores de la API aquí
      throw new Error("Nombre de usuario o contraseña incorrectos");
    }
  });
};
//
export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (userData) => {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        userData
      );
      return response.data;
    },
    {
      // Opciones de configuración de la mutación (puedes personalizar según tus necesidades)
      onMutate: () => {
        // Puedes realizar acciones en el cliente de consulta antes de la mutación aquí
      },
      onError: (error) => {
        // Puedes manejar errores aquí si es necesario
      },
      onSettled: () => {
        // Puedes realizar acciones después de que la mutación se haya resuelto aquí
        queryClient.invalidateQueries("userList"); // Invalidar la caché de la lista de usuarios si es necesario
      },
    }
  );
};

export const useCursoMutation = () => {
  return useMutation(
    async (cursoData) => {
      const response = await axios.post(
        "http://localhost:8080/api/auth/editCursos",
        cursoData
      );
      return response.data;
    }
  );    
}
