import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftshift() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1); //nageative case
    } else {
      setIndex(index - 1); //no negative case
    }
  }
  function rightshift() {
    if (index + 1 >= reviews.length) {
      setIndex(0); //array se bhar
    } else {
      setIndex(index + 1);
    }
  }
  function surprise() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      {<Card review={reviews[index]} />}

      <div className="flex text-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button
          onClick={leftshift}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={rightshift}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surprise}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-5 py-1 rounded-md font-bold text-white text-lg mt-3"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
