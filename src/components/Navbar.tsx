'use client';

import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    {name : 'Home',path:'/'},
    {name : 'Dashboard',path:'/dashboard'}, 
    {name : 'login',path:'/login'}
  ];

  return (
    <div className="fixed top-2 w-full flex justify-center z-50">
      <nav className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-md rounded-full px-6 py-3 flex space-x-6 text-sm text-white font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={`${item.path}`}
            className="hover:text-purple-300 transition duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

