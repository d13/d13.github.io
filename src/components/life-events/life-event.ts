import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base/base-element';

@customElement('kd-life-event')
export class KdLifeEvent extends BaseElement {
  @property({ type: String }) type: 'job' | 'education' | 'project' | 'other' = 'other';
  @property({ type: String }) asset?: string;
  @property({ type: String }) date!: string;
  @property({ type: String, attribute: 'start-date' }) startDate?: string;

  get endingDate() {
    if (this.date === 'present') return undefined;
    return new Date(this.date);
  }

  get startingDate() {
    if (this.startDate === undefined) return undefined;
    return new Date(this.startDate);
  }

  override render() {
    return html`
      ${this.asset ? html`<img class="icon" src="${this.asset}" alt="" />` : nothing}
      <slot name="title" class="title"></slot>
      <slot class="content"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-life-event': KdLifeEvent;
  }
}
