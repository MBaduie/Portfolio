import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-20 mt-10">
      <h1 className="text-4xl xl:text-6xl font-thin tracking-wide text-center ">
        Contact
        <span className="text-slate-500"> Me</span>
      </h1>
      <div className="flex flex-col jutify-center items-center font-extralight mt-6 lg:mt-9 gap-4">
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p className="underline">{CONTACT.email}</p>
      </div>
    </section>
  );
};

export default Contact;
