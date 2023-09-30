import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if (likedcourses.includes(course.id)) {
      //phle se like hua
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      toast.warning("Like Removed");
    } else {
      //phle se like nhi ho
      //insert karna
      if (likedcourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //phle se bhara ho
        setLikedCourses((prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Succesfully");
    }
  }
  return (
    <div className="bg-[#343a40] bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="img" />

        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {!likedcourses.includes(props.course.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100)+"...."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
