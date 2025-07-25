import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Home: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 overflow-y-scroll">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-7xl font-thin">Welcome to our Application!</h1>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
