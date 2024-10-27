"use client";
import React from "react";
import Container from "../Shared/Container";
import Title from "../Shared/Title";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import avata from "@/assets/images/avata.png";
import { IoIosPlay } from "react-icons/io";
import ReactStars from "react-stars";

const Reviews = () => {
  return (
    <Container>
      <Title title="Host Reviews" />
      <div className="mt-5 py-4 px-2 shadow-lg rounded-md flex justify-start items-center drop-shadow my-3">
        <div className="flex justify-center items-center flex-col w-1/4">
          <h1 className="font-bold text-xl flex gap-3 justify-center items-center">
            4. 5 <IoStar className="text-lightYellow" size={20} />
          </h1>
          <span>80 Reviews</span>
        </div>

        <div className="w-3/4 space-y-5">
          <ReviewsPercentage percent={"w-[85%]"} number="35" />
          <ReviewsPercentage percent={"w-[65%]"} number="30" />
          <ReviewsPercentage percent={"w-[30%]"} number="3" />
          <ReviewsPercentage percent={"w-[45%]"} number="7" />
        </div>
      </div>
      <div className="mt-5">
        {[1, 2, 3].map((num) => (
          <div className="" key={num}>
            <div className="flex justify-start items-center gap-4">
              <Image
                src={avata}
                width={30}
                height={30}
                className="w-10 rounded-full"
                alt="avata"
              />
              <h1 className="font-bold text-xl">John David</h1>
            </div>

            <div className="mb-5">
              <h1>
                <IoIosPlay className="inline" />
                Introduction to Android Development
              </h1>
              <ReactStars
                count={5}
                edit={false}
                value={4}
                size={24}
                color2={"#ffd700"}
              />
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur. Viverra vel ornare mauris donec aenean gravida
              aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
              volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec
              aenean gravida aliquet vestibulum quam. Vitae ullamcorper
              dignissim auctor quis volutpat morbi arcu blandit massa.
            </p>
            <p className="my-1">
              28th March <span>10:10AM</span>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;

const ReviewsPercentage = ({
  percent,
  number,
}: {
  percent: string;
  number: string;
}) => (
  <div className="flex justify-center items-center gap-2">
    <div className="w-full h-1 bg-lightGray rounded-md flex justify-between items-center">
      <div className={`${percent} bg-lightYellow h-full rounded-md`}></div>
    </div>
    <p className=""> {number}</p>
  </div>
);
