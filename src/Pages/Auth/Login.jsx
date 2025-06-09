import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SetToken } from '../../Utils/Storage'
// emilys
// emilyspass

function Login(){

    const [input, setInput] = useState({})
  const navigate = useNavigate()

  function handleChange(e) {
    setInput((old) => {
      return { ...old, [e.target.name]: e.target.value }
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      ...input,
      expiresInMins: 30,
    }
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log(response);
      console.log(response?.data?.accessToken);
      SetToken(response?.data?.accessToken)
      console.log('response of login ', response)
      alert( "Successfull Login");
      navigate('/product-list')
    } catch (err) {
        console.log(err)
        alert(err.message || "Login Failed");
      
    } finally {
      console.log('Finalluy ')
    }
  }
    return (

        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset" >
          <label className="label">User Name</label>
          <input type="text" className="input" placeholder="User Name" name="username"  onChange={handleChange} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password"  onChange={handleChange} />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4" type="submit">Login</button>
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

export default Login;