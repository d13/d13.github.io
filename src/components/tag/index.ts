import { customElement } from 'lit/decorators.js';
import { css, html } from 'lit';
import { KdBaseElement } from '../base/base-element';

@customElement('kd-tag')
export class KdTag extends KdBaseElement {
  static override styles = [
    css`
      :host {
        display: inline-block;
        padding: var(--spacing-xs) var(--spacing-lg);
        font-size: var(--type-body-sm-size);
        text-transform: uppercase;
        border-radius: var(--roundness-sm);
        background-color: var(--color-tag-background);
        color: var(--color-tag-foreground);
        letter-spacing: 0.075em;
        vertical-align: middle;
      }

      :host {
        margin-inline-end: var(--spacing-xs);
      }
    `,
  ];

  override render() {
    return html`<slot></slot>`;
  }
}
