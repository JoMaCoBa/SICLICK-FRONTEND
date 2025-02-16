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
    }

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
            <div className="px-6 overflow-y-scroll">
                {
                    context.productList.map(product => (
                        <OrderCard key={product.productId} productId={product.productId} name={product.name} price={product.price} image={product.image} handleDelete={handleDelete}></OrderCard>
                    ))
                }
            </div>

            {/* Total */}
            <div className="px-6">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total</span>
                    <span className="font-medium text-2xl">${totalPrice(context.productList)}</span>
                </p>
            </div>

            {/* Espacio para que no se solape con la parte inferior */}
            <div className="flex-grow"></div>
        </aside>
    );
};

export default CheckoutSideMenu;
