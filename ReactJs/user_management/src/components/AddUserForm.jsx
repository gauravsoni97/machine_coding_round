import React, { useEffect, useState } from "react";
import "../styles/AddUserForm.css";

const AddUserForm = ({ setListData }) => {
  const [userData, setUserData] = useState({
    userId: null,
    userName: "",
    email: "",
    phone: "",
    createdAt: null,
  });

  const [formProgress, setFormProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    let filled = 0;

    if (userData.userName !== "") filled++;
    if (userData.email !== "") filled++;
    if (userData.phone !== "") filled++;

    setFormProgress(`${Math.round((filled / 3) * 100)}%`);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.userName && userData.email && userData.phone) {
      const userWithId = {
        ...userData,
        userId: Date.now(),
        createdAt: Date.now(),
      };
      setListData((prevList) => [...prevList, userWithId]);
      setUserData({ userName: "", email: "", phone: "" });
      console.log("Submitted user:", userWithId);
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
      &nbsp; &nbsp; &nbsp; &nbsp;
      <center>Form filled : {formProgress}</center>
    </div>
  );
};

export default AddUserForm;
