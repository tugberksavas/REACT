import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Course from "./Course";
import "./css/Course.css";

function App() {
  return (
    <>
      <Header />
      <div className="course-main" >
      {courses?.map((course) => (
        <Course key={course.id} course={course} />
      ))}
      </div>
    </>
  );
}

export default App;
