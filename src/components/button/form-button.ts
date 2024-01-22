import { customElement, property, query } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { KdFormElement } from '../base/form-element';
import { buttonBase } from './button.css';

@customElement('kd-form-button')
export class KdFormButton extends KdFormElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
  static override styles = [buttonBase];

  @query('.button', true)
  private _buttonEl!: HTMLButtonElement;

  @property({ reflect: true })
  override type: HTMLButtonElement['type'] = 'button';

  override focus(options?: FocusOptions) {
    this._buttonEl.focus(options);
  }

  override blur() {
    this._buttonEl.blur();
  }

  override click() {
    this._buttonEl.click();
  }

  private handleClick() {
    switch (this.type) {
      case 'submit':
        this.form?.requestSubmit(this);
        break;
      case 'reset':
        this.form?.reset();
        break;
      default:
        break;
    }
  }

  override render() {
    return html`<button
      class="button"
      part="base"
      type="${ifDefined(this.type)}"
      ?disabled=${this.disabled}
      @click=${this.handleClick}
    >
      <slot></slot>
    </button>`;
  }
}
