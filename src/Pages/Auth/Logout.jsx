import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RemoveToken } from '../../Utils/Storage'
// emilys
// emilyspass

function Logout(){
  const naviagate = useNavigate()
  useEffect(() => {

    RemoveToken();
    naviagate("/login");

  },[naviagate])
  
  

  
  return (

        <div>
          
        </div>
    );
}

export default Logout;