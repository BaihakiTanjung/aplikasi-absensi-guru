import { defineStore } from "pinia";
import SERVICE from "@/services/auth";
import { showNotification, showLoading } from "@/utils/ui";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogin: false,
    isRole : [],
    user: {},
  }),
  getters: {
    getState(state) {
      const { isLogin, user } = state;

      return {
        isLogin,
        user
      };
    },
    isAdmin(state) {
      const { isRole } = state;
      return isRole.includes('admin');
    },
  },
  actions: {
    changeState(nameState, value) {
      this[nameState] = value;
    },
    async login(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.login(params);
        isLoading.dismiss();
        console.log('res', res)
        localStorage.setItem("auth_token", res?.data?.token);

        return res;
      } catch (error) {
        showNotification({ type : 'error',message: error.response.data.message });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
    // async register(params) {
    //   const loadingStore = useLoadingStore();
    //   try {
    //     loadingStore.showLoading();
    //     const res = await SERVICE.register(params);
    //     loadingStore.hideLoading();

    //     localStorage.setItem("auth_token", res.access_token);

    //     return res;
    //   } catch (error) {
    //     showNotification({ msg: error });
    //     loadingStore.hideLoading();
    //     console.error(error);
    //     throw error;
    //   }
    // },
    async logout() {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        await SERVICE.logout();
        isLoading.dismiss();

        localStorage.removeItem("auth_token");
        localStorage.removeItem("profile");
        localStorage.removeItem("user");

        return;
      } catch (error) {
        showNotification({ type : 'error',message: error.response.data.message });
        isLoading.dismiss();
        console.error(error);
        throw error;
      }
    },
  },
});
