import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm as useReactHookForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Title } from "react-head";
import { resetPassword } from "../../Utils/apiResetPass";
import toast from "react-hot-toast";



export interface resetForm {
    email: string
}


export default function ResetPassword() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useReactHookForm<resetForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

 const onSubmit = async (form: resetForm) => {
  setLoading(true);
  try {
    const response = await resetPassword(form);
    toast.success(response);
    navigate("/login");
  } catch (err) {
    console.error(err);
    toast.error(err instanceof Error ? err.message : String(err));
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Title>Sistema de Talleres de Motos</Title>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(/mecanicoBack.png)` }}
      ></div>

      <div className="relative z-10 w-full max-w-md mx-4 bg-[#111827] shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Recuperar Acceso</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* EMAIL */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Correo electrónico</label>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="email"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo no válido"
                  }
                })}
                className={`w-full bg-gray-200 pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 ring-red-400" : "border-white focus:ring-blue-500"}`}
                placeholder="ej. mecanico@taller.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>


        <div className="text-center text-sm text-white mt-6">
          <Link to="/login" className="hover:text-blue-400 font-medium hover:underline">
            Iniciar Sesión
          </Link>
        </div>

        <p className="text-center text-sm text-white mt-6">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-400 font-medium hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
      {
        loading && (
          <Loading/>
        )
      }
    </div>
  );
}
