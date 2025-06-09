
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register(){
    const [input, setInput] = useState({})
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  function handleChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    setInput((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      }
    })
    console.log(input)
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      ...input,
    }
    try{
        const response = await axios.post(
            'https://dummyjson.com/users/add',
            payload,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          alert("Successfull Registered");
          navigate("/login");

    }catch(e){
        console.log(e)
        alert(e.message || "Failed to Register");
    }
    
    
  }

  const navigate = useNavigate()

  return (

    <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register now!</h1>
  <p className="py-6">
    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
    quasi. In deleniti eaque aut repudiandae et a id nisi.
  </p>
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    
  <div className="card-body">
  <form onSubmit={onSubmit}>
    <fieldset className="fieldset" >
        <label className="label">First Name</label>
        <input type="text" className="input" placeholder="First Name" name="first_name" />

        <label className="label">Last Name</label>
        <input type="text" className="input" placeholder="Last Name" name="last_name" />

        <label className="label">User Name</label>
        <input type="text" className="input" placeholder="Last Name" name="username" />

        <label className="label">Phone Number</label>
        <input type="number" className="input" placeholder="Phone Number" name="phone_number" />

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" name="email" />

      <label className="label">Address</label>
      <input type="text" className="input" placeholder="Address" name="address"/>

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <label className="label">Confirm Password</label>
      <input type="password" className="input" placeholder="Confirm Password" name="confirm_password" />



      
      <button className="btn btn-neutral mt-4" type="submit">Register</button>
    </fieldset>
    </form>
    
  </div>
</div>
</div>
</div>




    // <div>
    //     <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    //             <img className="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
    //     <div>
    //     <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
    //     <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
    //     </div>
    //     </div>
    //     <form onSubmit={onSubmit}>
    //         <input type="text"  placeholder="username"/>
    //         <input type="password" placeholder="password" />
    //         <button type="submit">Login</button>
    //     </form>                        
    // </div>
);
}

export default Register;