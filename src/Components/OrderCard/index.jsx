import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {

    const { productId, name, price, image, handleDelete} = props

    return (
        <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            {/* Imagen y nombre */}
            <div className="flex items-center gap-4">
                <figure className="w-16 h-16">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={name} />
                </figure>
                <p className="text-gray-800 font-medium">{name}</p>
            </div>

            {/* Precio y botón de eliminar */}
            <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-blue-600">${price}</span>
                <button onClick={() => handleDelete(productId)} className="hover:bg-red-100 p-1 rounded-full transition">
                    <XMarkIcon className="w-6 h-6 text-red-500" />
                </button>
            </div>
        </div>
    )
}

export default OrderCard