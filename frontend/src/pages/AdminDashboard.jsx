import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import backendUrl from '../url.js';
import { logout } from '../store/features/authSlice';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    // Check if user is logged in and is admin
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login/admin');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'admin') {
      // Non-admin trying to access admin dashboard
      navigate('/client-portal');
      return;
    }

    setAdminData(parsedUser);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    dispatch(logout());
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-blue-200 mt-1">Welcome, {adminData?.firstName} {adminData?.lastName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Total Admins</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Today's Logins</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-orange-600">0</p>
          </div>
        </div>

        {/* Admin Features */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Management */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">👥 User Management</h3>
              <p className="text-gray-600 mb-4">Manage client accounts and permissions</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                Manage Users
              </button>
            </div>

            {/* Reports & Analytics */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-green-500 transition cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Reports & Analytics</h3>
              <p className="text-gray-600 mb-4">View system reports and analytics</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
                View Reports
              </button>
            </div>

            {/* Admin Settings */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 transition cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">⚙️ Admin Settings</h3>
              <p className="text-gray-600 mb-4">Configure system settings and preferences</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
                Settings
              </button>
            </div>

            {/* Activity Logs */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📝 Activity Logs</h3>
              <p className="text-gray-600 mb-4">View system and user activity logs</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition">
                View Logs
              </button>
            </div>
          </div>
        </div>

        {/* Admin Info */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Admin Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <p><strong>Name:</strong> {adminData?.firstName} {adminData?.lastName}</p>
            <p><strong>Email:</strong> {adminData?.email}</p>
            <p><strong>Phone:</strong> {adminData?.phone || 'Not provided'}</p>
            <p><strong>Role:</strong> {adminData?.role?.toUpperCase()}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
