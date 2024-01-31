import { LitElement } from 'lit';

export class KdBaseElement extends LitElement {
  protected fireEvent(name: string, detail?: unknown) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }
}
