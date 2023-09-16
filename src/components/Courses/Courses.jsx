import { useEffect } from "react";
import Course from "../Course/course";
import { useState } from "react";

const Courses = ({ handleCourseRegistration, handleTotalPrice, handleTotalCredit, handleRemainingCredit }) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className=" w-3/4 bg-blue-400 grid md:grid-cols-3 gap-5">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleCourseRegistration={handleCourseRegistration}
                    handleTotalPrice={handleTotalPrice}
                    handleTotalCredit={handleTotalCredit}
                    handleRemainingCredit={handleRemainingCredit}
                ></Course>)
            }
        </div>

    );
};

export default Courses;