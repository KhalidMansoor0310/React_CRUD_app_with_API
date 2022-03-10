import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react";
import  axios  from "axios";

export default function Edit() {
    const {id} = useParams();
    const history = useHistory();
    const [user,setUser] = useState({
        name:'',
        email:''
    })
    
    const onchange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const formSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3003/users/${id}`,user);  
            history.push('/'); 
        } catch (err) {
            console.log(err.message)
        }

    }


    const loadUser = async () => {
        try {
            const std = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(std.data);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        loadUser();
    }, [])
    return (
    <div>
      <div className="container my-3">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form className='shadow p-5'>
                            <h1>Edit -  USER</h1>
                            <div className="mb-3">
                                <label for="text" className="form-label">Enter Your name:</label>
                                <input type="text" name='name' value={user.name} onChange={onchange}  className="form-control" aria-describedby="name" />
                            </div>
                            <div className="mb-3">
                                <label for="text" className="form-label">Enter Your Email:</label>
                                <input type="text" name='email' value={user.email} onChange={onchange} className="form-control" aria-describedby="name" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={e => formSubmit(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}