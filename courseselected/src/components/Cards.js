import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let course = props.course;
  let category = props.category;
  const [likedcourses, setLikedCourses] = useState([]);
  // let allCourses = [];
  // //return u a lidt of al courses recevied from the api reponse
  // const getCourses = () => {
  //   Object.values(courses).forEach((courseCategory) => {
  //     courseCategory.forEach((course) => {
  //       allCourses.push(course);
  //     });
  //   });
  //   return allCourses;
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(course).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
          console.log(courseData);
        });
      });
      return allCourses;
    }
    else{
      //main sirf specific category ka data pass karunga
      return course[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 ">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedcourses={likedcourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
