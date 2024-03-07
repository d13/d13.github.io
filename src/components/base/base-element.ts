import { LitElement } from 'lit';
import { Disposable } from '../../system/disposable';

export class KdBaseElement extends LitElement {
  protected _disposables: Disposable[] = [];

  override disconnectedCallback() {
    super.disconnectedCallback();

    for (const disposable of this._disposables) {
      disposable.dispose();
    }
  }

  protected fireEvent<T = unknown>(name: string, detail?: T): boolean {
    let event: CustomEvent<T>;
    if (detail === undefined) {
      event = new CustomEvent(name);
    } else {
      event = new CustomEvent(name, { detail });
    }
    return this.dispatchEvent(event);
  }
}
