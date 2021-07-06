import React, { useEffect, useState } from 'react'
import { Component, state, submitUser, changeHandler } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const handleInput=()=>{
        
    }
    const[signup, setsignup] = useState({
        fname:"",
        email:"",
        password:"",
        conpassword:""
    })

    return (
        <div className='register__bg'>
            <div className='register__container'>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" value={signup.fname} onChange={handleInput} name="fname" autoComplete="off"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={signup.email} onChange={handleInput} name="email" autoComplete="off"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" value={signup.password} onChange={handleInput} name="password" autoComplete="off"></input>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="text" value={signup.conpassword} onChange={handleInput} name="conpassword" autoComplete="off"></input>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register
