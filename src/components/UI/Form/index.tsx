import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from "../Button";
import Input from "../Input";
import { saveOrder } from '../../../helpers/requests'

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');


  const [callback, setCallback] = useState(true);
  const [formStatus, setFormStatus] = useState('new');

  const setCallbackHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
    setCallback(event.currentTarget.checked)
  };

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    const email = emailRef.current?.value;

    if (email !== undefined) {
      saveOrder(email, phone, name, callback)
          .then(response => {
            if (response.status === 'success') {
              setFormStatus('sent')
              dispatch({type: 'newOrder', payload: {email, phone, name, callback}})
            } else {
              setFormStatus('error')
            }
          })
          .catch(error => {
            setFormStatus('error')
          })
    }
  }

  return (
    <div className=''>
      { formStatus === 'new' && (
          <form name={'orders'} method={'post'}>
            <div className="mb-3">
              <label htmlFor={'emailInput'} className="form-label">{'Email address'}</label>
              <input type={'email'} className="form-control" id={'emailInput'} aria-describedby={'emailInputHelp'}
                     ref = {emailRef}/>
              <div id={'emailInputHelp'} className="form-text">We'll never share your email with anyone else.</div>
            </div>
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
            onClick: (event: React.MouseEvent) => submitHandler(event)
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