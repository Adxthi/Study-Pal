import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/NavCss.css";
export default function Login(){
        const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
    });
    const navigate=useNavigate();
    
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    };

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(formData)
    }
    return (
        <section id="login">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="form-container border p-5 rounded shadow bg-white">
                    <h1 className="text-center mb-4" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Login Here</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={() => navigate("/")} className="btn btn-success ms-5" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Login </button>
                    </form>
                </div>
            </div>
        </section>
    );
}