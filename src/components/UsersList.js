import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers, getUserInfoByUserId } from "../api/auth";
import UserItem from "./UserItem";

const UsersList = () => {
  const { data: userList, isLoading } = useQuery({
    queryKey: ["userList"],
    queryFn: () => getAllUsers(),
  });

  const { data: getbyUserId } = useQuery({
    queryKey: ["getbyUserId"],
    queryFn: () => getUserInfoByUserId(),
  });

  const mappedUsers = userList?.map((user) => {
    return <UserItem user={user} />;
  });

  console.log(mappedUsers);

  // transferToAnotherUser = async (amount, username) =>

  return (
    <div className="p-11">
      <div className="text-[#4563AA] font-bold text-2xl pb-11">ALL USERS</div>

      <div className="flex gap-5 flex-wrap">{mappedUsers}</div>
    </div>
  );
};

export default UsersList;
