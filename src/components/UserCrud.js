import React, { useState } from 'react';
import './UserCrud.css';

export default function UserCrud() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.email) return;

    if (editIndex === null) {
      setUsers([...users, input]);
    } else {
      const updated = [...users];
      updated[editIndex] = input;
      setUsers(updated);
      setEditIndex(null);
    }

    setInput({ name: '', email: '' });
  };

  const handleEdit = (index) => {
    setInput(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="crud-container">
      <form onSubmit={handleSubmit} className="crud-form">
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">{editIndex === null ? 'Add User' : 'Update User'}</button>
      </form>

      <div className="user-list">
        {users.length === 0 ? (
          <p className="empty-msg">No users yet. Add one above!</p>
        ) : (
          users.map((user, index) => (
            <div className="user-card" key={index}>
              <div>
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </div>
              <div className="action-btns">
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
