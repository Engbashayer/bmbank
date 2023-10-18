import React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { transferToAnotherUser } from "../api/auth";
const UserItem = ({ user }) => {
  const [amountT, setAmountT] = useState(0);

  const { mutate: transfer } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transferToAnotherUser(amountT, user.username),
    // onSuccess: () => {
    //   setUser(tru
    //   // queryClient.invalidateQueries(["user"]);
    // },
  });

  const handleTransfer = (e) => {
    setAmountT(e.target.value);
  };
  const transferAmount = () => {
    transfer();
  };

  return (
    <div className=" bg-[#E5E5E5] w-fit flexx flex-col p-8 rounded-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)]">
      <div className="flex flex-col justify-center gap-8 items-center">
        <img
          className="w-[150px] h-[150px] drop-shadow-2xl border border-white rounded-full overflow-hidden "
          src={"https://react-bank-project.eapi.joincoded.com/" + user.image}
        />
      </div>
      <div className="flex flex-col pt-8 gap-6">
        <div className="flex flex-col items-center">
          <div className="text-[#4563AA] font-bold">USERNAME</div>
          <div className="text-[#393939]">
            {user.username}
            {/* {isLoading ? "Loading" : myprofile.username} */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#4563AA] font-bold">CURRENT BALANCE</div>
          <div className="text-[#393939]">
            {user.balance} {/* {isLoading ? "Loading" : myprofile.balance} */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <input
          placeholder="Enter Transfer Amount"
          type="number"
          id="amount"
          name="amount"
          onChange={handleTransfer}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="w-full flex justify-center">
          <button
            onClick={transferAmount}
            type="submit"
            className=" w-[180px] text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA] hover:bg-[#7590D1]"
          >
            TRANSFER
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
