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
        display: flex;
        flex-direction: row;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .event-tag {
        flex: 0 0 var(--size-5);
      }

      .year {
        position: relative;
        display: inline-block;
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        transform: translateX(-50%);
        padding-inline: var(--spacing-lg) var(--spacing-xs);
        padding-block: var(--spacing-xs);
        margin-inline-start: var(--size-2);
        background: var(--color-primary-background);
        border: 2px solid var(--color-primary-foreground);
      }

      /* make an arrow before .year */
      .year::before,
      .year::after {
        position: absolute;
        inset-block: 50%;
        inset-inline-start: var(--spacing-xs);
        transform: translateY(-50%);
        display: inline-block;
        content: '';
        block-size: var(--type-small-size);
        aspect-ratio: 2/3;
        clip-path: polygon(100% 50%, 0 0, 0 100%);
        /* vertical-align: text-bottom; */
      }

      .year::before {
        background: var(--color-raw-blue-50);
      }
      .year::after {
        background: var(--color-raw-red-40);
        transform: translateX(50%) translateY(-50%);
      }

      .year2 {
        position: relative;
        display: flex;
        align-items: center;
        font-family: var(--font-family-heading);
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        width: max-content;
        padding-inline: var(--spacing-md);
        aspect-ratio: 1;
        margin-inline-start: var(--size-3);
        margin-block-start: var(--size-1);
        transform: translateX(-50%) rotateZ(-45deg);
        color: var(--color-primary-background);
        background-color: var(--color-primary-background);
      }

      .year2::after {
        position: absolute;
        inset-block-end: 0;
        inset-inline-end: 0;
        display: inline-block;
        content: '';
        block-size: 100%;
        aspect-ratio: 1;
        clip-path: polygon(20% 0%, 100% 0px, 100% 80%, 80% 100%, 0px 100%, 0% 20%);
        z-index: -1;

        background:
          linear-gradient(45deg, var(--color-raw-blue-50) 50%, transparent 0) 0 20px,
          linear-gradient(135deg, transparent 50%, var(--color-raw-blue-30) 0) 0 30px,
          var(--color-raw-blue-20);
        opacity: 0.2;
      }

      .year2::before {
        position: absolute;
        inset-block-end: 0;
        inset-inline-end: 0;
        display: inline-block;
        content: '';
        block-size: 100%;
        aspect-ratio: 1;
        clip-path: polygon(20% 0%, 100% 0px, 100% 80%, 80% 100%, 0px 100%, 0% 20%);
        z-index: -2;

        background: linear-gradient(0, var(--color-raw-blue-30) 0, var(--color-raw-blue-60) 100%);
      }

      .event {
      }

      .date-range {
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
      }

      .summary {
      }

      .title {
        display: block;
      }

      .content {
        display: block;
      }
    `,
  ];

  @property() type: 'job' | 'freelance' | 'education' | 'project' | 'other' = 'other';
  @property() asset?: string;
  @property({ attribute: 'asset-type' }) assetType?: 'image' | 'video' = 'image';
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
      return html`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>
      </div>`;
    }

    if (this.date === 'present') {
      return html`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> - Present
      </div>`;
    }

    return html`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>
    </div>`;
  }

  override render() {
    return html`
      <div class="event-tag">
        <span class="year2">${this.endingDate?.getFullYear()}</span>
      </div>
      <article class="event">
        ${this.asset ? html`<img class="media" src="${this.asset}" alt="" />` : nothing}
        <div class="summary">
          ${this.renderDateRange()}
          <slot name="title" class="title"></slot>
          <slot class="content"></slot>
        </div>
        <div class="meta"></div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-life-event': KdLifeEvent;
  }
}
