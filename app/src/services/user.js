import Api from "@/utils/api";

export default {
  get: async (params) => {
    const res = await Api.doGet(`users`, params);
    console.debug("GET USERS RESPONSE", "<", res);
    return res;
  },
  create: async (params) => {
    const res = await Api.doPost(`users`, params);
    console.debug("CREATE USERS RESPONSE", "<", res);
    return res;
  },
  update: async (params) => {
    const res = await Api.doPut(`users`, params);
    console.debug("UPDATE USERS RESPONSE", "<", res);
    return res;
  },
  delete: async (id) => {
    const res = await Api.doDelete(`users/${id}`);
    console.debug("DELETE USERS RESPONSE", "<", res);
    return res;
  },
};
