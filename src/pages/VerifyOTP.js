import React from 'react'
import { useNavigate } from 'react-router-dom'
import './VerifyOTP.css'


function VerifyOTP() {
    let navigate = useNavigate()


    document.addEventListener("DOMContentLoaded", function (event) {

        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', function (event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
                    } else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            inputs[i].value = event.key;
                            if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            inputs[i].value = String.fromCharCode(event.keyCode);
                            if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                        }
                    }
                });
            }
        } OTPInput();


    });

    return (
        <div style={{ backgroundColor: "azure" }}>
            <h2>Enter your OTP</h2>
            <p> For your security,we need to verify your identity.We sent a 5- digit code to<br /><span>A code has been sent to</span> <small>****@gmail.com</small>.Please enter it Below.</p>
            <div class=" height-100 d-flex justify-content-center align-items-center">
                <div class="position-relative"> <div class="card p-2 text-center">
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                        <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                        <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                    </div>
                    <div class="mt-4"> <button class="btn" onClick={() => navigate('/main')}>Back</button><button class="btn btn-danger px-4 validate">Verify</button>

                    </div>

                </div>
                    <p>Did't receive the email ? Check  your spam filter for an<br /> email from ****@gmail.com</p>

                </div>
            </div>
        </div>
    )
}

export default VerifyOTP