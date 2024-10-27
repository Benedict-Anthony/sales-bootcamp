import React from "react";
import Container from "../Shared/Container";
import wifi from "@/assets/icons/wifi.png";
import edit from "@/assets/icons/edit.png";
import calendar from "@/assets/icons/calendar.png";
import certificate from "@/assets/images/certificate.png";
import Image from "next/image";
import { Divider } from "../Shared/Divider";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Title from "../Shared/Title";

const BootCamp = () => {
  return (
    <Container>
      <Divider />
      <Title title="Bootcamp Content" />

      <div className=" w-full md:w-[700px] mx-auto">
        <div className="w-full md:w-[700px] mx-auto space-y-2">
          <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Section 1 - Introduction
            </div>
            <div className="collapse-content"></div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Section 2 - Basics
            </div>
            <div className="collapse-content"></div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Section 3 - Intermediate
            </div>
            <div className="collapse-content"></div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Section 4 - Advanced
            </div>
            <div className="collapse-content">
              <div className="space-y-2 w-full">
                <div className="collapse join-item border-base-300 border rounded-md">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium flex justify-start items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="wifi"
                      src={wifi}
                      className="border-blue border w-10 p-2 rounded-md"
                    />
                    Working with Flutter
                  </div>
                </div>

                <div className="collapse  join-item border-base-300 border rounded-md">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium flex justify-start items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="wifi"
                      src={edit}
                      className="border-blue border w-10 p-2 rounded-md"
                    />
                    Assignment Title
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      {/* Live Class Schedule*/}
      <Title title="Live Class Schedule" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div
            className=" border border-base-300 rounded-md space-y-5 p-4"
            key={num}
          >
            <span className="text-[#000000] ">Live class</span>
            <div className="flex justify-start items-center gap-3">
              <Image src={calendar} width={20} height={20} alt="calendar" />
              <p className="text-base text-[#000000] ">Every Tuesday</p>
            </div>
            <div className="flex justify-start items-center gap-3 text-[#000000] text-base font">
              <MdAccessTimeFilled size={20} className="text-[#000000] " />
              4:00PM - 6:00PM (WAT)
            </div>
          </div>
        ))}
      </div>

      <Divider className="mt-14" />

      {/* Requirements for this Bootcamp */}

      <Title title=" Requirements for this Bootcamp" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="border border-lightGray rounded-lg p-6">
            <div className="w-10 h-10 rounded-full bg-lightGray flex justify-center items-center flex-col font-bold">
              {num}
            </div>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        ))}
      </div>
      <Divider className="my-14" />

      {/* This Bootcamp Includes */}
      <Title title="This Bootcamp Includes" />
      <div className="space-y-4 w-full md:w-[800px] mx-auto">
        {[1, 2, 3, 4].map((num) => (
          <div className="flex justify-start items-start gap-2" key={num}>
            <div className="w-10 h-10 bg-lightGray flex justify-center items-center flex-col p-2 rounded-lg">
              <FaCheck className="text-blue" size={50} />
            </div>
            <p className="ml-3 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur.
            </p>
          </div>
        ))}
      </div>
      <Divider className="my-14" />

      {/* You’ll Get A Certificate Of  Completion */}

      <Title title="You’ll Get A Certificate Of  Completion" />

      <Image
        src={certificate}
        alt="certificate"
        width={400}
        height={400}
        className="w-full md:w-[800px] mx-auto"
      />
      <Divider className="my-14" />
    </Container>
  );
};

export default BootCamp;
