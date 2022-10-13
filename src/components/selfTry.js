import {useState} from 'react';
import './App.css';
import React from 'react';

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  let [newEntry, setNewEntry] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();
   newEntry = [{id:new Date().getTime().toString(),userName,password,confirmPassword,fullName,age,gender,date}];
   console.log(newEntry);
   setNewEntry(newEntry);
   validate(newEntry);
  }

  // const validate = (object) =>{
  // if(!object.userName ) {object.userName ="User Name is required"; setNewEntry([object])}
  // if(!object.password ) {object.password ="User Name is required";}
  // if(!object.confirmPassword ) {object.confirmPassword ="User Name is required";}
  // if(!object.fullName ) {object.fullName ="User Name is required";}
  // if(!object.age ) {object.age ="User Name is required";}
  // if(!object.date ) {object.date ="User Name is required";}
  // if(!object.gender ) {object.gender ="User Name is required";}
  
  
  return( 
  <div className='allContainer'>
  <form className='container' onSubmit={submitHandler} >
    <div>
      <label htmlFor="uName">Enter User Name</label> 
      <input type='text' name="userName" id="uName"   value={userName} onChange={(e)=> {setUserName(e.target.value)}}/>
    </div>
    <div>
      <label htmlFor="pass">Enter Password</label> 
      <input type='password' name="password" id="pass"  value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
    </div>
    <div>
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
    </div>
    <button>Submit</button>
  </form>
  <div>
    {
    newEntry.map((data) => {
    return (<div key={data.id}>
    <span>{data.userName}</span>
    <span>{data.password}</span>
    <span>{data.confirmPassword}</span>
    <span>{data.fullName}</span>
    <span>{data.gender}</span>
    <span>{data.age}</span>
    <span>{data.date}</span>
    </div>
    ) 
    })
  }
  </div>
  </div>
)

}

export default App;


<div> */}
      {/* { */}
       {/* newEntry.map((data) => { */}
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
    {/* </div>