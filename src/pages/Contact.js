import React, { useState } from 'react';

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact">
    <div className="container mt-5" >
      <h2 style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>
          Submit
        </button>
      </form>
    </div>
  </section>    
  );
};


