// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const newTotalPriceFixed = + newTotalPrice.toFixed(2);
    setTotalPrice(newTotalPriceFixed);
  };


  // Total Credit 
  const [totalCredit, setTotalCredit] = useState(0);
  const handleTotalCredit = (credit) => {
    const newTotalCredit = totalCredit + credit;

    if (newTotalCredit <= 20) {
      setTotalCredit(newTotalCredit);
    }
    else {
      console.log('more than 20cr');
      notify();//call toast
      setTotalCredit(0)
      setTotalPrice(0)
      setCourses([])
    }
  };


  // Remaining Credit
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleRemainingCredit = (credit) => {
    const newRemainingCredit = remainingCredit - credit;

    if (newRemainingCredit < 0) {
      setRemainingCredit(20);
    }
    else {
      setRemainingCredit(newRemainingCredit);
    }
  };

// toast function
  const notify = () => toast("Credit Limit Over!");

  return (
    <>
      <ToastContainer />

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
