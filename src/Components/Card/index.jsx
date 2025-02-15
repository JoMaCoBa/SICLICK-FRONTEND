import { useContext } from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setProductList([...context.productList, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.productList.filter(product => product.productId === id).length > 0
        if (isInCart) {
            return (
                <button 
                className="absolute bottom-2 right-2  bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold shadow-md hover:bg-blue-600 transition">
                    <CheckIcon className="h-6 w-6 text-white" />
                </button>
            )
        } else {
            return (
                <button 
                className="absolute bottom-2 right-2  bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold shadow-md hover:bg-blue-600 transition"
                onClick={(event) => addToCart(event, data.data)}>
                    <PlusIcon className="h-6 w-6 text-white" />
                </button>
            )
        }
    }

    return (
        <div 
            className="bg-white shadow-lg rounded-2xl w-56 h-60 overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
            onClick={ () => showProduct(data.data) }>
            <figure className="relative">
                <span className="flex items-center justify-center absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                    {data.data.category}
                </span>
                <img 
                    src={data.data.image}
                    alt={data.data.name}
                    className="w-full h-48 object-cover"
                />
                {renderIcon(data.data.productId)}
            </figure>
            <div className="p-4 flex justify-between items-center">
                <span className="text-gray-700 font-medium truncate">{data.data.name}</span>
                <span className="text-lg font-semibold text-blue-600">${data.data.price}</span>
            </div>
        </div>
    );
};

export default Card;
