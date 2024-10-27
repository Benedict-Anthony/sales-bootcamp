import React from "react";

const Title = ({ title }: { title: string }) => {
  return <h2 className="font-bold my-3 py-6 text-center text-xl">{title}</h2>;
};

export default Title;
