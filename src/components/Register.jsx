import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

const Register = () => {
    const {user,createUser} = useContext(AuthContext)
    console.log(user)
    const handleRegisterSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(email,password,name)
        createUser(email,password)
        .then(result =>{
             console.log(result.user)
             form.reset();
            })
        .catch(error=>console.log(error?.message))

      }
      return (
          <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-7xl font-bold tracking-wider">Register now!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

              <form onSubmit={handleRegisterSubmit} className="card-body ">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                </div>
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
                  <button type='submit' className="btn btn-primary">Register now</button>
                </div>
              </form>
              <div className="text-center">
              <Link to="/login">
              <button className="btn btn-link lowercase text-center">Already have an account</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;