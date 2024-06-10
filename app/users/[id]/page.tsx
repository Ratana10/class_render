import { User } from "../../type/Types";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user: User = await res.json();
  console.log("user" + user);

  return (
    <div className="flex flex-col w-[500px] ml-10 cursor-pointer">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {user.username}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>
        <p className="text-grey-700 dark:text-gray-400">
            {user.phone}
        </p>
      </div>
    </div>
  );
};

export default page;
