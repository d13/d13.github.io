/* global document, window */
import { type Disposable, toDisposable } from './disposable';

export function onReady(target: Document | Window, callback: () => void, thisArg?: unknown, callIfReady = true): void {
  const isWindow = target === window;
  const readyState = document.readyState;

  const boundCallback = thisArg ? callback.bind(thisArg) : callback;

  if (readyState === 'loading' || (readyState === 'interactive' && isWindow)) {
    const eventName = isWindow ? 'load' : 'DOMContentLoaded';
    target.addEventListener(eventName, boundCallback, { once: true });
  } else if (callIfReady) {
    boundCallback();
  }
}

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
export function on<K extends keyof GlobalEventHandlersEventMap>(
  element: HTMLElement,
  name: K,
  listener: (e: GlobalEventHandlersEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable;
export function on<K extends keyof (ElementEventMap | DocumentEventMap | WindowEventMap | GlobalEventHandlersEventMap)>(
  element: Element | Document | Window | HTMLElement,
  name: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): Disposable {
  options ??= false;
  element.addEventListener(name, listener, options);

  return toDisposable(() => {
    element.removeEventListener(name, listener, options);
  });
}

export function delegateOn<K extends keyof (GlobalEventHandlersEventMap | ElementEventMap)>(
  element: Element,
  selector: string,
  name: K,
  listener: (e: (GlobalEventHandlersEventMap | ElementEventMap)[K], target: Element) => void,
  options?: boolean | AddEventListenerOptions,
): Disposable {
  const delegateListener = (e: Event) => {
    const delegateTarget: Element | null | undefined = (e.target as Element | null)?.closest(selector);
    if (!delegateTarget) {
      return;
    }

    listener(e as (GlobalEventHandlersEventMap | ElementEventMap)[K], delegateTarget);
  };

  return on(element, name, delegateListener, options);
}
