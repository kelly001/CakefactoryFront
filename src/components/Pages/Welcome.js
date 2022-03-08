import React from 'react';
import Form from "../UI/Form"

const Welcome = () => {
  const onSubmitHandler = () => {
    console.log('form submitted')
  }


  return (
    <div className={'container'}>
      <h1>Закажи тортик прямо сейчас!</h1>
      <div className={'row'}>
        <div className={'cake-form'}>
          <Form onSubmit={onSubmitHandler} />
        </div>
      </div>
    </div>
  )
}

export default Welcome;