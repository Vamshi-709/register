import React, { useState } from 'react'
import './Main.css'
import logo512 from '../components/logo512.png'
import { useNavigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Main() {
    const fileInput = React.createRef();
    const [image, setimgPreview] = useState();


    let navigate = useNavigate()

    const onFileChange = async (event) => {
        try {
            //

            if (event.target.files && event.target.files[0]) {
                // setimage(event.target.files[0]);
                let reader = new FileReader();
                reader.onload = (e) => {
                    //  setpreloadedImage(false);
                    setimgPreview(e.target.result);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            // Update the state
        } catch (error) {
            console.error('err--', error);
        }
    };

    const hadleImageinpuy = (e) => {
        fileInput.current.click();
    };
    return (
        <div>
            <h2>Add your company details</h2>
            <p>Loerm ipsum is simply dummy text of the printing and typesetting industry.</p><br />
            <form className='form'>
                <div class="text-center">
                    <img src={image ? image : logo512}
                        class="rounded-circle" style={{ width: "100px" }}
                        alt="" /><i style={{ marginRight: "-40px" }} onClick={hadleImageinpuy}
                        >upload your company logo</i>
                    <input style={{ display: "none" }}
                        ref={fileInput}
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onClick={() => {
                            fileInput.current.value = null;
                        }}
                        onChange={(data) => {

                            onFileChange(data);
                        }}
                    />
                </div><br />

                <label className='form3'>Company Name</label><br />
                <input className='input' type="text"  required /><br /><br />

                <label className='form1'>Email id</label><br />
                <input className='input' type="text" validete required id="invalidCheck3" /><br /><br />

                <label className='form1'>Job title</label><br />
                <input type="text" className='input' id="invalidCheck3" required /><br /><br />

                <label className='form2'>Years of expirence</label><br />
                <input type="number" className='input' required /><br /><br />
               
                <Checkbox {...label} defaultChecked />
                <b> i accept the <b style={{ color: "orange" }}> Terms and Conditions </b> </b><br />
                
                <button class="btn" onClick={() => navigate('/')}>Back</button> <button id="invalidCheck3" className='form-input-btn' onClick={() => navigate('/verifyOTP')}>Send OTP</button>
            </form>
        </div>
    )
}
