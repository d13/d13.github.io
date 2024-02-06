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
        padding-block: var(--size-5);
      }

      .timeline {
        display: block;
        position: absolute;
        inline-size: 2px;
        background-color: var(--color-raw-blue-30);
        inset-block: var(--size-7);
        inset-inline-start: calc(var(--size-5) / 2);
        transform: translateX(-50%);
      }

      .timeline::before,
      .timeline::after {
        content: '';
        display: block;
        position: absolute;
        inset-inline-start: 1px;
        inline-size: var(--size--1);
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--color-raw-blue-30);
      }

      .timeline::before {
        inset-block-start: 0;
        transform: translate(-50%, -50%);
      }

      .timeline::after {
        inset-block-end: 0;
        transform: translate(-50%, 50%);
      }

      .events {
        display: flex;
        flex-direction: column;
        gap: var(--size-5);
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
