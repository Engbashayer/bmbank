import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="bg-[#4563AA] p-11 relative h-40">
        <div className="absolute top-0 flex flex-col justify-center gap-8">
          <img
            className="max-w-xs max-h-xs drop-shadow-2xl border border-white rounded-full overflow-hidden "
            src="/assets/default-profile-image.svg"
          />
          <div className="flex justify-center">
            <img className="drop-shadow-2xl" src="/assets/camera.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-300px pl-11 gap-6">
        <div>
          <div className="text-[#4563AA] font-bold">USERNAME</div>
          <div className="text-[#393939]">Username name</div>
        </div>
        <div>
          <div className="text-[#4563AA] font-bold">CURRENT BALANCE</div>
          <div className="text-[#393939]">KD 1000</div>
        </div>
        <div>
          <div className="text-[#4563AA] font-bold">DATE</div>
          <div className="text-[#393939]">Last Updated: 20/08/2023</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
