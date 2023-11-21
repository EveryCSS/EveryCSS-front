"use client";

import { useSelector, useDispatch } from "react-redux";

import { RootState, reduces } from "@/redux/modules";

const Example = () => {
  const { name, age, isGrey } = useSelector(
    (state: RootState) => state.example.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-4">
        <h1>name: {name}</h1>
        <button
          className="w-40 bg-yellow-200"
          onClick={() => dispatch(reduces.setName({ name: "Chris Ohk" }))}
        >
          change to Chris Ohk
        </button>
      </div>
      <div className="flex gap-4">
        <h1>age: {age}</h1>
        <button
          className="w-20 bg-red-600"
          onClick={() => dispatch(reduces.plusAge())}
        >
          plus
        </button>
        <button
          className="w-20 bg-blue-600"
          onClick={() => dispatch(reduces.minusAge())}
        >
          minus
        </button>
      </div>
      <div className="flex gap-4">
        <h1
          className={`${isGrey && "bg-neutral-700"} ${
            isGrey && "text-fuchsia-500"
          }`}
        >
          isGrey: {String(isGrey)}
        </h1>
        <button
          className="w-20 bg-green-500"
          onClick={() => dispatch(reduces.setIsGrey())}
        >
          change
        </button>
      </div>
    </div>
  );
};

export default Example;
