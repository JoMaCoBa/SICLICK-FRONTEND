const Card = (data) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl w-56 h-60 overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
            <figure className="relative">
                <span className="flex items-center justify-center absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                    {data.data.category}
                </span>
                <img 
                    src={data.data.image}
                    alt={data.data.name}
                    className="w-full h-48 object-cover"
                />
                <button className="absolute bottom-2 right-2  bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold shadow-md hover:bg-blue-600 transition">
                    +
                </button>
            </figure>
            <div className="p-4 flex justify-between items-center">
                <span className="text-gray-700 font-medium truncate">{data.data.name}</span>
                <span className="text-lg font-semibold text-blue-600">${data.data.price}</span>
            </div>
        </div>
    );
};

export default Card;
