import React, { useState, useEffect } from 'react'
import "./SignIn.css"
import Main from './Main'
import { Link, useNavigate } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const SignIn = (callback, validate) => {

  const navigate = useNavigate()
  const [values, setValues] = useState()

  const handleChnage = (e) => {
    setValues(e.target.value)
    console.log(setValues)
  }
  return (
    <div>
      <h2>Add  your personal details</h2>
      <p>Loerm ipsum is simply dummy text of the printing and typesetting industry. </p><br /><br />
      <form className='form'>
        <label className='form-data1' name="" onChange={handleChnage}>Full Name</label><br />
        <input className='input' type="text" /><br /><br />

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" className="form-data3">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl><br />

        <label className='form-data2' >Country</label><br />
        <input className='input' type="text" /><br /><br />

        <label className='form-data' onChange={handleChnage}>State</label><br />
        <input className='input' type="text" /><br /><br />

        <label className='form-data' oonChange={handleChnage}>Phone</label><br />
        <input type="number" className='input' /><br /><br />

        <button className='form-input-btn' onClick={() => { navigate("/main") }}>Next</button>
      </form>
      <p>Alredy have  an account ? <a href='login'>Log in</a></p>

    </div>
  )
}

export default SignIn