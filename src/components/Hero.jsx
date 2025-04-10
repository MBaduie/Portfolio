import { HERO_CONTENT } from "../constants";
import personlRemoval from "../assets/images/personalRemoval.png";
// Framer Motion
import { motion } from "framer-motion";

const container = (duration, delay) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
      staggerChildren: 0.2,
    },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex items-center lg:items-start  max-lg:flex-col-reverse justify-start max-xl:justify-between lg:gap-4">
        <div className="flex flex-1 flex-col items-center lg:items-start px-8 max-xl:w-lg w-full ">
          <motion.h1
            variants={container(2, 0)}
            initial="hidden"
            animate="show"
            className="mb-12 max-xl:mb-6 text-3xl font-thin tracking-wide xl:text-6xl lg:pt-20 "
          >
            Muhammed Badauie
          </motion.h1>
          <motion.span
            variants={container(2, 0.5)}
            initial="hidden"
            animate="show"
            className="bg-gradient-to-r from-amber-400 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-normal mb-8 xl:text-6xl font-bold"
          >
            JavaScript Developer
          </motion.span>
          <motion.p
            variants={container(2, 1)}
            initial="hidden"
            animate="show"
            className="my-2 max-w-xl font-light text-justify"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        {/* ------------------------------------------------------------ */}

        <motion.div
          initial={{ x: "100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="flex flex-1 max-w-md max-h-md max-lg:w-64 max-lg:h-64 max-xl:max-w-sm max-xl:max-sm items-center justify-center max-lg:mb-10 mb-12 "
        >
          <img
            src={personlRemoval}
            alt="Muhammed Badauie"
            className="max-lg:rounded-full rounded-3xl w-full object-contain h-auto "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
