import React, { useContext, useState } from "react";
import { auth } from "../config/firebase";

const Profile = () => {
  const handleUpdateProfiel = () => {
    setIsUpdateProfileActive((prevStatus) => !prevStatus);
  };

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    role: "",
    phoneNumber: "",
    bio: "",
    profilePicture: "",
  });

  const updateData = async () => {
    await fetch(`http://localhost:4000/updateUser/${auth.currentUser.uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        role: userData.role,
        bio: userData.bio,
        profilePicture: userData.profilePicture,
      }),
    });
  };

  return (
    <>
      <div className="w-11/12 m-auto md:w-10/12 py-10 flex flex-col lg:flex-row gap-20 lg:gap-10">
        <div className="lg:w-1/2">
          <div className="flex gap-4 border-b pb-4">
            <div>
              <img
                src={auth.currentUser.photoURL}
                alt=""
                className="w-[100px] rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {auth.currentUser.displayName}
              </h1>
              <p className="text-gray-500 mb-4">CEO of Kaiba Corporation</p>
              <p className="text-sm text-gray-500 mb-2">
                {auth.currentUser.email}
              </p>
            </div>
          </div>

          <div className="border-b mt-8">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-sm">BIO</p>
              <p className="text-blue-400 text-sm">Edit bio</p>
            </div>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              exercitationem iste velit quam sapiente minus numquam sunt
              perferendis, adipisci, asperiores hic nam nulla et. Quisquam
              consectetur neque molestias quo dolore!
            </p>
          </div>
          <div className="py-4">
            <p className="text-sm font-bold mb-2">Start Date</p>
            <p>Feb 11, 2024</p>
          </div>
        </div>
        {
          <div className="lg:w-1/2">
            <div className="w-full flex flex-col">
              <h1 className="text-lg font-bold mb-4">Update Profile</h1>
              <p className="text-sm mb-2 ">Username</p>
              <input
                type="text"
                placeholder="Abc"
                className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
              <p className="text-sm mb-2 ">Role</p>
              <input
                type="text"
                placeholder="Abc"
                className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
                onChange={(e) =>
                  setUserData({ ...userData, role: e.target.value })
                }
              />
              <p className="text-sm mb-2 ">Email address</p>
              <input
                type="text"
                placeholder="Abc@gmail.com"
                className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <p className="text-sm mb-2 ">Phone Number</p>
              <input
                type="text"
                placeholder="Abc@gmail.com"
                className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
                onChange={(e) =>
                  setUserData({ ...userData, phoneNumber: e.target.value })
                }
              />
              <input type="file" className="py-2 px-4" />
              <button
                className="bg-darkblue hover:bg-pageblue text-white px-7 py-3 mt-4 rounded-lg w-[200px]"
                onClick={updateData}
              >
                Submit
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Profile;
