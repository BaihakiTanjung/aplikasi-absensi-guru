import { defineStore } from "pinia";
import SERVICE from "@/services/attendance";
import { showNotification, showLoading } from "@/utils/ui";
import helpers from "@/utils/helper";
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export const useAttendanceStore = defineStore("attendance", {
  state: () => ({}),
  getters: {},
  actions: {
    changeState(nameState, value) {
      this[nameState] = value;
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
            message: res.message,
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
    async report(params) {
      const isLoading = await showLoading();
      isLoading.present();
      try {
        const res = await SERVICE.report(params);
        isLoading.dismiss();
        console.log("res", res);
        showNotification({
            type: "success",
            message: 'Downloaded, check on your file manager',
        });
        helpers.downloadFile(res, "report", "xlsx");

        const contents = await Filesystem.readFile({
            path: 'secrets/text.txt',
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
          });
        
        console.log('secrets:', contents);

       

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
