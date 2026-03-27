import { motion } from "motion/react"
import heroBg from "../assets/hero-bg.png"

export default function Hero() {

    return (
        <>
<section className="pt-20">
  <div
    className="relative w-full min-h-[60vh] md:min-h-screen bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
            <div className="absolute inset-0 bg-black/50"></div>

                <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative hero-texts max-w-7xl mx-auto px-6 py-32 flex flex-col gap-5 lg:ml-12"
                >
                    <p className="text-white text-lg inter-normal lg:mt-12 lg:text-xl">We operate on a mission to</p>
                    <h1 className="text-white text-4xl poppins-bold lg:text-5xl">Feed The Nations</h1>
                    <p className="text-white text-xl inter-normal lg:text-2xl">By providing <strong>high-quality</strong>, affordable, and <strong>nutritious</strong> agricultural products.</p>
                    <div className="buttons">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#products"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-lg shadow-green-700/50 transition"
                        >
                            Explore Products
                        </motion.a>
                        <a href="#contact" className="inline-block text-white font-semibold hover:text-green-600 transition px-6">Join US</a>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
}