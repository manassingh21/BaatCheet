import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs,setInput] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

    const {loading,signup}= useSignup();

    const handleCheckboxChange = (gender) => {
        setInput({...inputs,gender})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
                <h1 className=' text-3xl font-semibold text-center text-gray-300'>
                    <span className=' text-blue-500'>Baat Cheet</span>
                    <br />
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text text-gray-50 '>Full Name</span>
                        </label>
                        <input type="text" placeholder='Janu Hatela' className=' w-full input input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e)=>setInput({...inputs, fullName:e.target.value})} 
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text text-gray-50 '>Username</span>
                        </label>
                        <input type="text" placeholder='januhatela' className=' w-full input input-bordered h-10'
                        value={inputs.username}
                        onChange={(e)=>setInput({...inputs, username:e.target.value})}
                        />
                    </div>
        

                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text text-gray-50 '>Password</span>
                        </label>
                        <input type="password" name="" id="" placeholder='Enter Password' className=' w-full input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e)=>setInput({...inputs, password:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className=' text-base label-text text-gray-50 '>Confirm Password</span>
                        </label>
                        <input type="password" name="" id="" placeholder='Confirm Password' className=' w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e)=>setInput({...inputs, confirmPassword:e.target.value})}
                        />
                    </div>

                    <GenderCheckbox oncheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-0 inline-block text-gray-50 '> Already have an account?  <span  className=' font-semibold ' >Login</span> </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 ' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp