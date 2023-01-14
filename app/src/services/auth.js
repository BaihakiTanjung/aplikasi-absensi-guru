import Api from "@/utils/api";

export default {
  login: async (params) => {
    const res = await Api.doPost(`login`, params);
    console.debug("GET LOGIN RESPONSE", "<", res);
    return res;
  },
  register: async (params) => {
    const res = await Api.doPost(`register`, params);
    console.debug("GET REGISTER RESPONSE", "<", res);
    return res;
  },
  me: async () => {
    const res = await Api.doGet(`me`);
    console.log(res)
    if (res) {
      localStorage.setItem("profile", JSON.stringify(res?.data[0]));
    } else {
      localStorage.setItem("profile", '');
    }
    console.debug("GET USER LOGIN RESPONSE", "<", res);
    localStorage.setItem("user", JSON.stringify(res?.data));
    return res;
  },
  logout: async () => {
    const res = await Api.doPost(`logout`);
    console.debug("GET LOGOUT RESPONSE", "<", res);
    return res;
  },
};
