import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import "./styles/App.css";
import Filters from "./components/Filters";

const App = () => {
  const [listData, setListData] = useState(() => {
    const savedUsers = localStorage.getItem("userList");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(listData));
  }, [listData]);

  const handleDeleteUser = (userId) => {
    setListData((prevList) =>
      prevList.filter((user) => user.userId !== userId),
    );
  };

  const filteredUsers = listData.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.userName?.toLowerCase().includes(term) ||
      user.phone?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app-container">
      <div className="form-section">
        <AddUserForm setListData={setListData} />
      </div>
      <div className="list-section">
        <Filters setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <UserList listData={filteredUsers} onDeleteUser={handleDeleteUser} />
      </div>
    </div>
  );
};

export default App;
