import React ,{useState} from 'react'

function Login() {
    const [user,setUser] = useState({
       
        email:'',
        password:'',
       
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
    
    return (
        <div className='container my-3'>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='text-center'>Login</h1>
                    <form className='col-lg-6 m-auto shadow p-5'>
                        
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
                        
                        <div>
                            <button className='btn btn-dark text-white' type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
