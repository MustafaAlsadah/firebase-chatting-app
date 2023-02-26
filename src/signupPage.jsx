import React from "react";
import { async } from "@firebase/util";
import { app, auth, db } from './firebase';
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut
} from "firebase/auth";


export default function SignupPage() {

    const handleSignup = async (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const credentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log('user has been created with the following credentials: ', credentials)
        document.getElementById('signup').reset()
        alert('user has been created')
    }

    const handleLogout = async (e)=>{
        await signOut(auth)
        alert('user has been logged out')
    }
    
    return(
        <>
            <div className='bg-slate-400 h-screen w-full p-11'>
                <form id="signup" onSubmit={(e)=>{
                    try{
                        handleSignup(e)
                    }catch(err){
                        console.log(err)
                    }
                }}>
                    <label htmlFor="email-input">email</label>
                    <input type="email" name="email" id="email-input" />
                    <br /><br />
                    <label htmlFor="password-input">password</label>
                    <input type="password" name="password" id="password-input" />
                    <br /><br />
                    <button className="bg-blue-600 text-white p-3 rounded-md">Create Account</button>
                </form>

                <button onClick={handleLogout} id="logout" className="bg-black text-white p-3 rounded-md">logout</button>
            </div>
        </>
    )
}