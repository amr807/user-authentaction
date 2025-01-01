"use client"
import { useEffect, useState } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState(["mmmmm"]);

useEffect(()=>{

 fetch("")



})
  const handleDeleteUser = async (userId: any) => {
    // Confirmation dialog
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/admin/users/${userId}`, {
          method: 'DELETE',
          // Authentication headers
        });

        if (response.ok) {
          // Update the user list
          setUsers(users.filter(user => user !== userId));
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  // ... (fetch user data and render the list)

  return (
    <div>
      {/* User list */}
      {users.map(user => (
        <div key={user}>
          {/* User details */}
          <button onClick={() => handleDeleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
}