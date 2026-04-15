import React, { useState } from "react";
import "../styles/AddUserForm.css";

const AddUserForm = ({setListData}) => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.userName && userData.email && userData.phone) {
      setListData([userData])
      setUserData({ userName: "", email: "", phone: "" });
      console.log("Submitted user:", userData);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Mobile No"
          />
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
