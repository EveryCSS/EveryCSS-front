"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/modules";

const Example = () => {
  const { example1, example2, example3 } = useSelector(
    (state: RootState) => state.example.value
  );

  return (
    <div>
      <h1>example1: {example1}</h1>
      <h1>example2: {example2}</h1>
      <h1 className={`${example3 && "bg-neutral-700"}`}>
        example3: {example3}
      </h1>
    </div>
  );
};

export default Example;
