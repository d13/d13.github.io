import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseElement } from '../base/base-element';

@customElement('kd-life-events')
export class KdLifeEvents extends BaseElement {
  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-life-events': KdLifeEvents;
  }
}
