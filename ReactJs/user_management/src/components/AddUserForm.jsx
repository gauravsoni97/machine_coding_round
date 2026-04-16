import React, { useEffect, useState } from "react";
import "../styles/AddUserForm.css";

const AddUserForm = ({setListData, openModal, setOpenModal}) => {
  const [userData, setUserData] = useState({
    userId : null,
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
      const userWithId = {
        ...userData,
        userId: Date.now()
      };
      setListData((prevList) => [...prevList, userWithId]);
      setUserData({ userName: "", email: "", phone: "" });
      setOpenModal(false);
      console.log("Submitted user:", userWithId);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setUserData({ userId: null, userName: "", email: "", phone: "" });
  };

  if (!openModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>&times;</button>
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
      </div>
    </div>
  );
};

export default AddUserForm;
