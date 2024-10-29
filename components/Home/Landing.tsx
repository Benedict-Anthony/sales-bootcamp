import React, { Fragment } from "react";
import Button from "../Shared/Button";
import { IoCalendarClearOutline, IoHeartOutline } from "react-icons/io5";
import hero from "@/assets/images/hero.png";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import bootcamp from "@/assets/icons/bootcamp.png";
import Container from "../Shared/Container";

const Landing = () => {
  return (
    <Fragment>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-10  py-10">
          <div className="">
            <h2 className="font-bold text-dark text-3xl text-center md:text-left md:text-5xl md:leading-[76px]">
              Foundation of Android <br />
              Development
            </h2>

            <div className="text-base md:text-2xl mt-4 font-normal text-center md:text-left md:leading-[42px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur.
            </div>

            <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
              <p className="flex justify-start items-center gap-1">
                <Image
                  src={bootcamp}
                  width={30}
                  height={30}
                  alt="bootcamp"
                  className="w-4"
                />
                Bootcamp
              </p>
              <p className="flex justify-start items-center gap-1">
                <IoMdTime />4 weeks
              </p>
              <p className="flex justify-start items-center gap-1">
                <IoCalendarClearOutline />
                3rd December
              </p>
            </div>
            {/* <div className="flex justify-center items-center">
  
</div> */}
            <h3 className="font-bold text-center md:text-left text-dark text-4xl mt-10">
              N30,000
            </h3>

            <div className="flex justify-center md:justify-start items-center gap-5 mt-5">
              <Button
                text="Enrol Now"
                className="text-white text-sm font-bold bg-blue rounded-3xl px-10 py-4"
              />

              <IoHeartOutline size={20} />
            </div>
          </div>
          <div className="w-full">
            <Image
              src={hero}
              width={400}
              height={400}
              priority
              alt="hero"
              className="w-[80%] h-full mx-auto md:w-[555px] md:h-[506px] "
            />
          </div>
        </div>
      </Container>
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-4 bg-lightRed rounded-md">
        <p className=" text-red text-2xl text-center md:text-left">
          Registration Deadline:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-6">
          <Duration lightText="Days" boldText="03" />
          <Duration lightText="hours" boldText="15" />
          <Duration lightText="mins" boldText="24" />
          <Duration lightText="sec" boldText="33" />
        </div>
        <Button
          text="Enrol Now"
          className="bg-white text-sm font-bold rounded-3xl px-10 py-4 mt-5 md:mt-0"
        />
      </div>
    </Fragment>
  );
};

export default Landing;

const Duration = ({
  boldText,
  lightText,
}: {
  boldText: string;
  lightText: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className=" font-bold text-[40px]">{boldText}</h2>
      <p className="text-xl font-normal">{lightText}</p>
    </div>
  );
};
