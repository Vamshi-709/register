import React from 'react'

function LogIn() {
  return (
    <div>
      <h1>Log In Here</h1><br />
      <label className='form3'>Email of Phone</label><br />
      <input className='input' type="text" required /><br /><br />

      <label className='form1'>Password</label><br />
      <input className='input' type="text" validete required id="invalidCheck3" /><br /><br />
    </div>
  )
}

export default LogIn