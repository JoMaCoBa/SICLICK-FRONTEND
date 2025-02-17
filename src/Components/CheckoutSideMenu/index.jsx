import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (productId) => {
        const filteredProducts = context.productList.filter(
            (product) => product.productId !== productId
        );
        context.setProductList(filteredProducts);
        context.setCount(context.count - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convertir la lista de productos en un objeto
        const productsObject = context.productList.reduce((acc, product) => {
            acc[product.productId] = {
                name: product.name,
                price: product.price,
                quantity: 1,
            };
            return acc;
        }, {});

        // Crear la orden con el formato correcto
        const orderData = {
            name: context.formData.name,
            email: context.formData.email,
            address: context.formData.address,
            products: productsObject,
        };

        try {
            const response = await fetch("http://localhost:3000/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                alert("Pedido realizado con éxito!");

                // Limpiar carrito y formulario
                context.setProductList([]);
                context.setFormData({ name: "", email: "", address: "" });
                context.setCount(0);

                // Cerrar el menú
                context.setIsCheckoutSideMenuOpen(false);
            } else {
                alert("Error al realizar el pedido");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("No se pudo realizar el pedido");
        }
    };

    return (
        <aside
            className={`${
                context.isCheckoutSideMenuOpen
                    ? "translate-x-0"
                    : "translate-x-full"
            } fixed top-0 right-0 w-96 h-full bg-white shadow-2xl rounded-l-3xl transition-transform duration-300 ease-in-out flex flex-col z-50 border-l border-gray-300`}
        >
            {/* Encabezado */}
            <div className="flex justify-between items-center p-6 border-b border-gray-300 bg-gray-100">
                <h2 className="font-semibold text-xl text-gray-900 tracking-wide">
                    My Order
                </h2>
                <button
                    onClick={context.closeCheckoutSideMenu}
                    className="hover:bg-gray-200 rounded-full p-2 transition"
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Contenido - Lista de productos */}
            <div className="px-6 overflow-y-auto flex-grow space-y-4 scrollbar-hide mt-4">
                {context.productList.map((product) => (
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

            {/* Formulario */}
            <form className="px-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="text-sm font-medium">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={context.formData.name}
                    onChange={context.handleInputChange}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <label className="text-sm font-medium">
                    Correo electrónico:
                </label>
                <input
                    type="email"
                    name="email"
                    value={context.formData.email}
                    onChange={context.handleInputChange}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <label className="text-sm font-medium">
                    Dirección de envío:
                </label>
                <input
                    type="text"
                    name="address"
                    value={context.formData.address}
                    onChange={context.handleInputChange}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                    Realizar Pedido
                </button>
            </form>

            {/* Total */}
            <div className="px-6 py-4 border-t border-gray-300 bg-gray-100 mt-4">
                <p className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total:</span>
                    <span className="text-2xl">
                        ${totalPrice(context.productList)}
                    </span>
                </p>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;
