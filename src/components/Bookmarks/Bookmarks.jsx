import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ courses, totalPrice }) => {
    // console.log(totalPrice);
    return (
        <div className=" w-1/4 ">
            <h1>Course Name</h1>
            {
                courses.map(course => <Bookmark course={course}></Bookmark>)
            }
            <br />
            <hr />
            <h1>Total courses: {courses.length}</h1>
            <h1>total price:{totalPrice}</h1>
        </div>
    );
};

export default Bookmarks;