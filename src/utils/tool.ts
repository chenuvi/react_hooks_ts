/**
 * 这个函数没有考虑到异步操作。如果 fn 是一个异步函数，那么这个节流器可能会导致意外的行为。
 *  这个函数使用了全局变量 timer 来存储定时器的引用，这意味着如果你在同一个作用域中多次调用这个节流器，它们将会共享相同的 timer 变量，从而可能导致错误的结果。
 *  这个函数没有提供任何方式来取消正在等待的执行。
 *  这个函数没有处理参数和上下文信息。由于定时器回调函数是在全局作用域中执行的，所以它可能无法正确地访问到原函数的参数和上下文。
 * @param fn
 * @param delay
 * @returns
 */

// export const throttleFn = <T extends (...args: any[]) => any>(
//   fn: T,
//   delay = 500
// ) => {
//   let timer: null | NodeJS.Timeout = null;
//   if (!timer) {
//     const context = this;
//     setTimeout((...args) => {
//       fn.apply(context, args);
//       timer = null;
//     }, delay);
//   }
// };

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
