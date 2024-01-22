import { property } from 'lit/decorators.js';
import { KdBaseElement } from './base-element';

export abstract class KdFormElement extends KdBaseElement {
  static formAssociated = true;

  protected _internals: ElementInternals;
  protected _disabled = false;

  @property({ type: Boolean, reflect: true })
  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    const oldValue = this._disabled;
    this.toggleAttribute('disabled', value);
    this.requestUpdate('disabled', oldValue);
  }

  @property({ reflect: true })
  name = '';

  // get type() {
  //   return this.localName;
  // }
  abstract type: string;

  get form() {
    return this._internals.form;
  }

  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  get willValidate() {
    return this._internals.willValidate;
  }

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    return this._internals.reportValidity();
  }

  formDisabledCallback(disabled: boolean) {
    this._disabled = disabled;
    this._internals.ariaDisabled = disabled.toString();
    this.requestUpdate();
  }
}
