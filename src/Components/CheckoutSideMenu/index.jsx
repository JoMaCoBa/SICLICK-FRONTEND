import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${
                context.isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 w-96 h-full bg-white shadow-2xl rounded-l-2xl transition-transform duration-300 ease-in-out flex flex-col z-11`}
        >
            {/* Encabezado */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="font-semibold text-xl text-gray-800">My Order</h2>
                <button onClick={context.closeCheckoutSideMenu} className="hover:bg-gray-200 rounded-full p-1 transition">
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            {/* Contenido */}
            <div className="px-6">
                {
                    context.productList.map(product => (
                        <OrderCard key={product.productId} name={product.name} price={product.price} image={product.image} ></OrderCard>
                    ))
                }
            </div>

            {/* Espacio para que no se solape con la parte inferior */}
            <div className="flex-grow"></div>
        </aside>
    );
};

export default CheckoutSideMenu;
