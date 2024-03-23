import { customElement } from 'lit/decorators.js';
import { css, html } from 'lit';
import { KdBaseElement } from '../base/base-element';

@customElement('kd-ooh-logos')
export class KdOohLogos extends KdBaseElement {
  static override styles = [
    css`
      :host {
        display: block;
        /* padding: var(--size-5) var(--spacing-lg); */
        padding-block: var(--size-5);
      }

      .canvas {
        display: grid;
        gap: var(--size-3);
        grid-template-columns: repeat(auto-fit, minmax(var(--size-8), 1fr));
        transition: gap 0.3s ease;
        perspective: 300px;
      }

      /* .canvas:focus-within,
      .canvas:hover {
        gap: var(--size-3);
      } */

      .canvas:focus-within::slotted(kd-ooh-logo),
      .canvas:hover::slotted(kd-ooh-logo) {
        --kd-ooh-logo-depth: 8px;
      }
    `,
  ];

  override connectedCallback() {
    super.connectedCallback();
    this.role = 'list';
  }

  override render() {
    return html`<slot class="canvas"></slot>`;
  }
}
