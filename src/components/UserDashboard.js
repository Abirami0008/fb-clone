import React from 'react';
import UserCrud from './UserCrud';

export default function UserDashboard() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f0f2f5", minHeight: "90vh" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>User Management Dashboard</h2>
      <UserCrud />
    </div>
  );
}
