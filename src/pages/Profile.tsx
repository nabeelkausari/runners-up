import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <p className="text-lg">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <p className="text-lg">{user.email}</p>
            </div>
            <Button 
              onClick={() => {
                logout();
                navigate('/login');
              }}
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;