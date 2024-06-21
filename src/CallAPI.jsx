import React, { useEffect, useState } from 'react'
export default function CallAPI() {
   const [userData,setUserData]= useState([])
   const [loader,setLoder]=useState(false)
 useEffect(()=>{
    getUser()
 },[])
    function getUser(){
        setLoder(true)
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
           return res.json()
        }).then((user)=>{
            setUserData(user)
            setLoder(false)
        })
    }
    console.log(userData)
   if(loader){
    return <h1>Loading</h1>
   }
  return (
    <div>
      {
        userData.map((user,i)=>{
         return <div key={user.id}>
            <div className="col m-5" key={i}  >
           <div className="card">
     <div className="card-body">
 <h4 className="card-title m-2"><b>USER ID:-</b> {user.id}..{user.name}</h4><hr />
 <h3 className="card-title text-center text-dark-emphasis "><b>USER NAME </b> :- {user.username}</h3>
    <h6 className='card-text text-center'> <b>ENTER EMAIL :-</b>{user.email}</h6>
      <p className="card-text"><b>ADDRESS :-</b> {user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}<br/>{user.address.geo.lat}<br/>{user.address.geo.lng}.</p>
        <p className='card-tet'><b> GEO :-</b>{user.address.geo.lat},{user.address.geo.lng}.</p>
        <h6 className='card-text'><b>PHONE NO :-</b> {user.phone}</h6>
        <h6 className='card-text'><b>WEBSITE NAME :-</b>{user.website}</h6>
        <p className='card-text'><b>COMPANY NAME :-</b> {user.company.name},{user.company.catchPhrase},{user.company.bs}.</p>

 </div>
    </div>
  </div>

         
         </div>
        })
      }
</div>
)}