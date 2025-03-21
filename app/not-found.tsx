import Container from "@/components/general/Container";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Container>
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <FileSearch className="text-gray-600" />
          <p className="mt-2 text-gray-600 font-medium text-sm lg:text-base">
            You Might be looking for the wrong link
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold mt-6">
            Page Not Found
          </h2>

          <Link href="/" className="mt-8">
            <Button variant="outline">Go to Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default page;
