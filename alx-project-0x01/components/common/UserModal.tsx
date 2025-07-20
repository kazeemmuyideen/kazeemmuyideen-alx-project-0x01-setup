/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setUser((prev) => {
        const updatedUser = { ...prev };
        let ref: any = updatedUser;
        for (let i = 0; i < keys.length - 1; i++) {
          ref = ref[keys[i]];
        }
        ref[keys[keys.length - 1]] = value;
        return updatedUser;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="input"
          />
          <input
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="input"
          />
          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="input"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="input"
          />
          <input
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="input"
          />
          <input
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="input"
          />
          <input
            name="address.city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="input"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
