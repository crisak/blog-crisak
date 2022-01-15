export const functionAsync = <T>(user: T, time = 2000) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, time);
  });
};
