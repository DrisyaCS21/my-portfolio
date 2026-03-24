// components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
};

export default Layout;