import React from "react";
import "../styles/UserList.css";

const UserList = ({ listData, onDeleteUser }) => {


  return (
    <div className="user-list-container">
      {listData.length > 0 ? (
        <div className="users-grid">
          {listData.map((ele) => (
            <div key={ele.userId} className="user-card">
              <button
                className="delete-icon"
                type="button"
                aria-label="Delete user"
                onClick={() => onDeleteUser?.(ele.userId)}
              >
                ×
              </button>
              <div className="user-card-field">
                <span className="user-card-label">👤 Name</span>
                <div className="user-card-value">{ele?.userName}</div>
              </div>
              <div className="user-card-field">
                <span className="user-card-label">✉️ Email</span>
                <div className="user-card-value">{ele?.email}</div>
              </div>
              <div className="user-card-field">
                <span className="user-card-label">📱 Phone</span>
                <div className="user-card-value">{ele?.phone}</div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserList;
