import React, { useEffect, useState }  from 'react'

function Login() {
    const initalvalues = { username: "", email: "", password: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
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
        console.log(formErrors)
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
            }
            if(!values.password){
                errors.password="Password is required!";
            }
            return errors;
        }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <div className='ui divider'></div>
                <div className='ui form'></div>
                
                <div>
                    
                    <input className='text-input' type='text' placeholder='UserName' class='form-control' value={formValues.username} onChange={handleChange} />
                </div><p>{formErrors.username}</p><br></br>
                <div >
                    
                    <input className='text-input' type='text' placeholder='Email' class='form-control'  value={formValues.email} onChange={handleChange} />
                </div><p>{formErrors.email}</p><br></br>
                <div >
                    
                    <input className='text-input' type='text' placeholder='Password'class='form-control' value={formValues.password} onChange={handleChange} />
                </div><p>{formErrors.email}</p><br></br>
                <div>
                <button class="btn btn-info" style={{width:120}}>Login</button> 
          
                </div>
            </form>
        </div>
    )
}

export default Login