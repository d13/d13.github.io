import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { KdBaseElement } from '../base/base-element';
import { formatDate } from '../../system/date';

@customElement('kd-life-event')
export class KdLifeEvent extends KdBaseElement {
  static readonly now = new Date();
  static override styles = [
    css`
      :host {
        contain: content;
        display: block;
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
      }

      .title {
        display: block;
      }

      .content {
        display: block;
      }
    `,
  ];

  @property() type: 'job' | 'education' | 'project' | 'other' = 'other';
  @property() asset?: string;
  @property() date!: string;
  @property({ attribute: 'start-date' }) startDate?: string;
  @property() url?: string;

  get endingDate() {
    if (this.date === 'present') return KdLifeEvent.now;
    const date = new Date(this.date);
    if (date.toString() === 'Invalid Date') return undefined;
    return date;
  }

  get startingDate() {
    if (this.startDate === undefined) return undefined;
    const date = new Date(this.startDate);
    if (date.toString() === 'Invalid Date') return undefined;
    return date;
  }

  private renderDateRange() {
    if (this.endingDate === undefined) return nothing;

    if (this.startingDate === undefined) {
      if (this.date === 'present') return html`<time datetime="${KdLifeEvent.now.getFullYear()}">Present</time>`;
      return html`<time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>`;
    }

    if (this.date === 'present') {
      return html`<time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> - Present`;
    }

    return html`<time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>`;
  }

  override render() {
    return html`
      ${this.asset ? html`<img class="media" src="${this.asset}" alt="" />` : nothing} ${this.renderDateRange()}
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
