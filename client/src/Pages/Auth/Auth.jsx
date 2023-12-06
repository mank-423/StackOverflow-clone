import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import './Auth.css'


const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  }


  return (
    <section className='auth-section'>
      <div className='aith-container'>
        {!isSignUp && (
          <img src={icon} alt="stackoverflow" className='login-logo' />
        )}

        <form>

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
            <div>
              <h4>Password</h4>
              {!isSignUp && <h4>Forgot Password?</h4>}
            </div>
            <input type="password" name="password" id="password" />

            {isSignUp && 
              <p> Passwords must contain at least eight <br/> characters, including at least 1 letter and 1 <br/> number.</p>
            }
          </label>

          {
            isSignUp && (
              <label htmlFor='check'>
                <input type="checkbox" name="check" id="check" />
                <p>
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

        </form>

        <p>
          {isSignUp
            ? "Already have an account?"
            : "Don't have an accoint? "
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
