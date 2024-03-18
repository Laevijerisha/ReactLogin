import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
function Signup() {
    const initalvalues = { username: "", email: "", password: "", cpassword: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value })
    }
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 charcters"
        } else if (values.password.length > 10) {
            errors.password = "Password must be exceed more than 10 charcters"
        }
        if (!values.cpassword) {
            errors.cpassword = "Confirm Password is required";
        } else if (values.cpassword !== values.password) {
            errors.cpassword = "Confirm password and password should be same";
        }
        if (Object.keys(formErrors).length === 0 && isSubmit){
            navigate('/login')
        }
        return errors;
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='header'>
                <h1  style={{ textAlign: 'center' }}>Sign Up</h1>
                </div>
                <div className='ui divider'></div>
                <div className='ui form'></div>
                <div class="form-floating mb-3">
                    <input type='text' class="form-control" placeholder='UserName' name='username' value={formValues.username} onChange={handleChange} />
                </div><p>{formErrors.username}</p><br></br>
                <div class="form-floating mb-3">
                    <input type='email' class="form-control" placeholder='Email' name='email' value={formValues.email} onChange={handleChange} />
                </div><p>{formErrors.email}</p><br></br>
                <div class="form-floating mb-3">
                    <input type='password' class="form-control" placeholder='Password' name='password' value={formValues.password} onChange={handleChange} />
                </div><p>{formErrors.password}</p><br></br>
                <div class="form-floating mb-3">
                    <input type='password' class="form-control" placeholder='Confirm Password' name='cpassword' value={formValues.cpassword} onChange={handleChange} />
                </div><p>{formErrors.cpassword}</p><br></br>
                <div className='footer'>
                <button class="btn btn-info" style={{width:300,fontSize:18}}>Sign Up</button>
                </div><br></br>
                <div>
                <NavLink to='/login' style={{display:'flex',justifyContent:'center',color:'#4d514b'}}>Already registered? Login</NavLink>
                </div>
            </form>
            
        </div>
    )
}

export default Signup
