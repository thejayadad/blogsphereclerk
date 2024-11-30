"use client";

import React, { useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const UserList = () => {
  const users = useQuery(api.users.listUsers); // Query to fetch all users
  const findOrCreateUser = useMutation(api.users.findOrCreateUser); // Mutation to sync user

  // Sync logged-in user with the database
  useEffect(() => {
    const syncUser = async () => {
      try {
        await findOrCreateUser();
        console.log("User synced successfully.");
      } catch (error) {
        console.error("Error syncing user:", error);
      }
    };

    syncUser(); // Call on component mount
  }, [findOrCreateUser]);

  return (
    <div>
      <h2 className="text-xl font-bold">User List</h2>
      <ul className="mt-4">
        {users?.map((user) => (
          <li key={user._id} className="mb-2">
            <img
          src={user.avatar}
          alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2">{user.name}</span> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
