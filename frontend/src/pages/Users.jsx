import React, { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../url";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "", role: "user" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${backendUrl}/users`);
      setUsers(res.data.data || []);
    } catch (err) {
      setError("Failed to fetch users");
    }
    setLoading(false);
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setEditData({ name: user.name, email: user.email, role: user.role });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSave = async (id) => {
    try {
      await axios.put(`${backendUrl}/users/${id}`, editData);
      setEditId(null);
      fetchUsers();
    } catch (err) {
      alert("Failed to update user");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${backendUrl}/users/${id}`);
        fetchUsers();
      } catch (err) {
        alert("Failed to delete user");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Users List</h1>
        {loading ? (
          <div className="text-center text-lg text-blue-900">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg text-black">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Role</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="text-center text-black">
                    <td className="py-2 px-4 border-b">
                      {editId === user._id ? (
                        <input
                          name="name"
                          value={editData.name}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded"
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {editId === user._id ? (
                        <input
                          name="email"
                          value={editData.email}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded"
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {editId === user._id ? (
                        <select
                          name="role"
                          value={editData.role}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded"
                        >
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      ) : (
                        user.role
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {editId === user._id ? (
                        <>
                          <button
                            onClick={() => handleEditSave(user._id)}
                            className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(user)}
                            className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users; 