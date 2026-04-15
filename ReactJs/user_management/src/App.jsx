import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

const App = () => {
  const [listData, setListData] = useState([]);

  return (
    <div>
      <AddUserForm setListData={setListData} />
      <UserList listData={listData} />
    </div>
  );
};

export default App;
