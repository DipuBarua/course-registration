import PropTypes from 'prop-types';
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

Bookmark.propTypes={
    course: PropTypes.object,
}
export default Bookmark;