import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {

    const { name, price, image} = props

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2"> 
                <figure className="w-16 h-16">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={name} />
                </figure>
                <p className="text-sm font-light">{name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon className="w-6 h-6 text-gray-600" />
            </div>
        </div>
    )
}

export default OrderCard