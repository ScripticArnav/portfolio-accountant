import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [profilePhoto, setProfilePhoto] = useState(user?.avatar || null);
  const [email, setEmail] = useState(user?.email || "");
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  // Placeholder for update logic
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // TODO: Implement update logic (API call)
    alert("Profile update functionality coming soon!");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-4xl px-6 py-16 flex flex-col items-center justify-center bg-white/10 rounded-3xl">
        <img src={logo} alt="logo" className="h-20 w-20 mb-4" />
        <span className="text-3xl font-bold tracking-tight mb-6 text-white">AS Fintaccx Solution</span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold text-white mb-4">
          Welcome to your <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Profile</span>
        </h1>
        <form onSubmit={handleUpdateProfile} className="w-full max-w-md mx-auto bg-white/20 p-8 rounded-xl mt-8 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <img
              src={photoPreview || profilePhoto || logo}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border-4 border-orange-500 mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-2 text-white"
            />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition shadow-sm bg-white/90 text-black"
            />
          </div>
          <div className="w-full">
            <label className="block text-white mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-4 py-2 border border-orange-200 rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed"
            />
          </div>
          {/* Additional Options */}
          <div className="w-full flex flex-col gap-3 mt-4">
            <button type="button" className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold shadow hover:from-orange-600 hover:to-orange-900 transition">Change Password</button>
            <button type="button" className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold shadow hover:from-orange-600 hover:to-orange-900 transition">Notification Settings</button>
            <button type="button" className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold shadow hover:from-orange-600 hover:to-orange-900 transition">Update Email</button>
          </div>
          <button type="submit" className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-800 text-white font-bold text-lg shadow-md hover:from-green-600 hover:to-green-900 transition">Save Changes</button>
        </form>
        {/* Logout button at the bottom */}
        <button
          onClick={handleLogout}
          className="mt-8 w-full max-w-md py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-800 text-white font-bold text-lg shadow-md hover:from-red-600 hover:to-red-900 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile; 