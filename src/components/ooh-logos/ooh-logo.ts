import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';
import { KdBaseElement } from '../base/base-element';

@customElement('kd-ooh-logo')
export class KdOohLogo extends KdBaseElement {
  static override styles = [
    css`
      :host {
        --kd-ooh-logo-depth: 0;
        --kd-ooh-logo-multi: 1;
        --kd-ooh-logo-at: calc(var(--kd-ooh-logo-depth) * var(--kd-ooh-logo-multi));
        --kd-ooh-logo-scale: 0.92;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 16 / 9;
        padding: var(--spacing-md);
        background-color: var(--kd-ooh-logo-background-color, var(--color-secondary-background));
        transition:
          filter 0.3s ease,
          transform 0.3s ease,
          background-color 0.3s ease;
        /* }

      :host-context(kd-ooh-logos:hover, kd-ooh-logos:focus-within) { */
        /* filter: blur(var(--kd-ooh-logo-depth));
        transform: translateZ(calc(var(--kd-ooh-logo-depth) * -1)); */
        filter: blur(var(--kd-ooh-logo-at));
        transform: translateZ(calc(var(--kd-ooh-logo-at) * -1)) scale(var(--kd-ooh-logo-scale));
        z-index: 1;
      }

      :host(:hover) {
        --kd-ooh-logo-multi: 0.1;
        z-index: 2;
      }

      :host(:focus) {
        --kd-ooh-logo-multi: 0;
        --kd-ooh-logo-scale: 1;
        z-index: 3;
        background-color: var(--kd-ooh-logo-hover-background-color, var(--color-secondary-background));
      }

      ::slotted(img) {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `,
  ];

  @property()
  accent?: string;

  override connectedCallback() {
    super.connectedCallback();
    this.role = 'listitem';
    this.tabIndex = 0;
  }

  protected override update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('accent')) {
      if (this.accent) {
        this.style.setProperty('--kd-ooh-logo-hover-background-color', this.accent);
      } else {
        this.style.removeProperty('--kd-ooh-logo-hover-background-color');
      }
    }
  }

  override render() {
    return html`<slot></slot>`;
  }
}
