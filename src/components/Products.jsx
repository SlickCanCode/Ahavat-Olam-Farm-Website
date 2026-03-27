import ProductCard from "./ProductCard";
import { motion, useInView } from "motion/react"
import { useRef } from "react";
import greenChilli from "../assets/green_chilli.png"
import bellPepper from "../assets/bell_pepper.png"
import habeneroes from "../assets/habenerous_pepper.png"
import potatoChips from "../assets/potato_chips.png"


const products = [
    {
        name: "Green Chilli Pepper",
        description: "Fresh, spicy peppers perfect for cooking and sauces.",
        imageSrc: greenChilli,
        link: "https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20purchasing%20green%20chilli%20pepper%2E"
    },
    {
        name: "Bell Pepper",
        description: "Crisp, colorful peppers rich in flavor and nutrients.",
        imageSrc: bellPepper,
        link: "https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20purchasing%20bell%20pepper%2E"
    },
    {
        name: "Habeneroes Pepper",
        description: "Hot and aromatic peppers for bold, spicy dishes.",
        imageSrc: habeneroes,
        link: "https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20purchasing%20habeneroes%20pepper%2E"
    },
    {
        name: "Tasty Sweet Potato Chips",
        description: "Crunchy, naturally sweet chips made from fresh sweet potatoes.",
        imageSrc: potatoChips,
        link: "https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20purchasing%20Ahavat%20sweet%20potato%20chips%2E"
    }
]


export default function Products() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return(
        <section className="py-30 px-6 bg-gray-200 lg:px-18">
            <motion.h2 
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-3xl poppins-bold leading-tight text-black " >Our <span className="text-green-600 text-4xl">Products</span>
            </motion.h2>
            <motion.p 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-grey/600 inter-normal pt-5"
            >From farm to market, 
            our products are grown responsibly to deliver freshness, quality, and value in every harvest.
            </motion.p>


           <div className="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}

            </div>
        </section>
    );
}