import { once } from './function';

// TODO: include Symbol.dispose when TC39 proposal is implemented
export interface Disposable {
  dispose: () => void;
}

export interface AsyncDisposable {
  dispose: () => Promise<void>;
}

export function toDisposable(dispose: () => void, options?: { once: boolean }): Disposable {
  if (options?.once) {
    dispose = once(dispose);
  }

  return { dispose };
}

export function toAsyncDisposable(dispose: () => Promise<void>, options?: { once: boolean }): AsyncDisposable {
  if (options?.once) {
    dispose = once(dispose);
  }

  return { dispose };
}
