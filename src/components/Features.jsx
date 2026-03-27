import { motion, useInView } from "motion/react"
import { useRef } from "react";
import { 
  TruckIcon,
  SparklesIcon,
  UserGroupIcon
 } from "@heroicons/react/24/outline"
import Feature from "./Feature"
import whyPatnerimg from "../assets/why-patner.png"


const features = [
  {
    title: "Farm to Market Logistics",
    description: "Efficient systems delivering fresh produce from our farms to markets and homes.",
    icon: TruckIcon
  },
  {
    title: "Premium Harvest Quality",
    description: "Carefully grown and harvested crops ensuring freshness and high quality.",
    icon: SparklesIcon
  },
  {
    title: "Community Impact Agriculture",
    description: "Supporting farmers and strengthening communities through sustainable agriculture.",
    icon: UserGroupIcon
  }
]


export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); 

  return (
    <section className="flex flex-col py-12 px-6 lg:px-18">

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-5 lg:flex-row lg:gap-12 max-w-7xl"
      >
        <div className="why-patner lg:pt-12 lg:pr-6">
          <h2 className="text-3xl poppins-bold leading-tight" >Why <span className="text-green-600 text-4xl">Partner</span> With Us?</h2>
          <p className="text-grey/600 inter-normal pt-5">Partner with us as we build a sustainable agribusiness that 
            produces quality food, adds value to every harvest,
            and creates real economic opportunity within our communities.
          </p>
        </div>
        <div className=" rounded-lg overflow-hidden lg:w-300">
          <img src={whyPatnerimg} alt="" />
        </div>
      </motion.div>

      <div className="features flex flex-col gap-10 py-10 lg:flex-row lg:py-15">
        {features.map((feature) => (
          <Feature key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}