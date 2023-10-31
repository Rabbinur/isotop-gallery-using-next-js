"use client";
import { portfolioData } from "../../../constants";
import Image from "next/image";
import styles from "../../../styles/Gallery.module.css";
import { motion } from "framer-motion";

import { useRef } from "react";
import { fadeIn } from "./../../../constants/animations/variants";

const defaultAnimations = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
        duration: 1.2 * index,
        type: "tween",
  
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
  }),
};
const GalleryPage = () => {
  const ref = useRef(null);
  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.5 }}
        ref={ref}
        className="py-32 px-5"
      >
        <motion.h1
          variants={fadeIn("down", 0.2)}
          className="text-center md:bold-40 bold-32"
        >
          Sample of Work Gallery
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.4)}
          className="description mx-auto text-justify max-w-[740px] py-5"
        >
          Our goal is to deliver high-quality images that not only meet but
          exceed our clients’ expectations. We pride ourselves on our
          creativity, professionalism, and attention to detail, and we look
          forward to capturing your special moments.
        </motion.p>
      </motion.div>
      <motion.div
        ref={ref}
        className={`md:columns-3 container pb-20 columns-1 gap-8 styles.gallery`}
      >
        {portfolioData.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={defaultAnimations}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.5 }}
              custom={index}
              transition={{ staggerChildren: 0.3 }}
              className={` mb-[12px] cursor-pointer hover:opacity-80 duration-300 styles.pics`}
            >
              <Image src={item.image} />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default GalleryPage;
