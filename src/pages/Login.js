import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {login} from '../firebase/auth';
import '../App.css';
import {Link} from 'react-router-dom';

function Login(props) {
  const {register, handleSubmit, reset} = useForm() //react hook form functions
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async data => { //callback
      let user;
      setLoading(true)
      try {
          user = await login(data)
          console.log("login", user)
          reset()
      } catch(error) {
          console.log(error)
      }
      if(user){
          props.history.push(`/profile/${user.uid}`)
      } else {
          setLoading(false)
      }
      setLoading(false)
  }

  const formClassName = `ui form ${isLoading  ? "loading" : ''}`
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" ref={register}/>
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" ref={register}/>
              </label>
            </div>
            <div>
            <button className="ui primary button login" type="submit">
              Login
            </button>
            OR
            <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;