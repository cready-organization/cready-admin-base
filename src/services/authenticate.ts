export const verifyCredential = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
