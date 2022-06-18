import React from 'react'
import { useNavigate } from 'react-router-dom'
import './VerifyOTP.css'


function VerifyOTP() {
    let navigate = useNavigate()

    return (
        <div>
            <h2>Enter your OTP</h2>
            <p> For your security,we need to verify your identity.We sent a 5- digit code to<br />
                { }.Please enter it Below.</p><br />
            <div style={{ backgroundColor: "azure" }}>

                <label className='form-data' >Enter your Code</label>
                <div className='contant' >
                    <div class="d-flex flex-row mt-5" ><input type="text" class="form-control" autofocus="" /><input type="text" class="form-control" /><input type="text" class="form-control" /><input type="text" class="form-control" /><input type="text" class="form-control" /></div>
                </div><br />
                <button class="btn" onClick={() => navigate('/main')}>Back</button> <button className='form-input-btn'>Verify</button>
                <p>Did't receive the email ? Check  your spam filter for an email from { }</p>
            </div>
        </div>
    )
}

export default VerifyOTP