import { CONTACT } from "../constants";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8">
      <h2 className="my-10 text-center text-2xl md:text-4xl font-bold">
        Get in Touch
      </h2>
      <div className="text-center tracking-tight">
        <div className="my-1 flex flex-col items-center gap-2 md:gap-3">
          <p className="font-semibold text-lg md:text-xl flex items-center justify-center gap-2">
            <ImLocation className="text-xl md:text-2xl" />
            <span>{CONTACT.address}</span>
          </p>
          <p className="font-semibold text-lg md:text-xl flex items-center justify-center gap-2">
            <FaLinkedin className="text-xl md:text-2xl text-blue-600" />
            <a
              href={CONTACT.linkedin} // Ensure CONTACT.linkedin is the correct URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sapna Sharma
            </a>
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="my-1 font-semibold text-lg md:text-xl flex items-center justify-center gap-2"
          >
            <AiOutlineMail className="text-xl md:text-2xl text-red-600" />
            <span className="text-red-600">{CONTACT.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
