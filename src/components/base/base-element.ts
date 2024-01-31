import { LitElement } from 'lit';

export class KdBaseElement extends LitElement {
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
