import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, LogOut, ChartNoAxesCombined, Menu } from 'lucide-react'; 
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAdmin } from '@/features/Sidebarslice/Sidebarslice';

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const activeSidebar = useSelector((state) => state.sidebar.activesidebar); 

  const handleSideToggle = () => {
    dispatch(toggleAdmin());
  };

  // Array of navigation items
  const navItems = [
    { to: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
    { to: "/admin/products", icon: <Package className="w-5 h-5" />, label: "Products" },
    { to: "/admin/orders", icon: <ShoppingCart className="w-5 h-5" />, label: "Orders" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`flex flex-col h-full fixed left-0 top-0 w-64 bg-gray-900 text-gray-100 p-6 transition-transform duration-300 transform ${activeSidebar ? 'translate-x-0' : '-translate-x-64'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <ChartNoAxesCombined className="w-6 h-6 text-teal-400" />
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-grow flex flex-col space-y-4">
          {navItems.map(({ to, icon, label }) => (
            <NavLink 
              key={to}
              to={to} 
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-teal-500 hover:text-white'}`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto">
          <button 
            className="flex items-center gap-3 px-3 py-2 w-full text-gray-300 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-300"
            onClick={handleSideToggle}
          >
            <LogOut className="w-5 h-5" />
            Close
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-transform duration-300 transform ${activeSidebar ? 'ml-64' : 'ml-0'}`}
      >
        {children}
      </div>

      {/* Open Button */}
      {!activeSidebar && (
        <button 
          className="sm:hidden lg:flex fixed left-4 top-4 text-white rounded-full p-2 transition-colors duration-300"
          onClick={handleSideToggle}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
