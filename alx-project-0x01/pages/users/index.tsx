import React, { useState } from "react";
import Header from "../../components/layout/Header";
import UserModal from "../../components/common/UserModal";
import UserCard from "../../components/common/UserCard"; // ✅ Added import
import { UserProps } from "../../interfaces";

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const handleAddUser = (newUser: UserProps) => {
    const newId = userList.length + 1;
    setUserList([...userList, { ...newUser, id: newId }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-full"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {userList.map((user) => (
            <UserCard key={user.id} {...user} /> {/* ✅ Use UserCard as required */}
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}

export default Users;
