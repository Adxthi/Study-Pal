import { useState } from "react";

export default function RegisterDemo(){
    //const [formData,setFormData]=useState("")---- use ths if we want to store as string
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
    });
    // const handleChange=(event)=>{
    //     setFormData(event.target.value);
    // };

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    };

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(formData)


    }
    return(
        <div>
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange}/>
                <label>Email : </label>
                <input type="email" placeholder="Enter Mail" name="email" value={formData.email} onChange={handleChange}/>
                <label>Phone : </label>
                <input type="phone" placeholder="Enter Phone Number" name="phone" value={formData.phone} onChange={handleChange}/>
                <button type="submit">signup</button>
                
                
            </form>
        </div>
    );
}
