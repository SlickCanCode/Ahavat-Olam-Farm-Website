import { motion } from "framer-motion";



export default function ProductCard({product}) {
    return (
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-4 flex flex-col hover:scale-105 transition">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
            <img
                className="w-full h-full object-cover"
                src={product.imageSrc}
                alt=""
            />
            </div>

            <h3 className="poppins-bold">{product.name}</h3>
            <p className="text-gray-500 py-2">{product.description}</p>

                        <motion.a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto bg-green-600 text-center text-white py-2 px-4 rounded-lg hover:bg-green-700 transition cursor-pointer"
            >
            Place Order
            </motion.a>
        </div>

    );
}