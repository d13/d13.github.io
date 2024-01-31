import { customElement, queryAssignedElements } from 'lit/decorators.js';
import { css, html } from 'lit';
import { KdBaseElement } from '../base/base-element';
import { KdLifeEvent } from './life-event';

@customElement('kd-life-events')
export class KdLifeEvents extends KdBaseElement {
  static override styles = [
    css`
      :host {
        display: block;
        position: relative;
        padding-block: var(--spacing-xl);
      }

      .timeline {
        display: block;
        position: absolute;
        block-size: 100%;
        inline-size: 2px;
        background-color: var(--color-raw-blue-30);
        inset-block-start: 0;
        inset-inline-start: calc(var(--size-5) / 2);
        transform: translateX(-50%);
      }

      .events {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
      }
    `,
  ];

  @queryAssignedElements({ selector: 'kd-life-event' }) lifeEventEls!: KdLifeEvent[];

  override render() {
    return html`<span class="timeline"></span><slot class="events"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-life-events': KdLifeEvents;
  }
}
