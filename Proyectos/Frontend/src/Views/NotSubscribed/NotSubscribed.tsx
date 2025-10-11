// views/NotSubscribed.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Loading from '../../Components/Loading/Loading';
import type { Suscription } from "../../Interface/Suscription";
import toast from "react-hot-toast";
import { getAllSuscriptions } from "../../Utils/apiSuscription";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { editWorkshopSuscription } from "../../Utils/apiWorkshop";
import { useNavigate } from "react-router";



const NotSubscribed = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false)
  const [suscriptions, setSuscriptions] = useState<Suscription[]>([])
  const navigate = useNavigate();

  const handleWhatsApp = async (plan: Suscription) => {

    if (plan.id === "87fd7fc4-fd69-4644-9d58-b13156f33670" && user) {
      await editWorkshopSuscription(plan.id, user!.id);
      toast.success("Te has suscrito al sistema correctamente. Logueate para continuar.");
      localStorage.clear();
      navigate("/login")
    } else {
      const message = `Hola, soy el taller "${user ? user.name : "Nombre de tu taller"}". ${user ? "Me registré en el sistema": "Estoy interesado en el sistema"} y quiero suscribirme al plan "${plan.name}".`;
      const phoneNumber = "3116036787";
      const url = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(message)}`;
      localStorage.clear();
      navigate("/login")
      window.open(url, "_blank");
    }
  };

  const fetchSuscription = async () => {
    setLoading(true);
    try {
      const response = await getAllSuscriptions();
      setSuscriptions(response);
    } catch (error) {
      console.log(error);
      toast.error("Error al cargar las suscripciones");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchSuscription();
  }, []);


  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://formaelx.com/media/images/cursos_cursos/curso_area_163.png')`,
      }}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 z-10 flex flex-col justify-center items-center px-4 py-10 bg-black/70 backdrop-blur-sm"
      />


      <div className="relative z-10 w-full max-w-6xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Tu cuenta no está suscrita
        </h1>
        <p className="text-white mb-10 text-base md:text-lg">
          Elige un plan para continuar
        </p>

        {/* Grid responsivo */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          className="py-10"
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            1024: { slidesPerView: 3 }, // lg
          }}
        >
          {suscriptions.map((plan, i) => {
            const beneficios = JSON.parse(plan.benefits as unknown as string) as string[];

            return (
              <SwiperSlide key={i}>
                <div
                  className={`rounded-2xl h-full p-6 shadow-lg transition transform hover:scale-102 flex flex-col justify-between ${plan.id === "cf121b91-aa3c-4c31-b2aa-346c4f6d8170"
                    ? "bg-white border-4 border-blue-600"
                    : "bg-white border border-gray-200"
                    }`}
                >
                  {plan.id === "cf121b91-aa3c-4c31-b2aa-346c4f6d8170" && (
                    <div className="text-xs md:text-sm text-white bg-blue-600 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                      Más popular
                    </div>
                  )}

                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                      {plan.name}
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                      {new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      }).format(plan.price)}
                    </p>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                      {plan.description}
                    </p>

                    <ul className="text-left mt-4 space-y-2 text-gray-700 text-sm md:text-base">
                      {beneficios.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          ✅ <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="mt-6 w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    onClick={() => handleWhatsApp(plan)}
                  >
                    Suscribirme
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
      {
        loading && <Loading />
      }
    </div>

  );
};

export default NotSubscribed;
