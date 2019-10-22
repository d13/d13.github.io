export function on(element, type, listener, thisArg, capture = false) {
  if (thisArg) {
    listener = listener.bind(thisArg);
  }

  element.addEventListener(type, listener, capture);

  return {
    off: function () {
      element.removeEventListener(type, listener, capture);
    }
  };
}

export function once(element, type, listener, thisArg, capture) {
  if (thisArg) {
    listener = listener.bind(thisArg);
  }

  const inst = on(element, type, () => {
    listener.apply(thisArg, arguments);
    if (inst) {
      inst.off();
    }
  }, thisArg, capture);

  return inst;
}
