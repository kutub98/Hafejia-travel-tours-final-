import React from "react";
import ServiceCard from "./Card";

const AllService = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-1">
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default AllService;
