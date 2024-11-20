import React from "react";
import { ImManWoman } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { PiCertificateLight } from "react-icons/pi";

const PerfectCareer = () => {
  return (
    <div className="pt-5 bg-[#F1F0EA] rounded-lg ">
      <div className="text-center pt-5 pb-5 space-y-3 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold animate__animated  animate__zoomIn animate__slower	3s  animate__infinite	infinite text-green-500">
          Discover Your Perfect Career
        </h1>
        <p className="text-gray-500">
          Make smart decisions with our revolutionary AI enabled career guidance
          tools and expert career counsellors
        </p>
      </div>
      <div className="text-center pb-5 text-gray-500">
        <p>
          Career Assessment | Personalised Guidance | Profile Building | Virtual
          Internships |
        </p>
        <p>
          College Roadmap Planning | College Applications | Scholarship Hunt
        </p>
      </div>
      <div>
        <img
          className="mx-auto"
          src="https://mindlerimages.imgix.net/tinyimg/desktop.svg"
          alt=""
        />
      </div>

      <div className="bg-[#6D8CA0] rounded-lg grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 p-10 ">
        <div className="flex items-center gap-3 ">
          <div className=" rounded-full">
            <p className="p-4 bg-white rounded-full">
              <ImManWoman size={30} />
            </p>
          </div>
          <div className="text-white">
            <h1 className=" text-xl md:text-2xl lg:text-3xl">2.5 Million</h1>
            <p>Students Impacted</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className=" rounded-full">
            <p className="p-4 bg-white rounded-full">
            <PiCertificateLight size={30} />
            </p>
          </div>
          <div className="text-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl">51,000</h1>
            <p>Educators Certified</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className=" rounded-full">
            <p className="p-4 bg-white rounded-full">
            <LiaSchoolSolid size={30} />
            </p>
          </div>
          <div className="text-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl">250+</h1>
            <p>Partner Schools</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className=" rounded-full">
            <p className="p-4 bg-white rounded-full">
            <FaUniversity size={30} />
            </p>
          </div>
          <div className="text-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl">50+</h1>
            <p>University Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectCareer;
