import React from 'react'
import './App.css';
import { useState } from 'react';
import Button from './Components/Button';
import TextInput from './Components/TextInput';
import data from './data/data.json';

function App() {
  const initialValues = { firstName: '', lastName: '', email: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [isSubmit, setIsSubmit] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  console.log('data', data)
  const inputsHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }
  const validateEmail = (emailAddress) => {
    let flag = 0;
    data.forEach((item) => {
      if (item.email === emailAddress) {
        flag = 1;
      }
    })
    return flag;
  }


  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = "First name is required!"
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!"
    }
    if (!values.email) {
      errors.email = "Email address is required!"
    } else {
      let isValidEmail = validateEmail(values.email)
      if (isValidEmail === 0) {
        errors.email = "Email Address doesnot matches with our records"
      }
    }
    return errors;
  }

  return (
    <>
      <div className="container text-left mt-5">
        <div className='row'>
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registration Form</h5>
                <div className="col-5">
                  {
                    Object.keys(formErrors).length === 0 && isSubmit ? (<div className="alert alert-success" role="alert">Registered Successfully</div>) : ("")
                  }
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">First name</label>
                      <TextInput size="small" className="form-control" name="firstName" onChange={inputsHandler} value={formValues.firstName} />
                      <div className="text-danger">{formErrors.firstName}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last name</label>
                      <TextInput size="small" className="form-control" name="lastName" onChange={inputsHandler} value={formValues.lastName} />
                      <div className="text-danger">{formErrors.lastName}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <TextInput size="small" className="form-control" name="email" onChange={inputsHandler} value={formValues.email} />
                      <div className="text-danger">{formErrors.email}</div>
                    </div>
                    <div className="mb-3">
                      <Button variant="primary">Continue</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
