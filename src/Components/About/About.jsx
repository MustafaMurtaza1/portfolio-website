import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in creating responsive, user-friendly web
                  applications using HTML, CSS, and JavaScript. With a strong
                  focus on clean, efficient code, I ensure every project is both
                  functional and visually appealing. Passionate about continuous
                  learning, I stay updated on the latest frontend technologies
                  to deliver high-quality user experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Backend Developer, I build robust, scalable server-side
                  applications using Node.js, Express, and other modern
                  technologies. I specialize in creating efficient RESTful APIs,
                  integrating databases, and ensuring security and performance.
                  Committed to clean, maintainable code, I strive to deliver
                  high-quality backend solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Full Stack Developer, I craft seamless web applications
                  by combining responsive frontend designs with robust backend
                  functionality. Proficient in technologies like React, Node.js,
                  and MongoDB, I deliver end-to-end solutions that are scalable
                  and user-friendly. Passionate about coding, I ensure clean
                  architecture and high-performance results.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
