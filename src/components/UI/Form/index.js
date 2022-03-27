import React, { useState } from 'react';
import Button from "../Button";
import Input from "../Input";
import { saveOrder } from '../../../helpers/requests'

const Form = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [callback, setCallback] = useState(true)
  const [formStatus, setFormStatus] = useState('new')

  const setCallbackHandler = (event) => {
    console.log(event)
    setCallback(event.target.checked)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    saveOrder(email, phone, name, callback)
      .then(response => {
        let data = response.data
        if (data.status === 'success') {
          setFormStatus('sent')
        } else {
          setFormStatus('error')
        }
      })
      .catch(error => {
        setFormStatus('error')
      })
  }

  return (
    <div className=''>
      { formStatus === 'new' && (
          <form name={'orders'} method={'post'}>
          <Input id={'emailInput'} label={'Email address'} type={'email'} helpText={'We\'ll never share your email with anyone else.'}
                 value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input id={'phoneInput'} label={'Phone number'} type={'text'} helpText={'We\'ll never share your phone number with anyone else too'}
                 value={phone} onChange={(event) => setPhone(event.target.value)} />
          <Input id={'nameInput'} label={'Cake\'s name'} type={'text'}
                 value={name} onChange={(event) => setName(event.target.value)} />

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"
                  onChange={(event) => setCallbackHandler(event)}
                  checked={callback}
                />
              <label className="form-check-label" htmlFor="check1">Call me back</label>
          </div>


          <Button className={'btn btn-primary'} type={'button'} disabled={false} onClick={(event) => submitHandler(event)}>Submit</Button>
        </form>
      )}

      { formStatus === 'sent' && (
        <div className="alert alert-success" role="alert">
          Your order have benn successfully sent! We'll contact you
        </div>
      )}

      { formStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          Oops, some error happened! Try later
        </div>
      )}

    </div>
  )
};

export default Form;