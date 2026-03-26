import { motion, useInView } from "motion/react"
import { useRef } from "react";

export default function Feature({ feature }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

    return(
         <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
            className="feature "
          >

            <div className="flex">
              <div className="w-10 h-10 rounded-lg bg-green-600 p-1 flex">
                <feature.icon className="text-white" />
              </div>
              <h3 className=" px-4 pt-2">{feature.title}</h3>
            </div>
            <p className="pt-2 text-gray-500">{feature.description}</p>

         </motion.div>
    );
}