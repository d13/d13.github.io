import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { KdFormElement } from '../base/form-element';
import { buttonBase } from './button.css';

@customElement('kd-form-button')
export class KdFormButton extends KdFormElement {
  static override styles = [buttonBase];

  @query('.button', true)
  protected _control!: HTMLButtonElement;

  @property({ reflect: true })
  override type: HTMLButtonElement['type'] = 'button';

  private handleClick() {
    switch (this.type) {
      case 'submit':
        this.form?.requestSubmit(this);
        break;
      case 'reset':
        this.form?.reset();
        break;
    }
  }
  private handleFocus() {
    this.fireEvent('kd-focus');
  }

  private handleBlur() {
    this.fireEvent('kd-blur');
  }

  override render() {
    return html`<button
      class="button"
      part="base"
      name="${ifDefined(this.name)}"
      type="${ifDefined(this.type)}"
      ?disabled=${this.disabled}
      @click=${this.handleClick.bind(this)}
      @focus=${this.handleFocus.bind(this)}
      @blur=${this.handleBlur.bind(this)}
    >
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-form-button': KdFormButton;
  }
}
