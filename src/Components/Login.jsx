import { blue } from '@mui/material/colors';
import React, { useEffect, useState }  from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

function Login() {
    const initalvalues = { username: "", email: "", password: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value}=e.target;
        setformValues({...formValues,[name]:value})
        
            };
    const handleSubmit =(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        
    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
        const validate=(values)=>{
            const errors ={};
            const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.username){
                errors.username="Username is required!";
            }
            if(!values.email){
                errors.email="Email is required!";
            } else if (!regex.test(values.email)){
                errors.email="This is not a valid email format!"
            }
            if(!values.password){
                errors.password="Password is required!";
            }else if (values.password.length < 4 ){
                errors.password="Password must be more than 4 charcters"
            }else if (values.password.length > 10 ){
                errors.password="Password must be exceed more than 10 charcters"
            }
            if(Object.keys(formErrors).length === 0 && isSubmit){
                navigate("/home")
            }
        
                
            return errors;
        }
    return (
        <div className='container'>
            
            <form onSubmit={handleSubmit}>
                <div className='header'>
                <h1  style={{textAlign:'center'}}>Login</h1>
                </div>
                <div className='ui divider'></div>
                <div className='ui form'></div>
                
                <div>
                    
                    <input className='text-input' type='text' name='username' placeholder='UserName' class='form-control'  value={formValues.username} onChange={handleChange} />
                </div><p>{formErrors.username}</p><br></br>
                <div>
                    
                    <input className='text-input' type='email' name='email' placeholder='Email' class='form-control' value={formValues.email} onChange={handleChange} />
                </div><p>{formErrors.email}</p><br></br>
                <div >
                    
                    <input className='text-input' type='password' name='password' placeholder='Password'class='form-control' value={formValues.password} onChange={handleChange} />
                </div><p>{formErrors.password}</p><br></br>
                <div className='footer'>
                <button class="btn btn-info" style={{width:300,fontSize:18}}>Login</button> 
                
                </div><br></br>
                <NavLink to='/signup' style={{display:'flex',justifyContent:'center',color:'#4d514b'}}>Not yet registered? Register Now</NavLink>
            </form>
           
        </div>
    )
}

export default Login
