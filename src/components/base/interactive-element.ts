import { LitElement } from 'lit';
import { KdBaseElement, KdEventMap, KdEvents } from './base-element';

export abstract class KdInteractiveElement<Events extends KdEventMap = KdEvents> extends KdBaseElement<Events> {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  protected abstract _control: HTMLElement;

  override focus(options?: FocusOptions) {
    this._control.focus(options);
  }

  override blur() {
    this._control.blur();
  }

  override click() {
    this._control.click();
  }
}
