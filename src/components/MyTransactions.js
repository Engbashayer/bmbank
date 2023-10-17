import React from "react";

const MyTransactions = () => {
  //   const { mutate: depositToAccount_mutate } = useMutation({
  //     mutationKey: ["depositToAccount"],
  //     mutationFn: () => depositToAccount(amount),
  //     onSuccess: () => {
  //       setUser(true);
  //     },
  // });
  return (
    <div className="p-11 ">
      <div className="flex flex-col gap-6">
        <div className="text-[#4563AA] rounded-full font-bold text-2xl">
          MY TRANSACTIONS
        </div>
        <div className="bg-[#ffffff] p-11 drop-shadow-2xl rounded-2xl">
          <div className="text-[#4563AA] rounded-full font-bold text-2xl">
            MY CURRENT BALANCE
          </div>
          <div className="text-[#393939]">KD 1000</div>
        </div>
      </div>
      <div className="text-[#4563AA] pt-11 pb-6 rounded-full font-bold text-2xl">
        FILTER BY
      </div>
      <div className="flex flex-row gap-3 w-full">
        <div>
          <img className="drop-shadow-2xl" src="/assets/search-icon.svg" />
        </div>
        <div className="w-full border border-[#4563AA] p-2 rounded-full">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            // onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center p-11 gap-11">
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA]">
          TRANSFERS
        </div>
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA]">
          DEPOSITS
        </div>
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA]">
          WITHDRAWALS
        </div>
      </div>
      <div className="text-[#4563AA] rounded-full font-bold text-2xl">
        MY TRANSACTIONS
      </div>
      <div>
        <div className="text-[#4563AA] pt-11 pb-6 font-bold text-2xl">
          ACTIONS
        </div>
        <div className="w-full flex items-center gap-8 text-center justify-center pt-20 pb-20">
          <div className="flex justify-center flex-col gap-10 p-11">
            <div className="text-[#4563AA] text-2xl">WITHDRAW</div>
            <div className="flex justify-center flex-col">
              <div className="w-full">
                <img
                  className="w-[100px] bg-[#4563AA] drop-shadow-2xl"
                  src="/assets/deposit-icon.svg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#4563AA] text-sm font-medium mb-2"
                >
                  Amount
                </label>
                <input
                  placeholder="Enter Withdraw Amount"
                  type="number"
                  id="amount"
                  name="amount"
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA]"
                >
                  WITHDRAW
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-10 p-11">
            <div className="text-[#4563AA] text-2xl">WITHDRAW</div>
            <div className="flex justify-center flex-col">
              <div className="w-full">
                <img
                  className="w-[100px] bg-[#4563AA] drop-shadow-2xl"
                  src="/assets/withdraw-icon.svg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#4563AA] text-sm font-medium mb-2"
                >
                  Amount
                </label>
                <input
                  placeholder="Enter Withdraw Amount"
                  type="number"
                  id="amount"
                  name="amount"
                  // onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA]"
                >
                  WITHDRAW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactions;
