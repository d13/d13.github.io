export class Disposable {
  static from(...disposablesFns: { dispose: () => unknown }[]): Disposable {
    let disposables: { dispose: () => unknown }[] | undefined = disposablesFns;
    return new Disposable(() => {
      if (!disposables) return;

      for (const disposable of disposables) {
        disposable.dispose?.();
      }

      disposables = undefined;
    });
  }

  private disposeFn?: () => unknown;

  constructor(disposeFn: () => unknown) {
    this.disposeFn = disposeFn;
  }

  dispose() {
    if (!this.disposeFn) return;

    this.disposeFn();
    this.disposeFn = undefined;
  }
}
