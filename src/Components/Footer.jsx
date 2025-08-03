import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-8 mt-auto'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='text-center'>
          <p className='text-gray-400 mb-4'>
            © 2024 My Portfolio. All rights reserved.
          </p>
          <div className='flex justify-center space-x-6'>
            <a href="#" className='text-gray-400 hover:text-white'>GitHub</a>
            <a href="#" className='text-gray-400 hover:text-white'>LinkedIn</a>
            <a href="#" className='text-gray-400 hover:text-white'>Twitter</a>
            <a href="#" className='text-gray-400 hover:text-white'>Email</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer