import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

const Login = () => {
  const {signIn} = useContext(AuthContext)
    const handleLoginSubmit = (e)=>{
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value
      signIn(email,password)
      .then(result =>{
        console.log(result.user)
        form.reset()
      })
      .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-7xl font-bold tracking-wider">Login now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleLoginSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center">
            <Link to="/register">
            <button className="btn btn-link lowercase text-center">New to FireBaseTailwind</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;