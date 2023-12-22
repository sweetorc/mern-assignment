import React, { useContext } from 'react';

import { authContext } from '../src/Context/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Signup = () => {
    const {createUser} =useContext(authContext)
    const buttonHandler = event =>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const name=form.name.value
        const user={name,email,password}
        console.log(user)

        createUser(email, password)
        .then(res=>{
            console.log(res.user)
            toast.success("successfully registered")

        })
        
    }
    return (
        <div>
        
        <div className="hero min-h-screen">
        <form onSubmit={buttonHandler} className="">
          <img src= '' alt='' className="ml-20 mb-5 rounded-lg shadow-2xl" />
          <div>
          <h1 className='text-center text-mytheme-gold text-3xl -tracking-tighter'>Signup</h1>
          <input type="text" name='name' placeholder="Your Name" className="bg-black mt-5 input input-bordered input-warning w-full text-mytheme-gold" required/><br></br>
          <input type="email" name='email' placeholder="Your Email" className="bg-black mt-5 input input-bordered input-warning w-full text-mytheme-gold" required/><br></br>
          <input type="password" name='password' placeholder="Password" className="bg-black mt-5 input input-bordered input-warning w-full text-mytheme-gold" required />
            <button className="btn btn-warning mt-5">Signup</button>
            <p className='text-mytheme-crimson -tracking-tighter mt-2'>already have an account? <Link className='text-mytheme-gold' to='/login'>Login</Link></p>
            <div className="divider mt-3 text-mytheme-silver">OR</div>
            <button className='btn btn-warning text-xl'>signup with Google</button>

             
          </div>
        </form>
      </div>
      
        </div>
    );
};

export default Signup;