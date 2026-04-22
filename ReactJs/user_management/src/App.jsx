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


const [originalList, setOriginalList] = useState(() => {
  const savedUsers = localStorage.getItem("userList");
  return savedUsers ? JSON.parse(savedUsers) : [];
});

  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(listData));
  }, [listData]);

const handleDeleteUser = (userId) => {
  const updated = listData.filter((user) => user.userId !== userId);
  setListData(updated);
  setOriginalList(updated);
};

  const sortByFilter = (type) => {
    let sorted = [...originalList];

    if (type === "latest") {
      sorted.sort((a, b) => b.userId - a.userId);
    } else if (type === "oldest") {
      sorted.sort((a, b) => a.userId - b.userId);
    } else if (type === "name-asc") {
      sorted.sort((a, b) => a.userName.localeCompare(b.userName));
    } else if (type === "name-desc") {
      sorted.sort((a, b) => b.userName.localeCompare(a.userName));
    }

    setListData(sorted);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredUsers = listData.filter((user) => {
    const term = debounceTerm.toLowerCase();
    return (
      user.userName?.toLowerCase().includes(term) ||
      user.phone?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term)
    );
  });

  const removeAllFilters = () => {
    setSearchTerm('')
    setListData(originalList)
  };


  return (
    <div className="app-container">
      <div className="form-section">
        <AddUserForm setListData={setListData} />
      </div>
      <div className="list-section">
        <Filters
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          sortByFilter={sortByFilter}
          removeAllFilters={removeAllFilters}
        />
        <UserList listData={filteredUsers} onDeleteUser={handleDeleteUser} />
      </div>
    </div>
  );
};

export default App;
