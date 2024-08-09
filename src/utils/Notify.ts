import toast from "react-hot-toast";


export const notifyError = (messageNotify: string | undefined | null) => {
  toast.error(messageNotify || '', {
    position: "top-right",
    duration: 5000,

    style: {
      direction: 'rtl',
      fontSize: '14px',
      fontWeight: 400
    }
  });
};
export const notifySuccess = (messageNotify: string | undefined | null) => {
  toast.success(messageNotify || '', {
    position: "top-right",
    duration: 5000,
    style: {
      direction: 'rtl',
      fontSize: '14px',
      fontWeight: 400
    }
  });
};
