
const Bookmark = ({ course }) => {
    const { courseName } = course;

    return (
        <div>
            <ol className=" list-disc">
                <li> {courseName} </li>
            </ol>
        </div>

    );
};

export default Bookmark;