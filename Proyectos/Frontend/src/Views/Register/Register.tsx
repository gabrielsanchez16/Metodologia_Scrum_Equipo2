import { useEffect, useState } from "react";
import { LockClosedIcon, EnvelopeIcon, UserIcon, PhoneIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm as useReactHookForm } from "react-hook-form";
import { register as RegisterApi } from '../../Utils/api';
import type { RegisterForm } from "../../Interface/auth";
import { Link, useNavigate } from "react-router";
import Loading from "../../Components/Loading/Loading";
import { Title } from "react-head";
import { EyeIcon, HouseIcon, LucideMapPinHouse } from "lucide-react";
import type { TypeWorkshop } from "../../Interface/TypeWorkshop";
import { getAllTypesWorkshop } from "../../Utils/apiTypeWorkshop";
import toast from "react-hot-toast";



export default function Register() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useReactHookForm<RegisterForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [typesWorkshop, setTypesWorkshop] = useState<TypeWorkshop[]>([]);

  const onSubmit = async (form: RegisterForm) => {
    setLoading(true);
    try {
      await RegisterApi(form);
      setSuccess("Registro exitoso. Redirigiendo a inicio de sesión...");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      } else {
        setError("Error al registrar taller");
        setTimeout(() => {
          setError(null);
        }, 3000); // Limpiar el error después de 3 segundos
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchTypes = async () => {
    setLoading(true);
    try {
      const response = await getAllTypesWorkshop();
      setTypesWorkshop(response);
    } catch (error) {
      console.log(error);
      toast.error("Error al cargar los tipos de taller");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTypes();
  }, []);
  

  return (
    <div className="relative min-h-screen flex items-center justify-center py-6 bg-black">
      <Title>Sistema de Talleres de Motos</Title>
      {/* Imagen de fondo con desenfoque suave */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(/mecanicoBack.png)`,
        }}
      ></div>

      {/* Formulario */}
      <div className="relative z-10 w-full max-w-lg mx-4 bg-[#111827] shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Crear Cuenta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Nombre del negocio
            </label>
            <div className="relative">
              <UserIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="text"
                {
                ...register("name", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                })
                }
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej. Juan Pérez"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="typeworkshop" className="block text-sm font-medium text-white mb-1">
              Tipo de negocio
            </label>
            <div className="relative">
              <UserIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <select  {
                ...register("id_type_workshop", {
                  required: "El tipo de negocio es obligatorio"
                })
                
              } className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Selecciona el tipo</option>
                {typesWorkshop?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              
            </div>
            {errors.id_type_workshop && (
              <p className="text-red-400 text-sm mt-1">{errors.id_type_workshop.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Telefono
            </label>
            <div className="relative">
              <PhoneIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="text"
                {
                ...register("phone", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "El teléfono debe tener 10 dígitos",
                  },
                })
                }
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej. 3116036789"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-white mb-1">
              Ciudad
            </label>
            <div className="relative">
              <LucideMapPinHouse className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="text"
                {
                ...register("city", {
                  required: "La ciudad es obligatoria"
                })
                }
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej. Bogotá"
              />
            </div>
            {errors.city && (
              <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-white mb-1">
              Dirección
            </label>
            <div className="relative">
              <HouseIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="text"
                {
                ...register("address", {
                  required: "La dirección es obligatoria"
                })
                }
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej. Calle 123"
              />
            </div>
            {errors.address && (
              <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Correo electrónico
            </label>
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
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej. mecanico@taller.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Contraseña
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />

              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                })}
                className={`w-full bg-gray-200 pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password
                  ? "border-red-500 ring-red-400"
                  : "border-white focus:ring-blue-500"
                  }`}
                placeholder="••••••••"
              />

              {/* Botón mostrar/ocultar */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="logo" className="block text-sm font-medium text-white mb-1">
              Subir logo (opcional)
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 text-black absolute left-3 top-2.5" />
              <input
                type="file"
                accept="image/*"
                {...register("logo")}
                className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:col-span-2 bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isSubmitting ? "Registrando..." : "Registrar"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
        )}

        {success && (
          <p className="text-green-400 text-sm mt-4 text-center">{success}</p>
        )}

        <p className="text-center text-sm text-white mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-400 font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
      {
        loading && (
          <Loading />
        )
      }
    </div>
  );
}
