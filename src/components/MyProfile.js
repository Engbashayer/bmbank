import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { getYourProfile } from "../api/auth";
import UserContext from "../context/UserContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  // const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { data: myprofile, isLoading } = useQuery({
    queryKey: ["getYourProfile"],
    queryFn: () => getYourProfile(),
  });

  console.log(myprofile);

  return (
    <div>
      <div className="bg-[#4563AA] p-11 relative h-40">
        <div className="absolute top-0 flex flex-col justify-center gap-8">
          <img
            className="w-[250px] h-[250px] drop-shadow-2xl border border-white rounded-full overflow-hidden "
            src={
              isLoading
                ? "/assets/default-profile-image.svg"
                : "https://react-bank-project.eapi.joincoded.com/" +
                  myprofile.image
            }
          />
          <div className="flex justify-center">
            <img className="drop-shadow-2xl" src="/assets/camera.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-[200px] pl-11 gap-6">
        <div>
          <div className="text-[#4563AA] font-bold">USERNAME</div>
          <div className="text-[#393939]">
            {isLoading ? "Loading" : myprofile.username}
          </div>
        </div>
        <div>
          <div className="text-[#4563AA] font-bold">CURRENT BALANCE</div>
          <div className="text-[#393939]">
            {" "}
            {isLoading ? "Loading" : myprofile.balance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
