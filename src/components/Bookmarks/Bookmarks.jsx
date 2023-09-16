import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ courses, totalPrice, totalCredit, remainingCredit }) => {
    // console.log(remainingCredit);
    // console.log(totalCredit);
    // console.log(totalPrice);
    return (
        <div className=" md:w-1/4 h-1/3 bg-slate-300 rounded-xl mx-8 my-4 px-5 py-5">
            <h1 className=' text-lg font-bold text-blue-500'>Credit Hour Remaining {remainingCredit} hr</h1>
            <br />
            <hr />
            <br />
            <h1 className=' text-xl font-bold'>Course Name</h1>
            <br />
            {
                courses.map((course, idx) => <Bookmark key={idx} course={course}></Bookmark>)
            }
            <br />
            <hr />
            <br />
            <h1 className=' text-base font-medium'>Total Credit: {totalCredit}</h1>
            <br />
            <hr />
            <br />
            <h1 className=' text-base font-semibold'>Total Price: {totalPrice} USD</h1>
        </div>
    );
};

Bookmarks.propTypes = {
    courses: PropTypes.array,
    totalPrice: PropTypes.number,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
}
export default Bookmarks;