import axios from "axios";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const userData = await axios.get(import.meta.env.VITE_API_ENDPOINT_USERS);
    console.log(userData.data.data.users);
    const reversedUsers = userData?.data?.data?.users?.reverse();
    setUsers(reversedUsers);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <p className="block w-full px-4 py-2 text-5xl text-center font-semibold text-slate-700">
            Users
          </p>
        </div>
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-sm font-normal leading-none text-slate-500">
                  Name
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-sm font-normal leading-none text-slate-500">
                  Email
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-sm font-normal leading-none text-slate-500">
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  className="hover:bg-slate-50 border-b border-slate-200"
                  key={index}
                >
                  <td className="p-4 py-5 block font-semibold text-sm text-slate-800">
                    {user.name}
                  </td>
                  <td className="p-4 py-5 text-sm text-slate-500">
                    {user.email}
                  </td>
                  <td className="p-4 py-5 text-sm text-slate-500">
                    {user.age}
                  </td>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
