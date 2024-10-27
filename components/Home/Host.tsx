import { hosts } from "@/constants/hosts";
import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";

const Host = () => {
  return (
    <div className="w-[800px] mx-auto px-3 mb-10">
      <h4 className="text-center py-10">Host</h4>
      <div>
        <SingleHost host={hosts[0]} />
      </div>
      <h4 className="text-center py-10">Co-host</h4>
      <div className="space-y-10">
        {hosts.slice(1, 3).map((host) => (
          <SingleHost key={host.id} host={host} />
        ))}
      </div>
      <h4 className="text-center py-10">Co-host</h4>
      <div className="flex justify-between items-start gap-10">
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
    <div className="flex gap-3 justify-start items-center space-y-5 ">
      <Image src={host.imageUrl} alt={host.name} width={300} height={300} />
      <div className="">
        <p className="text-dark text-sm">{host.username}</p>
        <h3 className="text-bold font-bold">{host.name}</h3>
        <p className="text-dark text-xl font-normal">{host.description}</p>
        <div className="flex justify-between items-center mt-2">
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
    <div className="flex flex-col gap-3 justify-start items-center">
      <Image src={host.imageUrl} alt={host.name} width={300} height={300} />
      <div className="">
        <p className="text-dark text-sm">{host.username}</p>
        <h3 className="text-bold font-bold">{host.name}</h3>
        <p className="text-dark text-base font-normal">{host.description}</p>
      </div>
    </div>
  );
};
