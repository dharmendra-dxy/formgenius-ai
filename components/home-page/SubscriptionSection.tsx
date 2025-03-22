import React from "react";
import { subscriptionPlans } from "@/lib/constants";
import { SubscriptionPlans } from "@/lib/types";
import SubscriptionCard from "./SubscriptionCard";


const SubscriptionSection = () => {
  return (
    <section className="my-24 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl lg:text-2xl font-semibold">
          Plans and Pricing
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Receive unlimited credit when you pay and save your plans.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {subscriptionPlans.map((item: SubscriptionPlans) => (
          <SubscriptionCard
          key={item.plan}
          plan={item.plan}
          price={item.price}
          services={item.services}
          />
        ))}
      </div>
    </section>
  );
};

export default SubscriptionSection;
