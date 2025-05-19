import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Hi I am in Navbar and using state as props drilling so the count is {count}.
    </div>
  )
}

export default Navbar
