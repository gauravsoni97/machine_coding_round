import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import "./styles/App.css";

const App = () => {
  const [listData, setListData] = useState(() => {
    const savedUsers = localStorage.getItem('userList');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(listData));
  }, [listData]);

  const handleDeleteUser = (userId) => {
    setListData((prevList) => prevList.filter((user) => user.userId !== userId));
  };

  return (
    <div>
      <button className="add-user-btn" onClick={() => setOpenModal(true)}>Add New User</button>
      <AddUserForm setListData={setListData} openModal={openModal} setOpenModal={setOpenModal} />
      <UserList listData={listData} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
