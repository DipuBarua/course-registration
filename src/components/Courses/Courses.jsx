import PropTypes from 'prop-types';
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
        <div className=" md:w-3/4 grid md:grid-cols-3 gap-5">
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

Courses.propTypes = {
    handleCourseRegistration: PropTypes.func,
    handleTotalPrice: PropTypes.func,
    handleTotalCredit: PropTypes.func,
    handleRemainingCredit: PropTypes.func,
}
export default Courses;