import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, FileText, X } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useAuth } from "../../hooks/useAuth";
import type { User } from "../../Interface/auth";
import type { Service } from "../../Interface/Service";
import { getAllServices } from "../../Utils/apiServices";
import toast from "react-hot-toast";


const generatePDF = (quote: Quote, user: User) => {

    const doc = new jsPDF();

    // === ENCABEZADO ===
    // Logo
    if (user?.logo) {
        doc.addImage(user.logo, "PNG", 14, 10, 30, 30); // logo a la izquierda
    }

    // Datos empresa
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(user?.name || "Mi Empresa", 50, 15);
    doc.setFont("helvetica", "normal");
    doc.text("Dirección de la empresa", 50, 22);
    doc.text(user?.phone || "Teléfono", 50, 28);
    doc.text(user?.email || "correo@empresa.com", 50, 34);

    // Datos factura a la derecha
    doc.setFont("helvetica", "bold");
    doc.text("FACTURA / COTIZACIÓN", 150, 15);
    doc.setFont("helvetica", "normal");
    doc.text(`N°: ${quote.id || "0001"}`, 150, 22);
    doc.text(`Fecha: ${quote.date}`, 150, 28);

    // === DATOS DEL CLIENTE ===
    doc.setFont("helvetica", "bold");
    doc.text("Cliente:", 14, 50);
    doc.setFont("helvetica", "normal");
    doc.text(quote.client, 40, 50);
    doc.text(`Telefono: ${quote.clientPhone}`, 14, 56);

    if (quote.clientAddress) {
        doc.text(`Dirección: ${quote.clientAddress}`, 14, 62);
    }
    if (quote.clientEmail) {
        doc.text(`Email: ${quote.clientEmail}`, 14, 68);
    }

    // === TABLA DE ITEMS ===
    autoTable(doc, {
        startY: 75,
        head: [["Item", "Cantidad", "Precio Unit.", "Subtotal"]],
        body: quote.items.map((item) => [
            `${item.id_type === "a0b2c3d4-e5f6-7890-1234-56789abcdefh" ? "Mano Obra" : "Repuesto"} - ${item.name}`,
            item.quantity.toString(),
            `$${item.price.toLocaleString("es-CO")}`,
            `$${(item.quantity * item.price).toLocaleString("es-CO")}`,
        ]),
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [41, 128, 185], textColor: 255, halign: "center" },
        bodyStyles: { halign: "center" },
    });

    // === TOTALES ===
    const docWithAutoTable = doc as jsPDF & {
        lastAutoTable?: { finalY?: number };
    };
    const finalY = docWithAutoTable.lastAutoTable?.finalY || 90;

    const subtotal = quote.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    // const iva = subtotal * 0.19; // IVA 19%
    const descuento = quote.discount || 0;
    const total = subtotal - descuento;

    doc.setFont("helvetica", "bold");
    doc.text("Resumen:", 130, finalY + 10);
    doc.setFont("helvetica", "normal");
    doc.text(`Subtotal: $${subtotal.toLocaleString("es-CO")}`, 130, finalY + 16);
    // doc.text(`IVA (19%): $${iva.toLocaleString("es-CO")}`, 130, finalY + 22);
    if (descuento > 0) {
        doc.text(`Descuento: -$${Number(descuento).toLocaleString("es-CO")}`, 130, finalY + 22);
    }
    doc.setFont("helvetica", "bold");
    doc.text(`TOTAL: $${total.toLocaleString("es-CO")}`, 130, finalY + 40);

    // === PIE DE PÁGINA ===
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text(
        "Gracias por su confianza. Esta cotización es válida por 15 días.",
        14,
        290
    );

    // Guardar
    doc.save(`Factura_${quote.client}.pdf`);
};




type QuoteForm = {
    client: string;
    clientEmail: string;
    clientAddress: string;
    clientPhone: string;
    discount?: number;
    total: number;
};

type Quote = {
    client: string;
    date: string;
    items: Service[];
    total: number;
    id?: string;
    clientEmail: string,
    clientAddress: string,
    clientPhone: string,
    discount?: number
};

const Quotes = () => {
    const [open, setOpen] = useState(false);

    

    const { user } = useAuth();
    const [selectedServices, setSelectedServices] = useState<
        (Service & { quantity: number })[]
    >([]);

    const [services, setServices] = useState<Service[]>([])
    const totalGeneral = selectedServices.reduce(
        (sum, s) => sum + s.price * s.quantity,
        0
    );
const selectRef = useRef<HTMLSelectElement>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Filtra los servicios según lo que escriba el usuario
    const [filteredServices, setFilteredServices] = useState<Service[]>([]);
    const { register, handleSubmit, reset, setValue } = useForm<QuoteForm>();

    useEffect(() => {
        setValue("total", totalGeneral);

        setFilteredServices(services?.filter((service: Service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));

        if (searchTerm && selectRef.current) {
            selectRef.current.size = Math.min(filteredServices.length + 1 || 1, 6); // despliega como lista
        } else if (selectRef.current) {
            selectRef.current.size = 1; // vuelve al estado normal
        }

    }, [totalGeneral, setValue, searchTerm]);

    useEffect(() => {
        if (user?.id) {
            fetchServices(user?.id)
        }
    }, [])

    const fetchServices = async (id: string) => {
        try {
            const responseServices = await getAllServices(id);
            setServices(responseServices);
            setFilteredServices(responseServices);
        } catch (error) {
            console.error("Error obteniendo Servicios:", error);
            toast.error("Hubo un error al obtener los Servicios.");
        }
    };


    const handleQuantityChange = (id: string, qty: number) => {
        setSelectedServices((prev) =>
            prev.map((s) => {
                if (s.id === id) {
                    // Buscar stock en services
                    const serviceStock = services.find((serv) => serv.id === id)?.quantity || 0;

                    if (qty > serviceStock && s.id_type !== "a0b2c3d4-e5f6-7890-1234-56789abcdefh") {
                        toast.error(`El servicio ${s.name} solo tiene ${serviceStock} en stock`);
                        return { ...s, quantity: serviceStock }; // limitar al stock
                    }

                    return { ...s, quantity: qty > 0 ? qty : 1 };
                }
                return s;
            })
        );
    };

    const handleRemoveService = (id: string) => {
        setSelectedServices((prev) => prev.filter((s) => s.id !== id));
    };

    const handleSelectService = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        if (!selectedId) return;

        const selectedService = services.find((s) => s.id === selectedId);
        if (!selectedService) return;

        if (selectedService.quantity <= 0) {
            toast.error(`El servicio ${selectedService.name} no tiene stock disponible`);
            e.target.value = "";
            return;
        }

        if (!selectedServices.some((s) => s.id === selectedService.id)) {
            setSelectedServices((prev) => [
                ...prev,
                { ...selectedService, quantity: 1 },
            ]);
        }

        setFilteredServices(services)
        setSearchTerm("");
        e.target.value = "";
    };



    const onSubmit = (data: QuoteForm) => {
        if (selectedServices.length === 0) {
            toast.error("Agrega al menos un servicio o repuesto a la cotización.");
            return;
        }
        const quote: Quote = {
            client: data.client,
            date: new Date().toISOString().slice(0, 10),
            items: selectedServices,
            clientAddress: data.clientAddress,
            clientEmail: data.clientEmail,
            clientPhone: data.clientPhone,
            discount: data.discount,
            total: totalGeneral
        };

        if (user) {
            generatePDF(quote, user); // 👉 en vez de guardar, generamos el PDF
        }

        reset();
        setSelectedServices([]);
        setOpen(false);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" /> Cotizaciones de Taller
                </h1>
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                >
                    <Plus className="w-4 h-4" /> Crear Cotizacion
                </button>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-xl  shadow-lg p-6 w-[90vw] max-w-2xl relative">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold mb-4">Nueva Cotización</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-scroll">


                            {/* Items */}
                            <div className="space-y-6">
                                {/* Items */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Inventario</label>

                                    {/* Buscador */}
                                    <input
                                        type="text"
                                        placeholder="Buscar servicio..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="mb-2 w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                                    />

                                    {/* Select */}
                                    <select
                                        ref={selectRef}
                                        onChange={handleSelectService}
                                        className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                                    >
                                        <option value="" className=" bg-white  hover:cursor-pointer hover:bg-slate-200">Selecciona los servicios</option>
                                        {filteredServices.length > 0 ? (
                                            filteredServices.map((service) => (
                                                <option value={service.id} className="my-2 hover:cursor-pointer hover:bg-slate-200" key={service.id}>
                                                    {service.name} -{" "}
                                                    {new Intl.NumberFormat("es-CO", {
                                                        style: "currency",
                                                        currency: "COP",
                                                        minimumFractionDigits: 0,
                                                    }).format(service.price)}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No se encontraron servicios</option>
                                        )}
                                    </select>

                                    {selectedServices.length > 0 && (
                                        <div className="mt-4">
                                            <h3 className="text-lg font-semibold mb-2">Servicios seleccionados</h3>

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
                                                                <td className="p-2">{s.name}</td>
                                                                <td className="p-2">
                                                                    {new Intl.NumberFormat("es-CO", {
                                                                        style: "currency",
                                                                        currency: "COP",
                                                                        minimumFractionDigits: 0,
                                                                    }).format(s.price)}
                                                                </td>
                                                                <td className="p-2">
                                                                    <input
                                                                        type="number"
                                                                        value={s.quantity}
                                                                        min={1}
                                                                        className="w-16 rounded border text-center px-1 py-0.5"
                                                                        onChange={(e) =>
                                                                            handleQuantityChange(s.id, parseInt(e.target.value))
                                                                        }
                                                                    />
                                                                </td>
                                                                <td className="p-2 font-medium">
                                                                    {new Intl.NumberFormat("es-CO", {
                                                                        style: "currency",
                                                                        currency: "COP",
                                                                        minimumFractionDigits: 0,
                                                                    }).format(s.price * s.quantity)}
                                                                </td>
                                                                <td className="p-2">
                                                                    <button
                                                                        onClick={() => handleRemoveService(s.id)}
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
                                                                }).format(totalGeneral)}
                                                            </td>
                                                            <td className="p-2"></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Datos del Cliente */}
                                <div className="space-y-4">
                                    {/* Nombre Cliente */}
                                    <div>
                                        <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                                            Nombre Cliente
                                        </label>
                                        <input
                                            type="text"
                                            id="client"
                                            placeholder="Ej: Juan Pérez"
                                            {...register("client", { required: true })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        />
                                    </div>

                                    {/* Email Cliente */}
                                    <div>
                                        <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Cliente
                                        </label>
                                        <input
                                            type="email"
                                            id="clientEmail"
                                            placeholder="ejemplo@correo.com"
                                            {...register("clientEmail", { required: true })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        />
                                    </div>

                                    {/* Dirección Cliente */}
                                    <div>
                                        <label htmlFor="clientAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                            Dirección Cliente
                                        </label>
                                        <input
                                            type="text"
                                            id="clientAddress"
                                            placeholder="Calle 123 #45-67"
                                            {...register("clientAddress", { required: true })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Teléfono Cliente
                                        </label>
                                        <input
                                            type="text"
                                            id="clientPhone"
                                            placeholder="3158232432"
                                            {...register("clientPhone", { required: true })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                                            Descuento
                                        </label>
                                        <input
                                            type="text"
                                            id="discount"
                                            placeholder="$30.000"
                                            {...register("discount", { required: true })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Guardar */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                            >
                                Generar Cotizacion
                            </button>
                        </form>
                    </div>
                </div>
            )}


            {/* =========================
    GUÍA DE USO (EN EL MISMO COMPONENTE)
   ========================= */}
            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    📘 Guía de Uso para Generar Cotizaciones en PDF
                </h2>

                <ol className="list-decimal space-y-3 pl-5 text-gray-700 leading-relaxed">
                    <li>
                        Completa los <span className="font-semibold">datos del cliente</span>:
                        <ul className="list-disc pl-6 mt-1 text-gray-600 space-y-1">
                            <li>Nombre del cliente</li>
                            <li>Email</li>
                            <li>Dirección</li>
                        </ul>
                    </li>
                    <li>
                        Agrega los <span className="font-semibold">items</span> de la cotización:
                        <ul className="list-disc pl-6 mt-1 text-gray-600 space-y-1">
                            <li>Recuerda que son los que guardaste en tu inventario.</li>
                        </ul>
                    </li>
                    <li>
                        El <span className="font-semibold">total</span> se calcula automáticamente sumando (<i>cantidad × precio</i>).
                    </li>
                    <li>
                        Una vez completada la información, haz clic en
                        <span className="font-semibold text-blue-600"> “Generar PDF”</span>.
                    </li>
                    <li>
                        El archivo PDF se descargará automáticamente en tu dispositivo,
                        listo para enviar o imprimir.
                    </li>
                </ol>

                <p className="mt-6 text-gray-600 text-sm border-t pt-4">
                    💡 Consejo: Revisa bien los datos antes de generar el PDF, ya que el documento
                    se crea directamente y no se guarda en el sistema.
                </p>
            </div>

        </div>
    );
};

export default Quotes;
