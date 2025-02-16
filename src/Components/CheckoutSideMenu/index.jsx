import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (productId) => {
        const filteredProducts = context.productList.filter(product => product.productId !== productId);
        context.setProductList(filteredProducts);
        context.setCount(context.count - 1);
    };

    return (
        <aside
            className={`${
                context.isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 w-96 h-full bg-white shadow-2xl rounded-l-3xl transition-transform duration-300 ease-in-out flex flex-col z-50 border-l border-gray-300`}
        >
            {/* Encabezado */}
            <div className="flex justify-between items-center p-6 border-b border-gray-300 bg-gray-100">
                <h2 className="font-semibold text-xl text-gray-900 tracking-wide">My Order</h2>
                <button 
                    onClick={context.closeCheckoutSideMenu} 
                    className="hover:bg-gray-200 rounded-full p-2 transition"
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Contenido - Lista de productos */}
            <div className="px-6 overflow-y-auto flex-grow space-y-4 scrollbar-hide mt-4">
                {context.productList.map(product => (
                    <OrderCard 
                        key={product.productId} 
                        productId={product.productId} 
                        name={product.name} 
                        price={product.price} 
                        image={product.image} 
                        handleDelete={handleDelete} 
                    />
                ))}
            </div>

            {/* Total */}
            <div className="px-6 py-4 border-t border-gray-300 bg-gray-100 mt-4">
                <p className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total:</span>
                    <span className="text-2xl">${totalPrice(context.productList)}</span>
                </p>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;
