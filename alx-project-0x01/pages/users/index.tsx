import React, { useState } from "react";
import Header from "../../components/layout/Header";
import UserModal from "../../components/common/UserModal";
// Update the path below to the actual location of your interfaces file
import { UserData } from "../../interfaces";

interface UsersProps {
  users: UserData[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const handleAddUser = (newUser: UserData) => {
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
          {userList.map((user, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p className="text-sm text-gray-700">{user.email}</p>
              <p className="text-sm text-gray-500">{user.address.city}</p>
            </div>
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
