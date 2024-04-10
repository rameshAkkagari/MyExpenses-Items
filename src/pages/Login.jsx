import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handlerSubmit =(e)=>{
        e.preventDefault()
        if(password.length < 8){
           return toast.error("password must be more than 8 characters",{theme:'colored'})
        }
        // console.log('clciked');
        const auth  ={
            email,
            password
        }
        toast.success("Login successfull",{theme:"dark"})
        window.sessionStorage.setItem("userName",email) 
        console.log(auth);
        setTimeout(()=>{
          window.location.reload()
        },2000)
    }
  return (
    <div className='w-full h-[100vh] bg-gray-200 flex items-center justify-center'>
        <div>
        <Card color="transparent" shadow={false}>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handlerSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            label='Email'
            size="lg"
            type='email'
            required
            placeholder="name@mail.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            label='password'
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)}
            size="lg"
            placeholder="********"
            // icon={}
          />
        </div>
        <Button type='submit' className="mt-6" fullWidth>
          sign up
        </Button>
        </form>
        </Card>
        </div>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default Login;