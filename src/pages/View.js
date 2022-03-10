import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function View() {
    const { id } = useParams();
    const [singleStd, setSingleStd] = useState([]);
    const getSingleStudent = async () => {
        try {
            const singleStd = await axios.get(`http://localhost:3003/users/${id}`);
            setSingleStd(singleStd.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSingleStudent();
    }, [id])
    return (
        <div>
            <h1 className='text-center'>View page</h1>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                    <tr>
                                        <th>{singleStd.id}</th>
                                        <td>{singleStd.name}</td>
                                        <td>{singleStd.email}</td>
                                    </tr>
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
