import { loadingController, toastController } from "@ionic/vue";

export const showLoading = async () => {
  const loading = await loadingController.create({
    message: "Loading...",
    // duration: 3000,
    spinner: "circles",
  });

  return loading;
};

export async function showNotification({ type , message} : { type: string | 'default', message: string }) {

  let _type = "";
  switch (type) {
    case 'success':
      _type = 'success';
      break;
    case 'error':
      _type = 'danger';
      break;
    default:
      _type = 'default';
  }

  const toast = await toastController.create({
    message: message,
    duration: 1500,
    position: 'bottom',
    color: _type,
  });

  await toast.present();

  setTimeout(() => {
    toast.dismiss();
  }, 1500);
}


