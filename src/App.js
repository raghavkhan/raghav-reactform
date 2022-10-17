import React from "react";
import { useState } from "react";
import "./App.css";


function App() {
  const initialValues = { userName: "", password: "",confirmPassword:"",fullName:"",age:"",gender:"",date:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   setFormValues({ userName: "", password: "" });
    }
  

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    //console.log(values);
    const errors = {};
    if (!values.userName) {
      errors.userName = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    else if(values.password.length < 4) {
      errors.password = "Password must be 4 characters long!"
    }
    else if(values.password.length > 10) {
      errors.password = "Password should not exceed more than 10 characters!"
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "This field is mandatory!";
    }
    else if(values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password does not match!";
    }
    if (!values.fullName) {
      errors.fullName = "This field is mandatory!";
    }
    if (!values.age) {
      errors.age = "what is your age ?";
    }
    else if(values.age > 100) {
      errors.age = "Get Lost!";
    }
    if (!values.gender) {
      errors.gender = "Mention your gender ?";
    }
    if (!values.date) {
      errors.date = "fill todays date";
    }
    
    return errors;
  };

  return (

    <div className="allContainer">
      <form className="container" onSubmit={submitHandler}>
        <div>
          <p className="error">{formErrors.userName}</p>
          <label htmlFor="uName"></label>
          <input
          className='field'
          placeholder= 'Enter Username'
            type="text"
            name="userName"
            id="uName"
            value={formValues.userName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <p className="error">{formErrors.password}</p>
          <label htmlFor="pass"></label>
          <input
          className='field'
          placeholder="Enter Password"
            type="password"
            name="password"
            id="pass"
            value={formValues.password}
            onChange={changeHandler}
          />
            
            
           
        </div>
        <div>
        <p className="error">{formErrors.confirmPassword}</p>
        <label htmlFor="cPass"></label> 
        <input type='password' name="confirmPassword" id="cPass" className='field' placeholder='Confirm Password'value={formValues.confirmPassword} onChange={changeHandler}/>
      </div>
      <div>
      <p className="error">{formErrors.fullName}</p>
        <label htmlFor="fName"></label> 
        <input type='text' name="fullName" id="fName" className='field' placeholder="Enter Name" value={formValues.fullName} onChange={changeHandler}/>
      </div>
      <div>
      <p className="error">{formErrors.age}</p>
        <label htmlFor="age"></label> 
        <input type='number' name="age" id="age" className='field' placeholder= 'Enter Age'value={formValues.age} onChange={changeHandler} />
      </div>
      <div>
      <p className="error">{formErrors.gender}</p>
        <span>
        <label htmlFor="male" className= "gender">Male</label> 
        <input type='radio' name="gender" id="male" value='male' className='field' onChange={changeHandler} />
        </span>
        <span>
        <label htmlFor="female" className="gender">Female</label>
        <input type='radio' name="gender" id="female" value='female'className='field' onChange={changeHandler} />
        </span>
      </div>
      <div>
      <p className="error">{formErrors.date}</p>
        <label htmlFor="date"></label> 
        <input type='date' name="date" id="date" className='field'  value={formValues.date} onChange={changeHandler}/>
      </div>
        <button className='submit'>Submit</button>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className= "shift_success">
          <h2 className="success"> Signed in  Successfully!! Details are Below</h2>
          <p className='display'>{JSON.stringify(formValues,undefined,2)}</p>
        </div>
      ) : (
        <div className='message'>Fill the Form above !</div>
      )}
    </div>
  );
      }

export default App;
