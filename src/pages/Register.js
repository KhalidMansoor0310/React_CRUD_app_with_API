import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
function Register() {
    const history = useHistory();
   const [user,setUser] = useState({
       name:'',
       email:'',
       password:'',
       work:''
    
   })

   let name,value;
   const handleInput=(e)=>{
        name = e.target.name;
        value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })

   }

   const PostData = async (e) =>{
        e.preventDefault();
        const {name,email,password,work} = user;
        const res =await axios.post('http://localhost:3000/register',{
            headers:{
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                password,
                work
            
            })
        })
        
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert('Invalid Registeration');
        }
        else{
            window.alert("Successfully registered");
            history.push('/login');
        }

        

   }



    return (
        <div className='container my-3'>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='text-center'>Register</h1>
                    <form className='col-lg-6 m-auto shadow p-5' method='post'>
                        <div className="form-group">
                            <div className="mb-3">
                                <label for="name" className="form-label">Enter Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="name" placeholder="Enter name here"
                                    name='name'
                                    value={user.name}
                                    onChange={handleInput}

                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="mb-3">
                                <label for="name" className="form-label">Enter Email</label>
                                <input type="text"
                                    className="form-control"
                                    id="email" placeholder="Enter email here"
                                    value={user.email}
                                    name='email'
                                    onChange={handleInput}

                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="mb-3">
                                <label for="name" className="form-label">Enter password</label>
                                <input type="text"
                                    className="form-control"
                                    id="password" placeholder="Enter password here"
                                    value={user.password}
                                    name='password'
                                    onChange={handleInput}

                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="mb-3">
                                <label for="name" className="form-label">Enter Work</label>
                                <input type="text"
                                    className="form-control"
                                    id="password" placeholder="Enter work here"
                                    value={user.work}
                                    name='work'
                                    onChange={handleInput}

                                />
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-dark text-white' type="submit" onClick={PostData}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
