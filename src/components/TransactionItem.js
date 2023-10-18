import React from "react";
import { useState } from "react";
//import { useMutation } from "@tanstack/react-query";
import { getUserInfoByUserId } from "../api/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TransactionItem = ({ Transaction }) => {
  const queryClient = useQueryClient();

  const { data: from, isLoading } = useQuery({
    queryKey: ["from"],
    queryFn: () => getUserInfoByUserId(Transaction.from),
  });

  const { data: to } = useQuery({
    queryKey: ["to"],
    queryFn: () => getUserInfoByUserId(Transaction.to),
  });

  return (
    <div className="w-full h-[40px] items-center flex flex-row justify-around rounded-t-2xl">
      <div className="text-[#262a34] font-bold p-4">{Transaction.amount}</div>
      <div className="text-[#262a34] font-bold p-4">{from?.username}</div>
      <div className="text-[#262a34] font-bold p-4">{to?.username}</div>
      <div className="text-[#262a34] font-bold p-4">{Transaction.type}</div>
      <div className="text-[#262a34] font-bold p-4">{Transaction._id}</div>
    </div>
  );
};

export default TransactionItem;
