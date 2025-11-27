import { ArrowRight, CheckCircle, Wrench, BarChart3 } from "lucide-react";

const GuideWorkshop = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-10 flex flex-col items-center">
      
      {/* Header */}
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight px-2">
          Sistema Financiero Inteligente para Talleres Mecánicos
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 px-2">
          Organiza, proyecta y optimiza las finanzas de tu taller con una herramienta diseñada
          para la realidad colombiana.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-5 sm:p-8 mt-10 space-y-6">

        <div className="flex items-center gap-3">
          <Wrench className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            ¿Qué incluye?
          </h2>
        </div>

        <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
          {[
            "💰 Distribución automática de ingresos (editable).",
            "👨‍🔧 Cálculo de sueldo propio y prestaciones sociales.",
            "🧾 Proyección de costos legales: DIAN, facturación, seguridad industrial.",
            "🛠 Fondo para emergencias, herramientas y mantenimiento.",
            "👥 Cálculo de nómina para empleados.",
            "📊 Escenarios de crecimiento: 3M → 7M → 11M → 15M → 19M.",
            "📈 Tablas de ahorro, proyecciones y balance mensual."
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* Mission Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              ¿Por qué hicimos esto?
            </h3>
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Porque sabemos que manejar un taller <strong>no es fácil</strong>. Los gastos, impuestos, 
            proveedores, herramientas, empleados y costos ocultos pueden volverse un caos si 
            no existe un sistema claro.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-semibold">
            System Workshop creó esta herramienta para ayudarte, instruirte y acompañarte 
            para que gestiones, financies y hagas crecer tu taller sin morir en el intento.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="https://guiatalleres.netlify.app/"
            target="_blank"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition text-white px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg"
          >
            Probar la Herramienta
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-500 mt-6 text-center">
        🚀 Proyecto educativo y práctico creado para talleres mecánicos en Colombia.
      </p>
    </div>
  );
};

export default GuideWorkshop;
