import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ courses, totalPrice, totalCredit, remainingCredit }) => {
    // console.log(remainingCredit);
    // console.log(totalCredit);
    // console.log(totalPrice);
    return (
        <div className=" w-1/4 ">
            <h1>Credit hour remaining:{remainingCredit}</h1>
            <h1>Course Name: {courses.length}</h1>
            {
                courses.map(course => <Bookmark course={course}></Bookmark>)
            }
            <hr />
            <br />
            <h1>Total Credit: {totalCredit}</h1>
            <hr />
            <br />
            <h1>Total Price:{totalPrice} USD</h1>
        </div>
    );
};

export default Bookmarks;