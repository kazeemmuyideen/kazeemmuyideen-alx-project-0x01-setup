import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600 mb-2">@{username}</p>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <p className="text-gray-600 mt-2">
        🏢 <strong>{company.name}</strong> - {company.catchPhrase}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        📍 {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
