// mark code as client-side
/** @jsxImportSource @react**/
import { Metadata } from "next";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";


export const metadata: Metadata = {
  title: "Char's Forum / Login",
  description: "A Simple Web Forum",
};

export default function Login() {
  const router = useRouter(); // reroute user to a specific page

  // get email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // handle login logic
  const loginHandler = async() => {
    // if textboxes are empty
    // if (!email || !password ) {
    //   alert('Please enter a email and/or password');
    //   return;
    // }

    try {
      const signInAttempt = await signIn('credentials', {
        username: email,
        password,
      })
      router.push('/');
    } catch (error) {
      console.error('Login attempt failed')
    };
  };

  return (
    <main>
      <a href="/">
        <h2>Login</h2>
      </a>
      <div>
        <label htmlFor="email" >Email:</label>
        <br />
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
        <br />
      </div>
      <button onClick={loginHandler}>Login</button>
      
      {/* register button */}
      <h4>Register</h4>
      <form action="/register">
        <button className="register-button">Register</button>
      </form>
    </main>
  );
}
