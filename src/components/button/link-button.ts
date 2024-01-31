import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { KdInteractiveElement } from '../base/interactive-element';
import { buttonBase } from './button.css';

@customElement('kd-link-button')
export class KdLinkButton extends KdInteractiveElement {
  static override styles = [buttonBase];

  @query('.button', true)
  protected _control!: HTMLButtonElement;

  @property() href?: HTMLAnchorElement['href'];
  @property() target?: HTMLAnchorElement['target'];
  @property() rel?: HTMLAnchorElement['rel'];

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

declare global {
  interface HTMLElementTagNameMap {
    'kd-link-button': KdLinkButton;
  }
}
