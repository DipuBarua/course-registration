import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';

const Course = ({ course, handleCourseRegistration, handleTotalPrice, handleTotalCredit, handleRemainingCredit }) => {
    const { image, courseName, details, price, credit } = course;
    return (
        <div>
            <div className=" rounded-xl p-5 shadow-xl space-y-3">
                <div>
                    <img className=" w-full rounded-xl text-center" src={image} alt="" />
                </div>
                <h2 className=" text-lg font-semibold">{courseName}</h2>
                <p className=" text-sm font-normal">{details}</p>

                <div className=" flex justify-between text-base font-medium">
                    <div className='flex gap-3'>
                        <FiDollarSign></FiDollarSign>
                        <span>Price : {price}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span><BsBook></BsBook></span>
                        <span>Credit : {credit}hr</span>
                    </div>
                </div>
                <button onClick={() => { handleCourseRegistration(course); handleTotalPrice(price); handleTotalCredit(credit); handleRemainingCredit(credit) }} className=" w-full bg-blue-500 rounded-lg p-2 text-white">Select</button>
            </div>
        </div>

    );
};

export default Course;