
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [courses, setCourses] = useState([]);
  const handleCourseRegistration = (addCourse) => {
    const newCourses = [...courses, addCourse];
    setCourses(newCourses);
  };

  // Total price...
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = (price) => {
    const newTotalPrice = price + totalPrice;
    setTotalPrice(newTotalPrice);
  };
  // console.log(totalPrice);

  // Total Credit 
  const [totalCredit, setTotalCredit] = useState(0);
  const handleTotalCredit = (credit) => {
    const newTotalCredit = totalCredit + credit;
    setTotalCredit(newTotalCredit);
  };
  // console.log('totalCredit:', totalCredit);

  // Remaining Credit
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleRemainingCredit = (credit) => {
    const newRemainingCredit = remainingCredit - credit;
    setRemainingCredit(newRemainingCredit);
  };
  // console.log('remainingCredit:', remainingCredit);

  return (
    <>
      <Header></Header>
      <div className='flex mx-auto'>
        <Courses
          handleCourseRegistration={handleCourseRegistration}
          handleTotalPrice={handleTotalPrice}
          handleTotalCredit={handleTotalCredit}
          handleRemainingCredit={handleRemainingCredit}
        ></Courses>

        <Bookmarks
          courses={courses}
          totalPrice={totalPrice}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
