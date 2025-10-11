import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Trash2, CardSim, ParkingMeter, Type as Type1, Coins, Pencil, Search } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import type { Type } from "../../Interface/Type";
import { NumberedListIcon } from "@heroicons/react/24/outline";
import { createService, deleteService, getAllServices } from "../../Utils/apiServices";
import { getAllTypes } from "../../Utils/apiType";
import type { Service } from '../../Interface/Service';
import toast from "react-hot-toast";
import Loading from "../../Components/Loading/Loading";


const Services = () => {
    const TYPE_IDS = {
        manoObra: "a0b2c3d4-e5f6-7890-1234-56789abcdefh",
        repuesto: "a0b2c3d4-e5f6-7890-1234-56789abcdefi",
    };

    const [filterType, setFilterType] = useState<"all" | "manoObra" | "repuesto">("all");


    const [services, setServices] = useState<Service[]>([]);
    const [service, setService] = useState<Service>()
    const [types, setTypes] = useState<Type[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null); // 👈 nuevo estado
    const [loading, setLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>(""); // 👈 buscador

     // 👇 filtro dinámico
    const filteredServices = services.filter((s) => {
        const matchesSearch =
            s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.brand.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType =
            filterType === "all" ||
            (filterType === "manoObra" && s.id_type === TYPE_IDS.manoObra) ||
            (filterType === "repuesto" && s.id_type === TYPE_IDS.repuesto);

        return matchesSearch && matchesType;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // cantidad de registros por página

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredServices.slice(indexOfFirstItem, indexOfLastItem);

    const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
    const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

    const { user } = useAuth();

    const defaultValues: Service = {
        id: "",
        name: "",
        price: 0,
        brand: "",
        quantity: 1,
        id_type: "",
        id_workshop: user?.id || "",
    };

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<Service>();

    const fetchTypes = async () => {
        try {
            const responseTypes = await getAllTypes();
            setTypes(responseTypes);
        } catch (error) {
            console.error("Error obteniendo tipos:", error);
            toast.error("Hubo un error al obtener los tipos.");
        }
    };


    const fetchServices = async (id: string) => {
        setLoading(true);

        try {
            const responseServices = await getAllServices(id);
            setServices(responseServices);
        } catch (error) {
            console.error("Error obteniendo Servicios:", error);
            toast.error("Hubo un error al obtener los Servicios.");
        } finally {
            setLoading(false);

        }
    };

    useEffect(() => {
        if (user?.id) {
            fetchServices(user.id);
            fetchTypes()
        }
    }, []); // Ejecuta una sola vez al montar el componente


    const onSubmit = async (data: Service) => {
        setLoading(true);

        try {
            if (editingId) {
                // actualizar
                await createService({ ...data, id: editingId }); // 👈 deberías tener un updateService() real
                toast.success("Servicio actualizado exitosamente");
            } else {
                // crear
                await createService(data);
                toast.success("Servicio creado exitosamente");
            }

            if (user?.id) {
                await fetchServices(user.id);
            }
            reset(defaultValues);
            setEditingId(null); // salir de edición
        } catch (error) {
            console.error("Error en el servicio:", error);
            toast.error(String(error));
        } finally {
            setLoading(false);

        }
    };

    const handleEdit = (service: Service) => {
        reset(service);       // 👈 carga valores en el form
        setService(service)
        setEditingId(service.id);
    };

    const handleDelete = async (id: string) => {
        setLoading(true);

        try {
            const response = await deleteService(id);
            setServices((prev) => prev.filter((m) => m.id !== id));
            toast.success(response);
        } catch (error) {
            console.error("Error borrando el servicio:", error);
            toast.error("Hubo un error al borrar el servicio.");
        } finally {
            setLoading(false)
        }
    };

   

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Módulo Inventario
            </h1>
            <p className="text-gray-600 mb-6">
                Gestiona los servicios que ofreces en el taller como mano de obra o repuestos. Podrás crear o borrar. Vez el inventario de todo el taller
            </p>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-xl shadow p-5 mb-8 flex flex-wrap gap-4 justify-between"
            >
                {/* Nombre */}
                <div className="flex items-center gap-2 w-full sm:w-[48%]">
                    <ParkingMeter className="text-blue-600 min-w-[24px]" />
                    <input
                        type="text"
                        placeholder="Nombre del servicio"
                        {...register("name", { required: "El nombre del servicio es obligatorio" })}
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.name
                            ? "border-red-500 ring-red-400"
                            : "border-gray-300 focus:ring-blue-500"
                            }`}
                    />

                    <input type="hidden" value={user?.id} {...register("id_workshop")} />
                </div>


                <div className="flex items-center gap-2 w-full sm:w-[48%]">
                    <CardSim className="text-blue-600 min-w-[24px]" />
                    <input
                        type="text"
                        placeholder="Marca del servicio"
                        {...register("brand", { required: "La marca es obligatoria" })}
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.brand
                            ? "border-red-500 ring-red-400"
                            : "border-gray-300 focus:ring-blue-500"
                            }`}
                    />
                </div>


                <div className="flex items-center gap-2 w-full sm:w-[48%]">
                    <NumberedListIcon className="text-blue-600 min-w-[24px] w-5" />
                    <input
                        type="number"
                        placeholder="Cantidades del servicio"
                        {...register("quantity", { required: "cantidad requerida" })}
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.quantity
                            ? "border-red-500 ring-red-400"
                            : "border-gray-300 focus:ring-blue-500"
                            }`}
                    />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-[48%]">
                    <Type1 className="text-blue-600 w-[24px] " />
                    <select
                        {
                        ...register("id_type", {
                            required: "El tipo es obligatorio",
                        })
                        }
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.id_type
                            ? "border-red-500 ring-red-400"
                            : "border-gray-300 focus:ring-blue-500"
                            }`}
                    >
                        <option value="">Selecciona el tipo de servicio</option>
                        {
                            types?.map((type, key) => (
                                <option value={type.id} key={key}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-[48%]">
                    <Coins className="text-blue-600 w-[24px] " />
                    <input
                        type="text"
                        placeholder="El precio del servicio"
                        {...register("price", {
                            setValueAs: (v) => Number(String(v).replace(/\D/g, "")), // convierte a número
                        })}
                        defaultValue={editingId ? service?.price : ""}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            const numericValue = Number(raw);
                            const formatted = new Intl.NumberFormat("es-CO").format(numericValue);
                            setValue("price", numericValue, { shouldValidate: true });
                            e.target.value = `$ ${formatted}`;
                        }}
                        onBlur={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            const formatted = new Intl.NumberFormat("es-CO").format(Number(raw));
                            e.target.value = `$ ${formatted}`;
                        }}
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.price ? "border-red-500 ring-red-400" : "border-gray-300 focus:ring-blue-500"
                            }`}
                    />


                </div>
                {/* Botón dinámico */}
                <div className="w-full flex justify-end gap-2">
                    {editingId && (
                        <button
                            type="button"
                            onClick={() => { reset(); setEditingId(null); }}
                            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
                        >
                            Cancelar
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                        {editingId ? "Actualizar" : "Crear"}
                    </button>
                </div>
            </form>

            {/* 🔎 Buscador + Filtros */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                <div className="flex items-center gap-2 w-full md:w-1/2">
                    <Search className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o marca..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                    />
                </div>

                {/* Filtro por tipo */}
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as "all" | "manoObra" | "repuesto")}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                >
                    <option value="all">Todos</option>
                    <option value="manoObra">Mano de obra</option>
                    <option value="repuesto">Repuestos</option>
                </select>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Marca</th>
                            <th className="px-4 py-3">Cantidad</th>
                            <th className="px-4 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((service) => (
                            <tr key={service.id} className="border-t">
                                <td className="px-4 py-3">{service.name}</td>
                                <td className="px-4 py-3">
                                    {new Intl.NumberFormat("es-CO", {
                                        style: "currency",
                                        currency: "COP",
                                        minimumFractionDigits: 0,
                                    }).format(service.price)}
                                </td>
                                <td className="px-4 py-3">{service.brand}</td>
                                <td className="px-4 py-3">{service.quantity}</td>
                                <td className="px-4 py-3 flex justify-center gap-4">
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredServices.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center px-4 py-5 text-gray-500">
                                    No hay servicios registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

                {/* Paginación */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        >
                            ← Anterior
                        </button>

                        <span className="text-gray-700">
                            Página {currentPage} de {totalPages}
                        </span>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                        >
                            Siguiente →
                        </button>
                    </div>
                )}

            </div>
            {
                loading && (
                    <Loading />
                )
            }
        </div>
    )
}

export default Services