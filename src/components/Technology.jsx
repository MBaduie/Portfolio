//icons from React Icons
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
//Framer Motion
import { motion } from "framer-motion";

const IconsAnimatoin = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [20, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technology = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 border-b border-neutral-900 mt-20 container mx-auto mb-10">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="flex items-center justify-center"
      >
        <h1 className="capitalize text-4xl font-thin tracking-wide xl:text-6xl lg:pt-20 mb-12 max-xl:mb-6 text-center">
          Technologies
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-9 py-8"
      >
        <motion.div
          // className=" p-2"
          variants={IconsAnimatoin(1)}
          initial="initial"
          animate="animate"
        >
          <FaReact className="text-8xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={IconsAnimatoin(1.1)}
          initial="initial"
          animate="animate"
        >
          <RiTailwindCssFill className="text-8xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={IconsAnimatoin(1.15)}
          initial="initial"
          animate="animate"
        >
          <BiLogoTypescript className="text-8xl text-blue-600 " />
        </motion.div>
        <motion.div
          variants={IconsAnimatoin(1.2)}
          initial="initial"
          animate="animate"
        >
          <RiNextjsFill className="text-8xl text-white" />
        </motion.div>
        <motion.div
          variants={IconsAnimatoin(1.25)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-8xl text-green-500" />
        </motion.div>
        <motion.div
          variants={IconsAnimatoin(1.35)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-8xl text-green-700" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technology;
