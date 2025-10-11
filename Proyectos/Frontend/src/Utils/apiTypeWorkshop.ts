import axios, { AxiosError } from "axios";

export const getAllTypesWorkshop = async ()=>{
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    try {
        const response = await axios.get(`${apiUrl}/typeWorkshop`, {
            headers: {
                "Content-Type": "application/json"
            },
        });

        return response.data.typesWorkshop;
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        throw new Error(
            axiosError.response?.data?.message || "Error al obtener los tipos"
        );
    }
}