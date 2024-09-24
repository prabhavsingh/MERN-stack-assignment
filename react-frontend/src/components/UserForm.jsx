import axios from "axios";
import { useState } from "react";
import UserModal from "./UserModal";

const UserForm = () => {
  const [val, setVal] = useState({ name: "", email: "", age: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUserExistsModalVisible, setIsUserExistsModalVisible] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(val);
    console.log(JSON.stringify(val));
    const response = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT_USERS}/email/${val.email}`
    );
    const email = response?.data?.data?.user?.email;
    if (typeof email !== "undefined") {
      console.log("User already exists");
      setIsUserExistsModalVisible(true);
      setIsModalVisible(true);
      return;
    }
    await axios.post(import.meta.env.VITE_API_ENDPOINT_USERS, {
      headers: {
        "Content-Type": "application/json",
      },
      body: val,
    });
    setIsUserExistsModalVisible(false);
    setIsModalVisible(true);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create User
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setVal({ ...val, email: e.target.value })}
                  required
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setVal({ ...val, name: e.target.value })}
                  required
                  autoComplete="name"
                  placeholder="firstname surname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="text"
                  onChange={(e) => setVal({ ...val, age: e.target.value })}
                  required
                  autoComplete="age"
                  placeholder="18"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {isModalVisible && (
        <UserModal
          open={isModalVisible}
          setOpen={setIsModalVisible}
          userExists={isUserExistsModalVisible}
        />
      )}
    </>
  );
};

export default UserForm;
