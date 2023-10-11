import React from 'react'
import './App.css';
import { useState } from 'react';
import Button from './Components/Button';
import TextInput from './Components/TextInput';

function App() {
  const initialValues = { firstName: '', lastName: '', email: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [isSubmit, setIsSubmit] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const inputsHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = "Firstname is required!"
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
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
                      <label className="form-label">Firstname</label>
                      <TextInput size="small" className="form-control" name="firstName" onChange={inputsHandler} value={formValues.firstName} />
                      <div className="text-danger">{formErrors.firstName}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Lastname</label>
                      <TextInput size="small" className="form-control" name="lastName" onChange={inputsHandler} value={formValues.lastName} />
                      <div className="text-danger">{formErrors.lastName}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
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
