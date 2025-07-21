// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">{address.city}</p>
    </div>
  );
};

export default UserCard;
