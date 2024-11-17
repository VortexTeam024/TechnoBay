import React ,{useState} from 'react'

const Login = () => {

  const [formData , setFormData] = useState({
    username:"",
    passwprd:"",
  });


  const [errors,setErrors] = useState({})
  const handlesubmit =(e) =>{
    e.preventDefault();
    const ValidationError =validateForm(formData);
    setErrors(ValidationError);
  };
    const handleChange =(e)=>{
      const {name,value}= e.target;
      setFormData({...formData, [name]:value})
    };
    const validateForm = (data)=>{
      let errors ={};

      if (!data.username){
        errors.username="username is required"
      }
    }


  return (<>
    
    <div className='secall'>
      
      <div className='sec1'>
      
     <img src="public\assets\تصميم بدون عنوان (2).png" alt="photo" />
     </div>
     <div  className='topbut'>
      <button>Back</button>
      </div>
     <div className='seccen'>
   
      <form onSubmit={handlesubmit}>
        <div className='hed'>
          <h1 className='h1blue'>W<h1 className='h1black'>elcome <h1 className='h1blue'>B<h1 className='h1black'>ack</h1></h1></h1></h1>
        </div>
      <div className='forms'>
        <input type="text" name='username' placeholder='Username' onChange={handleChange} value={formData.username} />
        {errors.username && <span>{errors.username}</span>}
        </div>
        <div className='forms'>
        <input type="password" name='password' placeholder='Password'onChange={handleChange} value={formData.passwprd} />
        </div>
        <div className='formsbut'>
       <button>Login</button>
        </div>
    </form>
     </div>

     <div className='secend'> 
      <img src="public\assets\تصميم بدون عنوان (3).png" alt="photo" />
     </div>
     <div className='endform'>
      <p>Forgotten password?</p>
      <div className='endform2'>
      <h1 className='h1black'>Don't have an account ? </h1>
      <button>Sign Up</button>
     </div>
     </div>
    </div>
    </>
  )
}

export default Login
