import officeImage from "../assets/images/office.jpg";
import founder from "../assets/images/team/founder.jpg";
import head from "../assets/images/team/Head.jpeg";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:w-[85%] lg:w-[60%] px-4 gap-10">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={officeImage}
            alt="Team collaboration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 px-0 md:px-8 space-y-6">
          {/* About Tag */}
          <div className="text-gray-400 uppercase text-sm flex">
            <div className="bg-[#000327] py-1 px-4 font-bold border border-neutral-50/20 rounded-full shadow-md shadow-blue-500/30">
              ABOUT US
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">
            DISCOVER WHO WE ARE <br /> AND OUR MISSION
          </h1>

          {/* Description */}
          <p className="text-gray-500">
            Discover who we are and our mission at
            <span className="text-blue-400">VisQode</span>.We are a passionate
            team of creative professionals dedicated to crafting exceptional web
            design and branding solutions. Our mission is to empower businesses
            with innovative websites and brand identities that captivate
            audiences and drive measurable results.{" "}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#">
              <button className="bg-gradient-to-b from-[#2154ff] to-[#531bf6] text-white px-6 py-3 rounded-full flex justify-center items-center gap-2">
                Contact us <i className="text-xl bx bx-arrow-up-right"></i>
              </button>
            </a>
            <a href="#">
              <button className="bg-gradient-to-l from-[#0d132d] to-[#0a0f2c] text-white px-6 py-3 rounded-full flex justify-center items-center gap-2 border border-neutral-300/30">
                View Projects <i className="text-xl bx bx-arrow-up-right"></i>
              </button>
            </a>
          </div>

          {/* Team Members */}
          <div className="flex flex-row sm:flex-row gap-6">
            {/* Member 1 */}
            <div className="flex items-center ">
              <img
                src={founder}
                alt="Abdulla Al Mahin"
                className="w-14 h-14 rounded-lg mr-4"
              />
              <div>
                <p className="text-white font-semibold">Abdulla Al Mahin</p>
                <p className="text-gray-400 text-sm">Founder & CEO</p>
              </div>
              <a href="">
                <i className="text-2xl ml-3 bxl bx-linkedin text-gray-400"></i>
              </a>
            </div>

            {/* Member 2 */}
            <div className="flex items-center">
              <img
                src={head}
                alt="Abdul Rehman"
                className="w-14 h-14 rounded-lg mr-4"
              />
              <div>
                <p className="text-white font-semibold">Abdul Rehman</p>
                <p className="text-gray-400 text-sm">Co-Founder</p>
              </div>
              <a href="">
                <i className="text-2xl ml-3 bxl bx-linkedin text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
