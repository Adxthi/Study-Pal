import { useState } from "react";

export default function Todo() {
  const [formData, setFormData] = useState("");
  const [listData, setListData] = useState([]);

  const handleChange = (event) => {
    setFormData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setListData([...listData, formData]);
    setFormData("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {listData.map((formData, index) => (
          <li key={index}>{formData}</li>
        ))}
      </ul>
    </div>
  );
}
