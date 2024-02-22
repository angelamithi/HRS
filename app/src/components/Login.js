
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {store,retrieve} from "./Encryption"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
    
   
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   
    const credentials = {
      email: email,
      password: password,
    };
  
    fetch('http://127.0.0.1:5555/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
    
      if (response.ok) {
     
        return response.json();
      } else {
        
        console.error('Login failed');
        throw new Error('Email and password combination is not authorized.');
      }
    })
    .then((result) => {
      // Check the role and access token from the response
      console.log('Backend Response:', result);
      store(result)
      const { role,employee } = result;


    localStorage.setItem('accessToken', result);
    console.log('Stored Access Token:', result);

    console.log('Stored Access Token from localStorage:', localStorage.getItem('accessToken'));
      

      // Redirect the user based on their role
      switch (role) {
        case 'manager':
          navigate('/manager_dashboard');
          break;
        case 'employee':
        
          navigate(`/employee_dashboard/${employee.id}`);
          
          break;
        case 'hr':
          navigate('/hr_dashboard');
          break;
        default:
          console.error('Unknown role:', role);
      }

      console.log('Login successful!');
    })
    .catch((error) => {
      // Handle any network or unexpected errors
      console.error('Error during login:', error);
    });
  };
  return (
    <div>
   {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>LOGIN Form</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-6">
                {/* general form elements */}
                <div className="card card-primary">
        
                  {/* /.card-header */}
                  {/* form start */}
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePasswordChange} />
                      </div>
                    
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                {/* /.card */}
                {/* general form elements */}
              
                
                
              
              </div>
              
            </div>
        
          </div>
        </section>
      
      </div>

      
    </div>
  )
}

export default Login