import { Disposable } from './disposable';

// References:
// https://github.com/d13/d13.github.io/blob/68bd82a889db4b153ee54e45685cba034cc673fc/src/ts/utility/events.ts
// https://github.com/gitkraken/vscode-gitlens/blob/main/src/webviews/apps/shared/dom.ts

export function on<K extends keyof WindowEventMap>(
  element: Window,
  name: K,
  listener: (e: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable;
export function on<K extends keyof DocumentEventMap>(
  element: Document,
  name: K,
  listener: (e: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable;
export function on<K extends keyof ElementEventMap>(
  element: Element,
  name: K,
  listener: (e: ElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable;
export function on<K extends keyof (ElementEventMap | DocumentEventMap | WindowEventMap)>(
  element: Element | Document | Window,
  name: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): Disposable {
  element.addEventListener(name, listener, options);

  return new Disposable(() => {
    let removeOptions: boolean | EventListenerOptions | undefined;
    if (options !== undefined) {
      if (typeof options === 'boolean') {
        removeOptions = options;
      } else {
        removeOptions = options.capture;
      }
    }
    element.removeEventListener(name, listener, removeOptions);
  });
}

export function delegateOn<T extends Element, K extends keyof ElementEventMap>(
  element: Element,
  selector: string,
  name: K,
  listener: (e: ElementEventMap[K], target: T) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable {
  const delegateListener = (e: ElementEventMap[K]) => {
    const originalTarget = e.target as Element;
    const target = originalTarget?.closest(selector);
    if (!target) {
      return;
    }

    listener(e, target as T);
  };

  return on(element, name, delegateListener, options);
}
