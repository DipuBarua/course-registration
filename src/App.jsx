
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
  }

  // Total price...
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = (price) => {
    const newTotalPrice = price + totalPrice;
    setTotalPrice(newTotalPrice);
    console.log(totalPrice);
  }

  // Total Credit 

  return (
    <>
      <Header></Header>
      <div className='flex mx-auto'>
        <Courses
          handleCourseRegistration={handleCourseRegistration}
          handleTotalPrice={handleTotalPrice}
        ></Courses>

        <Bookmarks
          courses={courses}
          totalPrice={totalPrice}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
