import { customElement, property, query } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { KdFormElement } from '../base/form-element';

@customElement('kd-text-input')
export class KdTextInput extends KdFormElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ reflect: true })
  override type: 'text' | 'url' | 'tel' | 'email' | 'password' = 'text';

  override render() {
    return html`<input
      class="input"
      part="base"
      type="${ifDefined(this.type)}"
      ?disabled=${this.disabled}
      name="${this.name}"
    />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-text-input': KdTextInput;
  }
}
