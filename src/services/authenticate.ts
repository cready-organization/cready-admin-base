export const verifyCredential = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false);
    }, 1500);
  });
