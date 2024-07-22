import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      </div>
    </Html>
  );
};

export default Loader;
