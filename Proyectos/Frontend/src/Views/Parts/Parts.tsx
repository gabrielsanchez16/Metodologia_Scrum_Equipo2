import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { User } from "../../Interface/auth"

const workshopsData = [
    {
        id: "423423",
        name: "Taller Mecánico El Rápido",
        city: "Bogotá",
        address: "Calle 123 #45-67",
        email: "contacto@elrapido.com",
        phone: "3001234567",
        logo: "https://disprone.com/wp-content/uploads/2024/10/taller_Honda-PG.jpg"
    },
    {
        id: "4342342",
        name: "Moto Service Medellín",
        city: "Medellín",
        address: "Carrera 50 #12-34",
        email: "info@motoservice.com",
        phone: "3019876543",
        logo: "https://www.encuentraloenputumayo.com/wp-content/uploads/2017/12/almacen-taller-moto-arias-motoclicletas-motos-repuestos-accesorios-lujo-pintura-reparacion-tecnica-2-4-tiempos-orito-putumayo-colombia-5.jpg"
    }
    , {
        id: "090212",
        name: "Taller de Motos La 30",
        city: "Cali",
        address: "Avenida 30 #10-20",
        email: "info@tallermotosla30.com",
        phone: "3021234567",
        logo: "https://www.tallermotosla30.com/wp-content/uploads/2024/10/taller_motos_la_30.jpg"
    }
]

const Parts = () => {
    const [search, setSearch] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selected, setSelected] = useState<User>()
    const [form, setForm] = useState({ name: "", phone: "", service: "" })
    const [city, setCity] = useState("")

    const openModal = (workshop: User) => {
        setSelected(workshop)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setForm({ name: "", phone: "", service: "" })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Datos enviados:", { ...form, workshop: selected })
        closeModal()
    }

    const filtered = workshopsData.filter((item) => {
        return (
            (search === "" || item.name.toLowerCase().includes(search.toLowerCase())) &&
            (city === "" || item.city.toLowerCase() === city.toLowerCase())
        )
    })

    const cities = [...new Set(workshopsData.map((w) => w.city))]

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Título */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                    🔧 Encuentra almacenes de repuestos de confianza
                </h1>
                <p className="text-lg text-gray-600">
                    Explora los mejores almacenes de repuestos en tu ciudad
                </p>
            </div>

            {/* Filtros */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Todas las ciudades</option>
                    {cities.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {/* Grid de talleres */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border border-gray-100"
                    >
                        {/* Imagen */}
                        <div className="relative">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                                {item.city}
                            </span>
                        </div>

                        {/* Info */}
                        <div className="p-6 flex flex-col justify-between ">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                                <p className="text-sm text-gray-500">{item.address}</p>
                            </div>

                            <div className="mt-4 space-y-1 text-sm text-gray-600">
                                <p>📧 <a href={`mailto:${item.email}`} className="hover:text-indigo-600">{item.email}</a></p>
                                <p>📞 <a href={`tel:${item.phone}`} className="hover:text-indigo-600">{item.phone}</a></p>
                            </div>

                            {/* Botón de acción */}
                            <div className="mt-6">
                                <button type="button"  onClick={() => openModal(item)} className="w-full cursor-pointer px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
                                    Contactar
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Cerrar */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                Contactar {selected?.name}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Tu teléfono"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    required
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <textarea
                                    placeholder="Repuesto de interés"
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    required
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Enviar
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Sin resultados */}
            {filtered.length === 0 && (
                <div className="text-center text-gray-500 mt-12">
                    No se encontraron almacenes con los filtros seleccionados.
                </div>
            )}
        </div>
    )
}

export default Parts
