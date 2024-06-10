import Link from "next/link";
import { User } from "../type/Types";

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?size=20");
  const data: User[] = await res.json();

  console.log(data);
  return (
    <div className="flex flex-wrap gap-2 cursor-pointer ">
      {data.map((user: User) => (
        <Link href={`/users/${user.id}`}>
          <div className=" w-[400px]  max-w-sm ">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.username}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserPage;
