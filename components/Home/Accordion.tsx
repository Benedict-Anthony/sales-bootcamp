import React from "react";
import Container from "../Shared/Container";
import Title from "../Shared/Title";
import { Divider } from "../Shared/Divider";

const Accordion = () => {
  return (
    <Container>
      <Title title="Frequently Asked Questions" />
      <div className="w-full md:w-[800px]  mx-auto space-y-2">
        <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is Android Development?
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-dark">
            What is Android Development?
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border rounded-md">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is Android Development?
          </div>
          <div className="collapse-content">
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              quam pulvinar interdum porttitor elit quis elementum duis
              curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare
              consectetur. Viverra vel ornare mauris donec aenean gravida
              aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
              volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec
              aenean gravida aliquet vestibulum quam. Vitae ullamcorper
              dignissim auctor quis volutpat morbi arcu blandit massa.
            </p>
          </div>
        </div>
      </div>
      <Divider className="my-10" />
    </Container>
  );
};

export default Accordion;
