import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export const Headers = ({ title, color } ) => {
  return (
      <div className='text-center'>
          <h1 style={{color:color}}>{title}</h1>
      <p>
        <div className='  border-top-3 d-inline-block me-3' style={{ width:'100px', height:'5px' , backgroundColor:color}}>  </div>
        <FontAwesomeIcon icon={faStar} />
        <div className='  border-top-3 d-inline-block ms-3' style={{ width:'100px', height:'5px' , backgroundColor:color}}>  </div>
      </p>
    </div>
  )
}
