export const throttleFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay = 500
) => {
  let timer: null | NodeJS.Timeout = null;
  if (!timer) {
    const context = this;
    setTimeout((...args) => {
      fn.apply(context, args);
      timer = null;
    }, delay);
  }
};
