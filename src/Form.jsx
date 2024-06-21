import React, { useState } from "react";

export default function Form() {
 const [user,setUser] =useState({
  name:"",
  email:"",
  pasword:"",
  address:"",
  paswordError:"",
  emailError:"",
  nameError:"",
  addressError:"",

 })
 
   const inputHandler=(e)=>{
    const {name,value}=e.target
    const errorKey=name+"Error"
    setUser((prev)=>{
       return{
        ...prev,
        [errorKey]:"",
        [name]:value
       }
    })
   }
  const formSubmit = () => {
  const {name,email,pasword}=user
   
   if(name == ""){
    setUser((prev)=>{
      return{
       ...prev,
       nameError:"please enter name"
      }
   })
   }
   if(/\s/.test(name)){
    // there is one or more white spaces in the name
    setUser((prev)=>{
      return{
       ...prev,
       nameError:"please remove space in name"
      }
   })
 
 }
   if(email == ""){
  
    setUser((prev)=>{
      return{
       ...prev,
       emailError:"please enter  email"
      }
   })
   }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the input email against the pattern and return the result
     if(!emailPattern.test(email)){
      setUser((prev)=>{
        return{
         ...prev,
         emailError:"please enter valid email"
        }
     })

     }
   if(pasword == ""){
    setUser((prev)=>{
      return{
       ...prev,
       paswordError:"please enter password"
      }
   })
   }
   if(pasword.length <4 ){
    setUser((prev)=>{
      return{
       ...prev,
       paswordError:"please enter password"
      }
   })
   }
  };

  return (
    <>
      <h2>User Registration</h2>
     <input type="text" name="name" value={user.name} onChange={inputHandler}/>
     {user.nameError && <p>{user.nameError}</p>}
     <br/>
       <input type="email" value={user.email} onChange={inputHandler}  name="email"/>
       {user.emailError && <p>{user.emailError}</p>}
       <br/>
       <input type="password" value={user.pasword} onChange={inputHandler} name="pasword"/>
       {user.paswordError && <p>{user.paswordError}</p>}
       <br/>
       <input type="text" value={user.address} onChange={inputHandler} name="address"/>
       {user.addressError && <p>{user.paswordError}</p>}
       <br/>
       
       <button onClick={formSubmit}>submit</button>
    </>
  );
}
