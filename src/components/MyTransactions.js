import react, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  getTransactions,
  getYourProfile,
  depositToAccount,
  withdrawFromAccount,
  getUserInfoByUserId,
} from "../api/auth";
import UserContext from "../context/UserContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TransactionItem from "./TransactionItem";

const MyTransactions = () => {
  const [amountW, setAmountW] = useState(0);
  const [amountD, setAmountD] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();

  const { data: myTransactions } = useQuery({
    queryKey: ["myTransactions"],
    queryFn: () => getTransactions(),
  });

  const { mutate: deposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => depositToAccount(amountD),
    onSuccess: () => {
      setUser(true);
      queryClient.invalidateQueries(["myprofile"]);
    },
  });

  const { mutate: withdraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdrawFromAccount(amountW),
    onSuccess: () => {
      setUser(true);
      queryClient.invalidateQueries(["myprofile"]);
    },
  });

  const handleDeposit = (amountD) => {
    deposit();
  };
  const handleWithdraw = (amountW) => {
    withdraw();
  };

  const { data: myprofile, isLoading } = useQuery({
    queryKey: ["myprofile"],
    queryFn: () => getYourProfile(),
    onSuccess: () => {
      queryClient.invalidateQueries(["myprofile"]);
    },
  });

  const { data: getbyUserId } = useQuery({
    queryKey: ["getbyUserId"],
    queryFn: () => getUserInfoByUserId(),
  });

  //now myTransactions is an obj that holds my transactions

  const handleAmountW = (e) => {
    setAmountW(e.target.value);
  };

  const handleAmountD = (e) => {
    setAmountD(e.target.value);
  };

  const mappedTransaction = myTransactions?.map((Transaction) => {
    return <TransactionItem Transaction={Transaction} />;
  });

  return (
    <div className="p-11 ">
      <div className="flex flex-col gap-6">
        <div className="text-[#4563AA] font-bold text-2xl">MY TRANSACTIONS</div>
        <div className="bg-[#ffffff] p-11 flex flex-col gap-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)] rounded-2xl">
          <div className="text-[#4563AA] rounded-full font-bold text-2xl">
            MY CURRENT BALANCE
          </div>
          <div className="text-[#393939]">
            {isLoading ? "Loading" : myprofile.balance} KD
          </div>
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
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center p-11 gap-11">
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA] hover:bg-[#7590D1] cursor-pointer">
          TRANSFERS
        </div>
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA] hover:bg-[#7590D1] cursor-pointer">
          DEPOSITS
        </div>
        <div className="text-white rounded-full font-bold text-2xm p-4 px-12 bg-[#4563AA] hover:bg-[#7590D1] cursor-pointer">
          WITHDRAWALS
        </div>
      </div>
      <div className="text-[#4563AA] rounded-full font-bold text-2xl pb-11">
        MY TRANSACTIONS
      </div>
      <div className="w-full h-[100px] rounded-2xl border border-[#4563AA]">
        <div className="w-full h-[40px] items-center flex flex-row justify-around rounded-t-2xl bg-[#4563AA]">
          <div className="text-white font-bold">AMOUNT</div>
          <div className="text-white font-bold">FROM</div>
          <div className="text-white font-bold">TO</div>
          <div className="text-white font-bold">METHOD</div>
          <div className="text-white font-bold">ID</div>
        </div>
        <div>{mappedTransaction}</div>
      </div>
      <div>
        <div className="text-[#4563AA] pt-11 pb-6 font-bold text-2xl">
          ACTIONS
        </div>
        <div className="w-full flex items-center gap-10 text-center justify-center pt-20 pb-20">
          <div className="w-[500px] flex flex-col gap-10 p-11 border border-[#4563AA] rounded-2xl">
            <div className="text-[#4563AA] text-2xl">
              DEPOSIT FROM MY ACCOUNT
            </div>
            <div className="flex justify-center flex-col">
              <div className="w-full flex justify-center">
                <img
                  className="w-[100px] pb-11"
                  src="/assets/deposit-icon.svg"
                />
              </div>

              <div className="flex flex-col gap-5">
                <input
                  placeholder="Enter Deposit Amount"
                  type="number"
                  id="amount"
                  name="deposit"
                  onChange={handleAmountD}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleDeposit}
                    type="submit"
                    className=" w-[200px] text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA] hover:bg-[#7590D1]"
                  >
                    DEPOSIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-col gap-10 p-11 border border-[#4563AA] rounded-2xl">
            <div className="text-[#4563AA] text-2xl">
              WITHDRAW FROM MY ACCOUNT
            </div>
            <div className="flex justify-center flex-col">
              <div className="w-full flex justify-center">
                <img
                  className="w-[100px] pb-11"
                  src="/assets/withdraw-icon.svg"
                />
              </div>

              <div className="flex flex-col gap-5">
                <input
                  placeholder="Enter Withdraw Amount"
                  type="number"
                  id="amount"
                  name="amount"
                  onChange={handleAmountW}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleWithdraw}
                    type="submit"
                    className=" w-[200px] text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA] hover:bg-[#7590D1]"
                  >
                    WITHDRAW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactions;
