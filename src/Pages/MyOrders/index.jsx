import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/orders")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.OrderId} className="border p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">Pedido #{order.OrderId}</h2>
                            <p><strong>Nombre:</strong> {order.name}</p>
                            <p><strong>Email:</strong> {order.email}</p>
                            <p><strong>Dirección:</strong> {order.address}</p>
                            <p><strong>Total:</strong> ${Object.values(order.products).reduce((acc, product) => acc + parseFloat(product.price), 0)}</p>

                            <h3 className="font-medium mt-2">Productos:</h3>
                            <ul className="list-disc pl-5">
                                {Object.values(order.products).map((product, index) => (
                                    <li key={index}>{product.name} - ${product.price}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
}

export default MyOrders;
