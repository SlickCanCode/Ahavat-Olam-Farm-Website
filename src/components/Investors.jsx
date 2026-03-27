
import { motion } from "motion/react";
import { Sprout, Boxes, Factory, Truck } from "lucide-react"
import communityImage from "../assets/farm_commmunity.png"
import ceoPic from "../assets/ceo_pic.jpg"


export default function InvestorsSection() {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-30 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold leading-tight poppins-bold"
        >
          <span className="text-green-600 text-4xl md:text-5xl">Invest</span> in Feeding Nations.
          <br /> Building Sustainable Agriculture.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Ahavat Olam Global Farm is a growing agribusiness focused on food production,
          processing, and distribution — delivering high-quality, affordable agricultural
          products while strengthening local economies and food security.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.6 }
            }
          }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a
          whileTap={{ scale: 0.95 }}
           href="https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20your%20pitch%20deck%2E" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 cursor-pointer transition">
            Request Pitch Deck
          </motion.a>
          <a href="#contact" className="border border-white/20 px-6 py-3 rounded-xl hover:bg-green-600 cursor-pointer transition">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-y border-white/10 py-10"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-400">
          <p>Households</p>
          <p>Retailers</p>
          <p>Local Markets</p>
          <p>Community Networks</p>
        </div>
      </motion.div>

      {/* CORE OPERATIONS */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Sustainable Production",
            desc: "We cultivate crops using responsible farming practices that ensure long-term productivity and environmental balance.",
          },
          {
            title: "Value Addition",
            desc: "We process and package agricultural produce to increase value, shelf life, and market accessibility.",
          },
          {
            title: "Market Distribution",
            desc: "We connect farm outputs directly to buyers, reducing inefficiencies in the agricultural value chain.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white border border-green-600/10 p-6 rounded-2xl"
          >
            <h3 className="text-green-600 text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-black text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* IMAGE + STORY */}
      <div className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={communityImage}
            alt="Farm community"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Community-Driven Growth
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Our work goes beyond farming. We actively create opportunities for youths and women,
            empowering local communities through agriculture while building a reliable food system.
          </p>

          <div className="space-y-3 text-gray-400">
            <p>• Youth and women inclusion in farming activities</p>
            <p>• Local employment and income generation</p>
            <p>• Strengthening food security at the community level</p>
          </div>
        </motion.div>

      </div>

      {/* VALUE CHAIN */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Integrated Value Chain
        </motion.h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Crop Production", icon: Sprout },
            { name: "Aggregation", icon: Boxes },
            { name: "Processing", icon: Factory },
            { name: "Distribution", icon: Truck },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-green-600 shadow-lg shadow-green-600/50 p-8 rounded-2xl text-center hover:scale-105 transition"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-white" />
              <p className="text-white font-semibold">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INVESTMENT FOCUS */}
      <div className="max-w-6xl mx-auto px-6 pb-28 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Where Investment Drives Impact
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We are currently focused on expanding our operational capacity and strengthening
          our ability to deliver consistent, high-quality agricultural products at scale.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Expand farm production capacity",
            "Improve processing and storage systems",
            "Scale distribution to wider markets",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="max-w-7xl mx-auto px-6 pb-28 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Leadership
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="text-center">
            <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src={ceoPic}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold">Shallom Peace Adelanwa</p>
            <p className="text-sm text-gray-400">CEO</p>
          </div>
        </motion.div>
      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-20 text-center px-6"
      >
        <h3 className="text-3xl font-bold mb-4">
          Partner With Us to Feed the Nations
        </h3>

        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Join us in building a resilient agricultural system that delivers value
          from farm to market while empowering communities.
        </p>

        <motion.a
          href="https://wa.me/2348106936560?text=Hello%2C%20i%27m%20interested%20in%20your%20pitch%20deck%2E"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 cursor-pointer transition"
          whileTap={{ scale: 0.95 }}
        >
          Start a Conversation
        </motion.a>
      </motion.div>

    </section>
  );
}