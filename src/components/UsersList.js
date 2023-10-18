import React from "react";

const UsersList = () => {
  return (
    <div className="p-11">
      <div className="text-[#4563AA] font-bold text-2xl pb-11">ALL USERS</div>

      <div className=" bg-[#E5E5E5] w-fit flexx flex-col p-8 rounded-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)]">
        <div className="flex flex-col justify-center gap-8 items-center">
          <img
            className="w-[150px] h-[150px] drop-shadow-2xl border border-white rounded-full overflow-hidden "
            src={
              // isLoading
              "/assets/default-profile-image.svg"
              // : "https://react-bank-project.eapi.joincoded.com/" +
              // myprofile.image
            }
          />
        </div>
        <div className="flex flex-col pt-8 gap-6">
          <div className="flex flex-col items-center">
            <div className="text-[#4563AA] font-bold">USERNAME</div>
            <div className="text-[#393939]">
              testname
              {/* {isLoading ? "Loading" : myprofile.username} */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[#4563AA] font-bold">CURRENT BALANCE</div>
            <div className="text-[#393939]">
              testbalance {/* {isLoading ? "Loading" : myprofile.balance} */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <input
            placeholder="Enter Transfer Amount"
            type="number"
            id="amount"
            name="amount"
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className=" w-[180px] text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA] hover:bg-[#7590D1]"
            >
              TRANSFER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
