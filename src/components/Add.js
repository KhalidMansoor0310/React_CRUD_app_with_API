import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Add() {
    const history = useHistory();
    const [status,setStatus] = useState();
    const [student,setStudent] = useState({
        name:'',
        email:''
    })
    const onChange=(e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
         await axios.post(`http://localhost:3003/users`, student)
         setStatus(true);
         history.push('/')
        } catch (error) {
         console.log("Something is Wrong");
        }
       }
  return (
    <div>
      <div className="container my-3">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form className='shadow p-5'>
                            <h1>ADD NEW USER</h1>
                            <div className="mb-3">
                                <label for="text" className="form-label">Enter Your name:</label>
                                <input type="text" name='name' onChange={onChange} value={student.name}  className="form-control" aria-describedby="name" />
                            </div>
                            <div className="mb-3">
                                <label for="text" className="form-label">Enter Your Email:</label>
                                <input type="text" name='email' onChange={onChange} value={student.email} className="form-control" aria-describedby="name" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={e => onFormSubmit(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Add;
