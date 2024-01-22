import { customElement, property, query } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { KdBaseElement } from '../base/base-element';
import { buttonBase } from './button.css';

@customElement('kd-link-button')
export class KdLinkButton extends KdBaseElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
  static override styles = [buttonBase];

  @query('.button', true)
  private _buttonEl!: HTMLButtonElement;

  @property() href?: HTMLAnchorElement['href'];
  @property() target?: HTMLAnchorElement['target'];
  @property() rel?: HTMLAnchorElement['rel'];

  override focus(options?: FocusOptions) {
    this._buttonEl.focus(options);
  }

  override blur() {
    this._buttonEl.blur();
  }

  override click() {
    this._buttonEl.click();
  }

  override render() {
    return html`<a
      class="button"
      part="base"
      href="${ifDefined(this.href)}"
      target="${ifDefined(this.target)}"
      rel="${ifDefined(this.rel)}"
      ><slot></slot
    ></a>`;
  }
}
