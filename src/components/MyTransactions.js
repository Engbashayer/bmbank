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
          <div className="flex justify-center">
            <img
              className="w-3/4 drop-shadow-2xl"
              src="/assets/deposit-button.svg"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-3/4 drop-shadow-2xl"
              src="/assets/withdraw-button.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactions;
