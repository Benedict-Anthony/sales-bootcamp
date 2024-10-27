import React from "react";
import about from "@/assets/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="font-bold text-[32px] text-dark text-center py-4">
        About this Bootcamp
      </h2>
      <div className="w-full md:w-[999px] mx-auto">
        <Image
          src={about}
          width={400}
          height={400}
          className="w-full"
          alt="about"
        />
      </div>

      <p className="text-xl text-center w-full md:w-[1140px] mx-auto leading-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
        pulvinar interdum porttitor elit quis elementum duis curabitur.
        Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
        Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam.
        Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit
        massa. Adipiscing ac ut eros, sed aenean justo lacinia ornare
        consectetur. See More
      </p>
      <button className=" text-center flex justify-center items-center  text-blue mt-5 w-full">
        see more
      </button>
    </div>
  );
};

export default About;
