import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import {
    Menu,
    Home,
    Settings,
    Wrench,
} from "lucide-react";


export default function LayoutMarket() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    
    const links = [
        { to: "/", label: "Home", icon: <Home size={18} /> },
        // { to: "/ordenes", label: "Órdenes", icon: <ClipboardList size={18} /> },
        { to: "/workshops", label: "Talleres", icon: <Wrench size={18} /> },
        { to: "/parts", label: "Almacenes repuestos", icon: <Settings size={18} /> }
    ];



    const SidebarContent = ({ onClick }: { onClick?: () => void }) => ( 
        <div className="w-64 bg-[#111827] text-gray-100 h-full p-6 flex flex-col justify-between relative z-10">
            <div>
                <div className="text-l font-bold flex items-center gap-1 text-white mb-6">
                    <div className="rounded-full p-1 w-fit border border-white">
                        <img
                            src={"/logo.png"}
                            className="rounded-full w-[50px] h-[50px] bg-white object-contain"
                            alt=""
                        />
                    </div>
                    System Workshop
                </div>
                <nav className="flex flex-col gap-1 text-sm">
                    {links.map((link) => {
                        const active = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={onClick}
                                className={`flex items-center gap-3 p-2 rounded transition-all ${
                                    active
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-gray-800 text-gray-300"
                                }`}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            
        </div>
        
    );

    return (
        <div className="flex h-screen">
            {/* Sidebar móvil */}
            <div
                className={`fixed inset-0 z-50 transition-transform duration-300 lg:hidden ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <SidebarContent onClick={() => setSidebarOpen(false)} />
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={() => setSidebarOpen(false)}
                />
            </div>

            {/* Sidebar escritorio */}
            <aside className="hidden lg:flex">
                <SidebarContent />
            </aside>

            {/* Contenido */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Topbar */}
                <header className="lg:hidden bg-gray-800 shadow p-4 flex items-center justify-between">
                    <button onClick={() => setSidebarOpen(true)} className="text-white">
                        <Menu size={22} />
                    </button>
                    <div className="text-l font-bold flex items-center gap-1 text-white">
                        <div className="rounded-full p-1 w-fit border border-white">
                            <img
                                src={"/logo.png"}
                                className="rounded-full w-[30px] h-[30px] bg-white object-contain"
                                alt=""
                            />
                        </div>
                        System Workshop
                    </div>
                </header>

                {/* Contenido principal */}
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
