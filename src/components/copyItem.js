import {useState,useEffect} from 'react';
import './App.css';
import React from 'react';

function App() {
  const initialValues = {userName:"",password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});  
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    //console.log(values);
    const errors ={};
    if(!values.username){
      errors.username = "Username is required!";
    }
    if(!values.password){
      errors.password = "Password is required!";
    }
    return errors;
  }


  

  return( 
    <div className='allContainer'>
      <pre>{JSON.stringify(formValues,undefined,2)}</pre>
    <form className='container' onSubmit={submitHandler} >
      <div>
        <label htmlFor="uName">Enter User Name</label> 
        <input type='text' name="userName" id="uName" value={formValues.userName} onChange={changeHandler}/>
      </div>
      <div>
        <label htmlFor="pass">Enter Password</label> 
        <input type='password' name="password" id="pass" value={formValues.password} onChange={changeHandler}/>
      </div>
      {/* <div>
        <label htmlFor="cPass">Confirm Password</label> 
        <input type='password' name="confirmPassword" id="cPass" value={confirmPassword} onChange={(e)=> {setconfirmPassword(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="fName">Enter Your Name</label> 
        <input type='text' name="fullName" id="fName"  value={fullName} onChange={(e)=> {setFullName(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="age">Enter Your Age</label> 
        <input type='number' name="age" id="age" value={age} onChange={(e)=> {setAge(e.target.value)}} />
      </div>
      <div>
        <span>
        <label htmlFor="male">Male</label> 
        <input type='radio' name="gender" id="male" value='male' onChange={(e)=> {setGender(e.target.value)}} />
        </span>
        <span>
        <label htmlFor="female">Female</label>
        <input type='radio' name="gender" id="female" value='female' onChange={(e)=> {setGender(e.target.value)}} />
        </span>
      </div>
      <div>
        <label htmlFor="date">Enter Date</label> 
        <input type='date' name="date" id="date" value={date} onChange={(e)=> {setDate(e.target.value)}}/>
      </div> */}
      <button>Submit</button>
    </form>
    <div>
      {
      // newEntry.map((data) => {
      // return (<div key={data.id}>
      // <span>{data.userName}</span>
      // <span>{data.password}</span>
      // <span>{data.confirmPassword}</span>
      // <span>{data.fullName}</span>
      // <span>{data.gender}</span>
      // <span>{data.age}</span>
      // <span>{data.date}</span>
     // </div>
      //) 
    //  })
    //console.log('raghav')
    }
    </div>
    </div>
  )
  
  }
  
  export default App;