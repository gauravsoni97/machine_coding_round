import React from "react";
import "../styles/UserList.css";

const UserList = ({ listData }) => {
  console.log(listData);

  return (
    <div className="user-list-container">
      <h1>User Directory</h1>
      <div className="users-grid">
        {listData?.map((ele) => (
          <div key={ele} className="user-card">
            <div className="user-card-field">
              <span className="user-card-label">Name</span>
              <div className="user-card-value">{ele?.userName}</div>
            </div>
            <div className="user-card-field">
              <span className="user-card-label">Email</span>
              <div className="user-card-value">{ele?.email}</div>
            </div>
            <div className="user-card-field">
              <span className="user-card-label">Phone</span>
              <div className="user-card-value">{ele?.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
