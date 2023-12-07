/**
 *  节流函数
 * @param fn function
 * @param delay [number]
 * @returns
 */

export const throttleFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay = 500
) => {
  let timer: null | NodeJS.Timeout = null;
  let lastTime: number = Date.now();

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        lastTime = Date.now();
        fn.apply(this, args);
        timer = null;
      }, delay - (now - lastTime));
    }
  };
};
