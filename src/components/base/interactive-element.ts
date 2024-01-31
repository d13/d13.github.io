import { LitElement } from 'lit';
import { KdBaseElement } from './base-element';

export abstract class KdInteractiveElement extends KdBaseElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  abstract control: HTMLElement;

  override focus(options?: FocusOptions) {
    this.control.focus(options);
  }

  override blur() {
    this.control.blur();
  }

  override click() {
    this.control.click();
  }
}
