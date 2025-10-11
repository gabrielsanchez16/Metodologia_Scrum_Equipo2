import axios, { AxiosError } from "axios";
import type { resetForm } from "../Views/ResetPassword/ResetPassword";

export const resetPassword = async (form: resetForm) =>{
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    try {
        const response = await axios.post(`${apiUrl}/workshop/reset-password`, { email: form.email }, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data.message;
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        throw new Error(
            axiosError.response?.data?.message || "Error al reiniciar contraseña"
        );
    }
}
