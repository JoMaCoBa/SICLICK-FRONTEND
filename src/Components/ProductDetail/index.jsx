import { XMarkIcon } from '@heroicons/react/24/solid'

import "./styles.css"

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed bg-white right-0 shadow-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail