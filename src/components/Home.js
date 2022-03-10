import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home() {

    const [student, setStudent] = useState([]);
   

    const getAllStudents = async () => {
        try {
            const std = await axios.get("http://localhost:3003/users");
            setStudent(std.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllStudents();
    }, [])
    // const handleDelete = async (id) =>{
    //     try {
    //         await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //         var newstd = student.filter((item)=>{
    //             return item.id !== id;
    //         })
    //         setStudent(newstd);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
   
    return (
        <div>
            <Link to={`/Add`} className="btn btn-primary m-5">Add New</Link>

            <div className="container my-3">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map((std, index) => {
                                    return(
                                    <tr key={index}>
                                        <th>{std.id}</th>
                                        <td>{std.name}</td>
                                        <td>{std.email}</td>
                                        <td>
                                            <Link className='btn btn-primary m-2' to={`/Edit/${std.id}`}>Edit</Link>
                                            <Link className='btn btn-success m-2' to={`/View/${std.id}`}>View</Link>
                                            

                                        </td>

                                    </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
