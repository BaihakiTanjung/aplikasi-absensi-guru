import axios from "axios";
const host = process.env.VUE_APP_API_HOST;
const baseUrl = `${host}/api/`;

const authToken = localStorage.getItem("auth_token");

class Api {
  host = host;

  async doGet(url: string) {
    return await axios
      .get(baseUrl + url, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  async doPost(url: string, params: any) {
    return await axios
      .post(baseUrl + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }



  async doPut(url: string, params: any) {
    return await axios
      .put(baseUrl + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }


  async doDelete(url: string) {
    return await axios
      .delete(baseUrl + url, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }
 
  async doGetBlob(url: string) {
    return await axios
      .get(baseUrl + url, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
        responseType: "arraybuffer",
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doPostMultipart(url: string, params: any) {
    return await axios
      .post(baseUrl + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doPatchMultipart(url: string, params: any) {
    return await axios
      .patch(baseUrl + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default new Api();
