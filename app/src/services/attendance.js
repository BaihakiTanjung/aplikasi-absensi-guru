import Api from "@/utils/api";

export default {
  create: async (params) => {
    const res = await Api.doPost(`attendance`, params);
    console.debug("GET ATTENDANCE RESPONSE", "<", res);
    return res;
  },
  report : async (params) => {
    const res = await Api.doGetBlob(`attendance/report?${new URLSearchParams(params || "").toString()}`, params);
    console.debug("GET REPORT RESPONSE", "<", res);
    return res;
  }
};
