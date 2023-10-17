import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>
        <img src="/assets/home-page.svg" />
      </div>
      <div className="w-full flex items-center gap-8 text-center justify-center pt-20 pb-20">
        <div className="flex justify-center">
          <img
            className="w-3/4 drop-shadow-2xl"
            src="/assets/transfer-button.svg"
          />
        </div>
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
  );
};

export default HomePage;
