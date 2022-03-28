import React, { useState } from 'react';
import Button from "../Button";
import Input from "../Input";
import { saveOrder } from '../../../helpers/requests'

const Form: React.FC = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [callback, setCallback] = useState(true)
  const [formStatus, setFormStatus] = useState('new')

  const setCallbackHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event)
    setCallback(event.currentTarget.checked)
  }

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault()

    saveOrder(email, phone, name, callback)
      .then(response => {
        if (response.status === 'success') {
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
          <Input input={{
            type: 'email',
            id: 'emailInput',
            label: 'Email address',
            helpText: 'We\'ll never share your email with anyone else.',
            onChange: (event) => setEmail(event.target.value),
            value: email,
          }} />
          <Input input={{
            type: 'text',
            id: 'phoneInput',
            label: 'Phone number',
            helpText: 'We\'ll never share your phone number with anyone else.',
            onChange: (event) => setPhone(event.target.value),
            value: phone,
          }} />
          <Input input={{
            type: 'text',
            id: 'nameInput',
            label: 'Cake\'s name',
            helpText: 'Cake\'s name',
            onChange: (event) => setName(event.target.value),
            value: name,
          }} />

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"
                  onChange={(event) => setCallbackHandler(event)}
                  checked={callback}
                />
              <label className="form-check-label" htmlFor="check1">Call me back</label>
          </div>


          <Button btn={{
            className: 'btn btn-primary',
            type: 'button',
            disabled: false,
            onClick: (event: React.FormEvent) => submitHandler(event)
          }}>Submit</Button>
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