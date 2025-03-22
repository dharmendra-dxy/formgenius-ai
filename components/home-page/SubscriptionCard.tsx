import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import { SubscriptionPlans } from "@/lib/types";


const SubscriptionCard = ({ plan, price, services }: SubscriptionPlans) => {
  return (
    <Card
      className={`w-[350px] flex flex-col justify-between ${
        plan == "Enterprise" ? "bg-[#1c1c1c] text-white" : null
      } hover:scale-[1.05] transition-all duration-300`}
    >
      <CardHeader className="flex items-center">
        <CardTitle className="font-semibold">{plan}</CardTitle>
        {plan == "Pro" && (
          <Badge className="bg-amber-400 hover:bg-amber-500 rounded-full">
            Popular
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-medium">{price}</p>
        <ul className="mt-4 space-y-2">
          {services.map((text: string, index: number) => (
            <li key={index} className="flex gap-2 items-center">
              <span className="text-white bg-blue-500 rounded-full">
                <Check size={20} />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          Get {plan}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
