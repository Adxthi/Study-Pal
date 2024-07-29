import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Reg(){
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
        <section id="register">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="form-container border p-5 rounded shadow bg-white">
                    <h1 className="text-center mb-4" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Register Here</h1>
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
                        <div className="form-group mb-3">
                            <label style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Phone:</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={() => navigate("/login")} className="btn btn-success ms-5" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Regsiter</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

