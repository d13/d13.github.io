export function once<T extends (...args: unknown[]) => unknown>(func: T): T {
  let called = false;
  let result: ReturnType<T>;

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      result = func.apply(this, args) as ReturnType<T>;
      called = true;
    }

    return result;
  } as T;
}
