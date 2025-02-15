import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${
                context.isProductDetailOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 w-96 h-full bg-white shadow-2xl rounded-l-2xl transition-transform duration-300 ease-in-out flex flex-col z-11`}
        >
            {/* Encabezado */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="font-semibold text-xl text-gray-800">Product Detail</h2>
                <button onClick={context.closeProductDetail} className="hover:bg-gray-200 rounded-full p-1 transition">
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            {/* Imagen */}
            <figure className="p-6 flex justify-center">
                <img
                    src={context.productToShow.image}
                    alt={context.productToShow.name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />
            </figure>

            {/* Información del Producto */}
            <div className="px-6 space-y-3">
                <h3 className="text-2xl font-semibold text-gray-800">{context.productToShow.name}</h3>
                <p className="text-gray-600">{context.productToShow.description}</p>
                <span className="text-2xl font-bold text-blue-600">${context.productToShow.price}</span>
            </div>

            {/* Espacio para que no se solape con la parte inferior */}
            <div className="flex-grow"></div>
        </aside>
    );
};

export default ProductDetail;
