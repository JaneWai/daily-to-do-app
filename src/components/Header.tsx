import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mb-8 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <CheckSquare className="h-8 w-8 mr-3" />
          <h1 className="text-3xl font-bold">Daily Task Manager</h1>
        </div>
        <p className="text-center mt-2 text-indigo-100">
          Organize your day, boost your productivity
        </p>
      </div>
    </header>
  );
};

export default Header;
