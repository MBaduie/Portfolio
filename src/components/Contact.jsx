import { CONTACT } from "../constants";

//Framer motion
import { motion } from "framer-motion";

const ContactAnimation = (duration, delay) => ({
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration || 0.5,
      delay: delay || 0.2,
      ease: "easeInOut",
    },
  },
});
const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-20 mt-10">
      <motion.h1
        variants={ContactAnimation(2, 0.5)}
        initial="initial"
        whileInView="animate"
        className="text-4xl xl:text-6xl font-thin tracking-wide text-center "
      >
        Contact
        <span className="text-slate-500"> Me</span>
      </motion.h1>
      <div className="flex flex-col jutify-center items-center font-extralight mt-6 lg:mt-9 gap-4">
        <motion.p
          variants={ContactAnimation(2, 0.75)}
          initial="initial"
          whileInView="animate"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          variants={ContactAnimation(2, 0.9)}
          initial="initial"
          whileInView="animate"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          variants={ContactAnimation(2, 1.0)}
          initial="initial"
          whileInView="animate"
          className="underline"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
