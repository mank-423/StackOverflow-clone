import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import './Auth.css'
import AboutAuth from './AboutAuth';


const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  }


  return (
    <section className='auth-section'>
      {isSignUp && <AboutAuth />}
      
      <div className='auth-container-2'>
        {!isSignUp && (
          <img src={icon} alt="stackoverflow" className='login-logo' />
        )}

        <form className='form-container'>

          {isSignUp && (
            <label htmlFor="name">
              <h4>Name</h4>
              <input type="text" name="name" id="name" />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h4>Password</h4>
              {!isSignUp && <p style={{color: '#007ac6', fontSize: '13px'}}>Forgot Password?</p>}
            </div>
            <input type="password" name="password" id="password" />

            {isSignUp && 
              <p style={{ color: "#666767", fontSize: "13px"}}> Passwords must contain at least eight <br/> characters, including at least 1 letter and 1 <br/> number.</p>
            }
          </label>

          {
            isSignUp && (
              <label htmlFor='check'>
                <input type="checkbox" name="check" id="check" />
                <p style={{ fontSize: "13px"}}>
                  Opt-in to receive occasional <br/>
                  product updates, user research invitations,<br/>
                  company announcements, and digests.
                </p>
              </label>
            )
          }

          <button type='submit' className='auth-btn'>
            {isSignUp
              ? "Sign up"
              : "Log in"
            }
          </button>

          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px"}}>
              By clicking to "Sign up", you agree to our 
              <span style={{color: '#007ac6'}}> terms of <br/> service</span>, 
              <span style={{color: '#007ac6'}}> privacy policy</span> and 
              <span style={{color: '#007ac6'}}> cookie policy</span>.
            </p>
          )}

        </form>

        <p>
          {isSignUp
            ? "Already have an account?"
            : "Don't have an account? "
          }

          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignUp ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth
