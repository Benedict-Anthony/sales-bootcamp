import About from "@/components/Home/About";
import Accordion from "@/components/Home/Accordion";
import BootCamp from "@/components/Home/BootCamp";
import Host from "@/components/Home/Host";
import Landing from "@/components/Home/Landing";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("@/components/Home/Reviews"));
export default function Home() {
  return (
    <Fragment>
      <Landing />
      <About />
      <Host />
      <BootCamp />
      <Accordion />
      <Reviews />
    </Fragment>
  );
}
