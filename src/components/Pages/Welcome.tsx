import React from 'react';
import Form from "../UI/Form"

const Welcome = () => {
  return (
    <div className={'container'}>
      <h1 className={'tittle'}>Order your cake here</h1>
      <div className={'row'}>
        <div className={'cake-form'}>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Welcome;