import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = "border-b-2 border-blue-600 pb-1 text-blue-600";

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-10 text-base font-medium bg-white shadow-md text-gray-800">
            {/* Sección izquierda - Links */}
            <ul className="flex items-center gap-6">
                <li className="text-lg font-semibold text-gray-700">E-Shop</li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500 transition-colors"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500 transition-colors"
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500 transition-colors"
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
            </ul>

            {/* Sección derecha - Usuario y carrito */}
            <ul className="flex items-center gap-6">
                <li className="text-gray-600">correo@example.com</li>
                <li className="relative">
                    <span className="text-2xl">🛒</span>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {context.count }
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
