// components/layout/Header.tsx

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
