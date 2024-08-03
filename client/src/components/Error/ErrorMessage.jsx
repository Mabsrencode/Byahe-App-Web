import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <div className='fixed top-0 left-0 z-[1000] w-full h-full bg-primary'><h1>{message}</h1></div>
    )
}

export default ErrorMessage