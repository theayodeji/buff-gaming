import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error({errorText}) {

    const navigate = useNavigate();

  return (
    <div className='container error'>
        <div className="error-wrapper">
            <h1 className="error-text">Oops... {errorText}</h1>
            <button className="return-to-home" onClick={() => {navigate("/")}}>Return to Homepage</button>
        </div>
    </div>
  )
}

export default Error