import React from 'react'

const PageHeader = (title, path) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
        <div>
            <h2 className='text-3x1 text-custom-blue font-medium mb-1 text-center' >SALARY ESTIMATE</h2>
            <p className='text-sm text-center'> <a href="/">Home</a></p>
        </div>
    </div>
  )
}

export default PageHeader  