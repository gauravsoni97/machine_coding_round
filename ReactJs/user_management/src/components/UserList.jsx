import React from "react";
import "../styles/UserList.css";

const UserList = ({ listData, onDeleteUser }) => {
  return (
    <div className="user-list-container">
      <h1>User Directory</h1>
      {listData.length > 0 ? (
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((ele) => (
                <tr key={ele.userId}>
                  <td>{ele?.userName}</td>
                  <td>{ele?.email}</td>
                  <td>{ele?.phone}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => onDeleteUser?.(ele.userId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">👥</div>
          <p>No users added yet. Click "Add New User" to get started!</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
