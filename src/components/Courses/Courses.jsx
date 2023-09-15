import { useEffect } from "react";
import Course from "../Course/course";
import { useState } from "react";

const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className=" grid md:grid-cols-3 gap-5">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;