import instance from ".";

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/mini-project/api/auth/register");
};

export { getAllUsers, register };
