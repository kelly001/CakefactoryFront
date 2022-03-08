import React from 'react';
import Button from "../Button"
import Input from "../Input"

const Form = (props) => {

  return (
    <form>
      <Input id={props.id} label={'Email address'} type={'email'} helpText={'We\'ll never share your email with anyone else.'} />
      <Input id={'inputPhone'} label={'Phone number'} type={'text'} helpText={'We\'ll never share your phone number with anyone else too'} />
      <Input id={'inputName'} label={'Cake\'s name'} type={'text'} />

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check1" />
          <label className="form-check-label" htmlFor="check1">Call me back</label>
      </div>


      <Button className={'btn btn-primary'} type={'button'} disabled={false} onClick={props.onSubmit}>Submit</Button>
    </form>
  )
};

export default Form;