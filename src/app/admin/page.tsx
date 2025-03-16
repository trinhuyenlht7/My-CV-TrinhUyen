"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const UyenTrinh = () => {
  const router = useRouter();
  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div>
      Hello my name is Uyên
      <div>
        <Button
          variant="primary"
          style={{ border: "1px solid while", borderRadius: 5, padding: 5 }}
          onClick={() => handleBackHome()}
        >
          Home back to home page
        </Button>
      </div>
    </div>
  );
};

export default UyenTrinh;
