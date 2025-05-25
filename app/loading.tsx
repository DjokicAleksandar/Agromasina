import React from 'react'
import { Ring } from 'react-css-spinners'

const loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-4xl gap-3'>
        <Ring color='rgb(10, 43, 20)'/>
        <div>Učitavanje...</div>
    </div>
  )
}

export default loading