import { useForm } from "react-hook-form";
import type { WorkOrder } from "../../Interface/WorkOrder";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllMechanics } from "../../Utils/api";
import { useAuth } from "../../hooks/useAuth";
import type { Mechanic } from "../../Interface/Mechanics";
import { getAllServices } from "../../Utils/apiServices";
import type { Service } from "../../Interface/Service";
import { editOrder, getOrderById } from "../../Utils/apiWorkOrder";
import { createServiceByWork, deleteServiceByWork, editServiceByWork } from "../../Utils/apiServiceByWork";
import { deletePhotos, registerPhotos } from "../../Utils/apiPhoto";
import { toast } from "react-hot-toast";
import type { ServiceByWork } from '../../Interface/ServiceByWork';
import ModalService from "../../Components/ModalService/ModalService";
import TipTap from "../../Components/Editor/TipTap";


const WorkOrderEdit = () => {

    const location = useLocation();
    const [discount, setDiscount] = useState<number>(0);


    const [modalService, setModalService] = useState(false)
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search);
    const [selectedServices, setSelectedServices] = useState<
        (ServiceByWork)[]
    >([]);
    const id_order = searchParams.get('id');
    const { user } = useAuth();

    const [order, setOrder] = useState<WorkOrder>()
    const [mechanics, setMechanics] = useState<Mechanic[]>([])
    const [services, setServices] = useState<Service[]>([])
    let totalGeneral = selectedServices.reduce(
        (sum, s) => sum + s.price_unit * s.quantity_order,
        0
    );

    const [searchTerm, setSearchTerm] = useState("");

    // Filtra los servicios según lo que escriba el usuario
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);

    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        watch,
        formState: { errors },
    } = useForm<WorkOrder>();



    useEffect(() => {
        setValue("discount", discount);
    }, [discount, setValue]);

    const handleSelectService = async (e: string) => {

        const selectedId = e;
        if (!selectedId) return;

        const selectedService = services.find((s) => s.id === selectedId);
        if (!selectedService) return;

        selectedService.quantity = 1;



        if (id_order) {
            setLoading(true)
            try {
                await createServiceByWork({
                    name_service: selectedService.name,
                    id_order: id_order ?? "",
                    id_service: selectedService.id ?? "",
                    price_total: selectedService.price * selectedService.quantity,
                    price_unit: selectedService.price,
                    quantity_order: selectedService.quantity,
                    id_workshop: user?.id ?? ""
                });
                toast.success("Servicio asignado correctamente")
                fetchOrder(id_order);
                setFilteredServices(services)
                setSearchTerm("");

            } catch (error) {
                console.log(error);
                toast.error(String(error));
            } finally {
                setLoading(false)
            }
        }

    };

    useEffect(() => {

        // ===== CARGAR DATOS DESDE BACKEND =====
        if (order && order.photos) {
            reset(order);

            setDiscount(order.discount ?? 0);

            if (order.date) {
                setValue("date", new Date(order.date).toISOString().split("T")[0]);
            }


            setSelectedServices(order.service_by_workshops ?? []);
            setPreviewImages(order.photos.map(p => p.path).filter((p): p is string => Boolean(p)));
        }
    }, [order, reset, setValue, searchTerm]);


    useEffect(() => {
        setFilteredServices(services?.filter((service: Service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));

    }, [searchTerm, services])







    const handleQuantityChange = async (id: string, qty: number) => {


        // Luego enviar al backend
        try {
            setLoading(true);
            const selectedService = selectedServices.find((s) => s.id === id);
            if (!selectedService) return;

            const response = await editServiceByWork({
                id: selectedService.id,
                name_service: selectedService.name_service,
                id_order: id_order ?? "",
                id_service: selectedService.id_service,
                price_total: selectedService.price_unit * qty,
                price_unit: selectedService.price_unit,
                quantity_order: qty,
                id_workshop: user?.id ?? ""
            });

            setSelectedServices(prev =>
                prev.map(s =>
                    s.id === id ? { ...s, quantity_order: qty, price_total: qty * s.price_unit } : s
                )
            );
            totalGeneral = selectedServices.reduce(
                (sum, s) => sum + s.price_unit * s.quantity_order,
                0
            );
            toast.success(response);


        } catch (error) {
            console.error("Error editando el servicio:", error);
            toast.error(String(error));
        } finally {
            setLoading(false);
            // if (user?.id && id_order) {
            //     fetchOrder(id_order); // refresca datos desde DB
            // }
        }
    };


    const handleRemoveService = async (id: string) => {
        setLoading(true)
        try {
            const response = await deleteServiceByWork(id);
            toast.success(response)
            const servicefilter = selectedServices.filter((item) => item.id !== id);

            setSelectedServices(servicefilter);
            // if (user?.id && id_order) {
            //     fetchOrder(id_order);
            // }

        } catch (error) {
            console.error("Error borrando el servicio:", error);
            toast.error("Hubo un error borrando el servicio.");
        } finally {
            setLoading(false)
        }
    };





    const fetchMechanics = async (id: string) => {
        const responseMechanics = await getAllMechanics(id);
        setMechanics(responseMechanics)
    }

    const fetchOrder = async (id: string) => {

        try {
            const responseOrder = await getOrderById(id);
            setOrder(responseOrder);
            setSelectedServices(responseOrder?.service_by_workshops || []);
            setPreviewImages(
                (responseOrder.photos as { path?: string }[])
                    .map((p: { path?: string }) => p.path)
                    .filter((p): p is string => Boolean(p))
            );

        } catch (error) {
            console.error("Error obteniendo la orden:", error);
            toast.error("Hubo un error al obtener la orden.");
        }
    }

    const fetchServices = async (id: string) => {
        try {
            const responseServices = await getAllServices(id);
            setServices(responseServices);
            setFilteredServices(responseServices);
        } catch (error) {
            console.error("Error obteniendo Servicios:", error);
            alert("Hubo un error al obtener los Servicios.");
        }
    };

    useEffect(() => {
        setLoading(true);
        const cargarDatos = async () => {
            if (user?.id && id_order) {
                try {
                    // 1. Primero mecánicos
                    await fetchMechanics(user.id)

                    // 2. Luego servicios
                    await fetchServices(user.id)

                    // 3. Finalmente la orden
                    await fetchOrder(id_order)
                } catch (error) {
                    console.error("Error cargando datos:", error)
                }
                finally {
                    setLoading(false);
                }
            }
        }

        cargarDatos()
    }, [user?.id, id_order])




    const onSubmit = async (data: WorkOrder) => {
        setLoading(true); // Mostrar loading
        try {
            data.price = totalGeneral > discount ? totalGeneral - discount : 0;
            await editOrder(data);
            toast.success("Orden editada exitosamente");
            setTimeout(() => {
                navigate("/Vehiculos")
            }, 3000);
            reset();
        } catch (error) {
            console.error("Error editando la orden", error);
            toast.error("Error editando la orden");

        } finally {
            setLoading(false); // Ocultar loading siempre
        }
    };




    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);

        setPreviewImages(prev => [
            ...prev,
            ...files.map(file => URL.createObjectURL(file)),
        ]);

        setLoading(true)

        try {
            for (let index = 0; index < files.length; index++) {
                const formData = new FormData();
                formData.append("id_order", id_order ?? "");
                formData.append("photo", files[index]); // subir directamente los nuevos files
                await registerPhotos(formData);
            }

            toast.success("Imágenes subidas exitosamente");
        } catch (error) {
            console.error("Error subiendo imágenes:", error);
            toast.error("Hubo un error al subir las imágenes");
        } finally {
            setLoading(false)
        }
    };

    const handleRemoveImage = async (id: string) => {
        setLoading(true)
        try {
            const photo = order?.photos?.find((s) => s.path === id);
            if (!photo?.id) {
                toast.error("No se pudo encontrar la imagen para eliminar.");
                return;
            }
            const response = await deletePhotos(photo.id);
            toast.success(response);
        } catch (error) {
            console.error("Error borrando imagen:", error);
            toast.error("Hubo un error al borrar la imagen");
        } finally {
            setLoading(false)
        }
    }

    const handleModal = () => {
        setModalService(!modalService)
        if (modalService && user?.id) {
            fetchServices(user.id)
        }

    }


    return (
        <div className="p-2 sm:p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Editar Orden: {getValues("title")}
            </h1>
            <p className="text-gray-600 mb-6">
                Edita la orden seleccionada, edita y anexale servicios, mecanico, recomendaciones... tambien podras editar las fotos del proceso
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                {/* Título */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Título</label>
                    <input type="hidden" value={""} {...register("id_motorcycle")} />
                    <input
                        type="text"
                        {...register("title", { required: "El título es requerido" })}
                        className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.title ? "border-red-500 ring-red-400" : "border-gray-300 focus:ring-blue-500"
                            }`}
                        placeholder="Título de la orden"
                    />
                    {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
                </div>

                {/* Descripción */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                    <TipTap setValue={(value) => setValue("description", value)} value={watch("description") ?? ""} />
                    {errors.description && (
                        <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Recomendaciones */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Recomendaciones</label>
                    <TipTap setValue={(value) => setValue("recommendations", value)} value={watch("recommendations") ?? ""} />
                    {errors.recommendations && (
                        <p className="text-sm text-red-500 mt-1">{errors.recommendations.message}</p>
                    )}
                </div>

                {/* Precio */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Precio Total</label>
                    <input
                        type="hidden"
                        {...register("price", {
                            validate: (value) =>
                                Number(value) !== 0 || "El precio no puede ser 0",
                        })}
                    />

                    <input
                        type="text"
                        value={new Intl.NumberFormat("es-CO", {
                            style: "currency",
                            currency: "COP",
                            minimumFractionDigits: 0,
                        }).format(totalGeneral > discount ? totalGeneral - discount : 0)}
                        readOnly
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                    />
                    {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                </div>


                {/* Fecha */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha</label>
                    <input
                        type="date"
                        {...register("date", { required: "Fecha requerida" })}
                        className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.date ? "border-red-500 ring-red-400" : "border-gray-300 focus:ring-blue-500"
                            }`}

                    />
                    {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mecanicos</label>
                    <select
                        {
                        ...register("id_mechanic", {
                            required: "El mecanico es obligatorio",
                        })
                        }
                        className={`border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 ${errors.id_mechanic
                            ? "border-red-500 ring-red-400"
                            : "border-gray-300 focus:ring-blue-500"
                            }`}
                    >
                        <option value="">Selecciona el mecanico</option>
                        {
                            mechanics?.map((mechanic, key) => (
                                <option value={mechanic.id} key={key}>{mechanic.name}</option>
                            ))
                        }
                    </select>
                    {errors.id_mechanic && <p className="text-sm text-red-500 mt-1">{errors.id_mechanic.message}</p>}
                </div>

                <div>
                    <label onClick={handleModal} className="block text-lg font-medium cursor-pointer text-blue-600 underline w-fit">Agregar servicios al inventario</label>
                </div>

                <div className="relative w-full">
                    <label className="block text-sm font-medium text-gray-700">Inventario</label>
                    <input
                        type="text"
                        placeholder="Buscar servicio..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2 w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                    />
                    {searchTerm && (
                        <ul style={{ listStyle: "none" }} className="absolute bg-white border rounded w-full mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
                            {
                                filteredServices.length > 0 ?

                                    filteredServices?.map((service) => (
                                        <li
                                            key={service.id}
                                            onClick={() => {
                                                handleSelectService(service.id);
                                                setSearchTerm("");
                                            }}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                        >
                                            {service.name} - {" "} {new Intl.NumberFormat("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                            }).format(service.price)}
                                        </li>
                                    ))
                                    : <li className="px-4 py-2 text-gray-500">No hay servicios disponibles</li>
                            }
                        </ul>
                    )}


                    {selectedServices.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Servicios seleccionados</h3>

                            {/* Contenedor scroll horizontal para móviles */}
                            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
                                <table className="min-w-[600px] w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="p-2">Servicio</th>
                                            <th className="p-2">Precio Unitario</th>
                                            <th className="p-2">Cantidad</th>
                                            <th className="p-2">Total</th>
                                            <th className="p-2">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedServices.map((s) => (
                                            <tr key={s.id} className="hover:bg-gray-50">
                                                <td className="p-2">{s?.name_service}</td>
                                                <td className="p-2">
                                                    {new Intl.NumberFormat("es-CO", {
                                                        style: "currency",
                                                        currency: "COP",
                                                        minimumFractionDigits: 0,
                                                    }).format(s.price_unit)}
                                                </td>
                                                <td className="p-2">
                                                    <input
                                                        type="number"
                                                        value={s.quantity_order}
                                                        min={1}
                                                        className="w-16 rounded border text-center px-1 py-0.5"
                                                        onChange={(e) => { if (typeof s.id === "string") handleQuantityChange(s.id, parseInt(e.target.value, 10) || 0) }}
                                                    />
                                                </td>
                                                <td className="p-2 font-medium">
                                                    {new Intl.NumberFormat("es-CO", {
                                                        style: "currency",
                                                        currency: "COP",
                                                        minimumFractionDigits: 0,
                                                    }).format(s.price_total)}
                                                </td>
                                                <td className="p-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => { if (s.id) handleRemoveService(s.id) }}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-gray-100 font-semibold">
                                            <td colSpan={3} className="p-2 text-right">
                                                Total General:
                                            </td>
                                            <td className="p-2">
                                                {new Intl.NumberFormat("es-CO", {
                                                    style: "currency",
                                                    currency: "COP",
                                                    minimumFractionDigits: 0,
                                                }).format(totalGeneral > discount ? totalGeneral - discount : 0)}
                                            </td>
                                            <td className="p-2"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                {/* descuento */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descuento</label>

                    <input
                        type="hidden"
                        {...register("discount", { value: discount ?? 0 })}
                    />

                    <input
                        type="text"
                        value={
                            discount
                                ? new Intl.NumberFormat("es-CO", {
                                    style: "currency",
                                    currency: "COP",
                                    minimumFractionDigits: 0,
                                }).format(discount)
                                : ""
                        }
                        onChange={(e) => {
                            // Eliminar todo lo que no sean dígitos
                            const raw = e.target.value.replace(/\D/g, "");
                            setDiscount(Number(raw));
                        }}
                        placeholder="$40.000"
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                    />

                    {errors.discount && (
                        <p className="text-sm text-red-500 mt-1">{errors.discount.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Fotos de servicio
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="w-full bg-gray-200 pl-10 pr-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {previewImages.length > 0 && (
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {previewImages.map((src, idx) => (
                                <div key={idx} className="relative group">
                                    <img
                                        src={src}
                                        alt={`preview-${idx}`}
                                        className="w-full h-32 object-cover rounded border"
                                    />

                                    {/* Overlay que aparece en hover */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setPreviewImages(prev => prev.filter((_, i) => i !== idx));
                                                handleRemoveImage(src);
                                            }}
                                            className="bg-red-600 text-white rounded-sm p-2 cursor-pointer hover:bg-red-700 transition"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* Botón enviar */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Editar Orden
                    </button>
                </div>
            </form>
            <ModalService
                isOpen={modalService}
                onClose={handleModal}
            />

            {loading && (
                <div className="fixed inset-0 bg-black opacity-85 flex flex-col items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
                    <p className="text-white text-lg font-semibold">
                        Por favor espera...
                    </p>
                </div>
            )}
        </div>
    )
}

export default WorkOrderEdit