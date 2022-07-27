import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('');

  const submitFormHandler = (event) => {
    event.preventDefault();
    if(email.includes("@") === false){
      setError("Please enter a valid email id");
      return;
    }

    if(password.length<8){
      setError("Please enter 8 or more characters");
      return;
    }

    if(password !== passwordConfirm){
      setError("Passwords Don't Match");
      return;
    }
    
    setError("Validation Successful!");

  }

  return (
    <form onSubmit={submitFormHandler}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {error}
      <input type='submit' value='Submit'/>
    </form>
  )
}
