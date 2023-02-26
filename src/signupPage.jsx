import React from "react";

export default function SignupPage() {
    return(
        <>
            <div className='bg-slate-400 h-full w-full p-11'>
                <form id="signup">
                    <label htmlFor="email-input">email</label>
                    <input type="email" name="email" id="email-input" />

                    <label htmlFor="password-input">password</label>
                    <input type="password" name="password" id="password-input" />

                    <button>Create Account</button>
                </form>
            </div>
        </>
    )
}