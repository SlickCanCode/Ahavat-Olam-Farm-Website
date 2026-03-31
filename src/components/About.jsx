import ceoPic from "../assets/ceo_pic4.png"
import yamPlanting from "../assets/yam_plant_pic.jpg"
import harvestingJoy from "../assets/community_impact.png"
import { motion, useInView } from "motion/react"
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-30 px-6 lg:px-20">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}      
        className="text-3xl lg:text-4xl font-bold text-black poppins-bold">
          <span className="text-green-600 text-4xl lg:text-5xl">About</span> Ahavat Olam Global Farm
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        className="mt-4 text-gray-600">
          A growing agribusiness committed to producing, processing,
          and distributing nutritious agricultural products while
          strengthening Nigeria’s food system.
        </motion.p>
      </div>


      {/* Section 1 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          src={ceoPic}
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Farm"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Who We Are
          </h3>

          <p className="mt-4 text-gray-600">
            Ahavat Olam Global Farm is a growing agribusiness dedicated
            to producing high-quality agricultural products. Our work
            focuses on sustainable farming, responsible food production,
            and delivering fresh produce to households and markets.
          </p>
        </motion.div>

      </div>


     {/* Section 2 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">
            What We Do
          </h3>

          <p className="mt-4 text-gray-600">
            We combine crop production, value-added processing, and efficient
            distribution to ensure that every harvest reaches consumers in the
            best possible condition. Our mission is simple — to help feed
            communities with affordable, nutritious food.
          </p>

          <p className="mt-4 text-gray-600">
            Beyond farming, we also offer <strong className="text-black">practical agribusiness training</strong> for
            individuals who want to learn more about modern farming, crop
            management, and starting or expanding their own agribusiness. Our
            goal is to empower the next generation of farmers and agripreneurs.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }} 
          src={yamPlanting}
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Harvest"
        />

      </div>


      {/* Section 3 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center">

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          src={harvestingJoy}
          className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition"
          alt="Community"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Community Impact
          </h3>

          <p className="mt-4 text-gray-600">
            Agriculture creates opportunity. Through our work, we support
            youth and women in agriculture while contributing to local
            food security and economic growth.
          </p>

          <p className="mt-4 text-gray-600">
            As we grow, we remain committed to innovation, transparency,
            and expanding our impact across Nigeria’s agricultural
            value chain.
          </p>
        </motion.div>

      </div>

    </section>
  )
}

