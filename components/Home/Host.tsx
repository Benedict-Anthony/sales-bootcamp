import { hosts } from "@/constants/hosts";
import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";
import Title from "../Shared/Title";

const Host = () => {
  return (
    <div className="w-full md:w-[800px] mx-auto px-3 mb-10">
      <Title title="Host" />
      <div>
        <SingleHost host={hosts[0]} />
      </div>
      <Title title="Co Host" />
      <div className="space-y-10">
        {hosts.slice(1, 3).map((host) => (
          <SingleHost key={host.id} host={host} />
        ))}
      </div>
      {/* <h4 className="text-center py-10">Co-host</h4> */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-16">
        {hosts.slice(3, hosts.length + 1).map((host) => (
          <Instructor key={host.id} host={host} />
        ))}
      </div>
    </div>
  );
};

export default Host;

const SingleHost = ({ host }: { host: (typeof hosts)[0] }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-start items-center space-y-5 w-full ">
      <Image
        src={host.imageUrl}
        alt={host.name}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="">
        <p className="text-center md:text-left text-dark text-sm">
          {host.username}
        </p>
        <h3 className="text-bold font-bold md:text-left text-center">
          {host.name}
        </h3>
        <p className="text-dark text-base text-center md:text-left md:text-xl font-normal">
          {host.description}
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center mt-2 gap-10">
          <div className="text-xl font-bold">
            <p className="flex justify-start items-center">
              {host.rating} <MdStarRate className="text-lightYellow" />
            </p>
            <span className="font-normal text-sm">{host.reviews}</span>
          </div>
          <p className="text-xl font-bold">
            {host.transactions} <br />
            <span className="font-normal text-sm">Transactions</span>
          </p>
          <p className="text-xl font-bold">
            {host.customers} <br />
            <span className="font-normal text-sm">Customers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Instructor = ({ host }: { host: (typeof hosts)[0] }) => {
  return (
    <div className="flex flex-col justify-start items-center gap-10">
      <Image
        src={host.imageUrl}
        alt={host.name}
        width={300}
        height={300}
        className="md:w-full w-3/4"
      />
      <div className="">
        <p className="text-dark text-sm text-center md:text-left">
          {host.username}
        </p>
        <h3 className="text-bold font-bold text-center md:text-left">
          {host.name}
        </h3>
        <p className="text-dark text-base font-normal text-center md:text-left">
          {host.description}
        </p>
      </div>
    </div>
  );
};
