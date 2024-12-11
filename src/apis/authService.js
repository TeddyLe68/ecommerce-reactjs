import axiosClient from "./axiosClient";

const register = async (body) => {
  // console.log(body);
  return await axiosClient.post("/register", body);
};

const signIn = async (body) => {
  return await axiosClient.post("/login", body);
};
const getInfo = async () => {
  return await axiosClient.get(
    "/user/info/55cbc325-2fd8-4fa7-b066-eaaf5e5a71b4"
  );
};

export { register, signIn, getInfo };
