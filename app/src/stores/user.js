import { defineStore } from "pinia";
import SERVICE from "@/services/user";
import { showNotification, showLoading } from "@/utils/ui";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  getters: {
    getState(state) {
      const { users } = state;

      return {
        users,
      };
    },
  },
  actions: {
    changeState(nameState, value) {
      this[nameState] = value;
    },
    async get(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.get(params);
        isLoading.dismiss();
        
        this.changeState("users", res.data);

        return res;
      } catch (error) {
        showNotification({
          type: "error",
          message: error.response.data.message,
        });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
    async create(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.create(params);
        isLoading.dismiss();
        console.log("res", res);

        showNotification({
            type: "success",
            message: res.data.message,
        });

        return res;
      } catch (error) {
        showNotification({
          type: "error",
          message: error.response.data.message,
        });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
    async update(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.update(params);
        isLoading.dismiss();
        console.log("res", res);

        showNotification({
            type: "success",
            message: res.data.message,
        });

        return res;
      } catch (error) {
        showNotification({
          type: "error",
          message: error.response.data.message,
        });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
    async delete(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.delete(params);
        isLoading.dismiss();
        console.log("res", res);

        showNotification({
            type: "success",
            message: res.data.message,
        });

        return res;
      } catch (error) {
        showNotification({
          type: "error",
          message: error.response.data.message,
        });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
  },
});
