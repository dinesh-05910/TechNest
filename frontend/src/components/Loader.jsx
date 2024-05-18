import { Spinner } from 'react-bootstrap';

import React from 'react'

const Loader = () => {
  return (
    <Spinner
       animation="border"
       role="status"
       style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        }}
    ></Spinner>
  )
}

export default Loader