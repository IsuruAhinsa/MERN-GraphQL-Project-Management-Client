import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
        <h1 className='text-5xl font-bold'>404</h1>
        <p className='font-thin'>
            Sorry, this page does not exist!
        </p>
        <Link className='text-blue-500 hover:underline ' to="/">Go Home</Link>
    </div>
  )
}

export default NotFound