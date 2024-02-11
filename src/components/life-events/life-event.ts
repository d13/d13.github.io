import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { KdBaseElement } from '../base/base-element';
import { formatDate } from '../../system/date';
import { sharedStyles } from '../../styles/shared.css';

@customElement('kd-life-event')
export class KdLifeEvent extends KdBaseElement {
  static readonly now = new Date();
  static override styles = [
    sharedStyles,
    css`
      :host {
        contain: content;
        display: flex;
        flex-direction: row;
        gap: var(--spacing-xl);
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .timeline-zone {
        flex: 0 0 var(--size-5);
        position: relative;
      }

      /*
      .event-tag {
        position: absolute;
        display: inline-block;
        inset-block-start: 50%;
        inset-inline-start: 50%;
        transform: translate(-50%, -50%);
        block-size: var(--size-2);
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--color-raw-blue-30);
        border: 4px solid var(--color-primary-background);
      }
      */

      .year2 {
        position: sticky;
        inset-block-start: var(--size-5);
        display: flex;
        align-items: center;
        font-family: var(--font-family-heading);
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        width: max-content;
        padding-inline: var(--spacing-md);
        aspect-ratio: 1;
        margin-inline: auto;
        /* margin-inline-start: var(--size-3); */
        margin-block: var(--size-1);
        /* transform: translateX(-50%) rotateZ(-45deg); */
        transform: rotateZ(-45deg);
        color: var(--color-primary-background);
        /* background-color: var(--color-primary-background); */
        z-index: var(--elevation-inline);
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
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
      }

      @media (min-width: 800px) {
        .event {
          display: grid;
          grid-template-columns: 3fr 4fr;
          grid-template-rows: auto;
          grid-template-areas:
            'summary media'
            'meta meta';
          gap: var(--spacing-lg) var(--spacing-xl);
        }
      }

      .date-range {
        line-height: 1;
      }

      .media-zone {
        grid-area: media;
      }

      .media-container {
        position: relative;
        overflow: hidden;
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
        vertical-align: middle;
      }

      @media (min-width: 800px) {
        .media {
          width: 100%;
          aspect-ratio: 16 / 9;
          /* height: 100%; */
          object-fit: contain;
          object-position: center;
        }
      }

      .media-cover {
        position: absolute;
        width: 100%;
        aspect-ratio: 16 / 9;
        /* height: 100%; */
        object-fit: cover;
        object-position: center;
        z-index: var(--elevation-behind);
        filter: blur(16px) saturate(50%);
        opacity: 0.2;
      }

      @media (max-width: 799px) {
        .media-cover {
          display: none;
        }
      }

      .summary {
        grid-area: summary;
        display: block;
      }

      .title {
        display: block;
        line-height: 1;
      }

      .content {
        display: block;
      }

      .meta {
        grid-area: meta;
        display: block;
      }

      ::slotted(*) {
        margin-block-start: 0;
      }

      ::slotted(*:last-child) {
        margin-block-end: 0;
      }
    `,
  ];

  @property() type: 'job' | 'freelance' | 'education' | 'project' | 'event' = 'event';
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

  private renderMedia() {
    if (this.asset === undefined) return nothing;
    return html`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" loading="lazy" src="${this.asset}" alt="" />
        <img class="media" loading="lazy" src="${this.asset}" alt="" />
      </div>
    </div>`;
  }

  override render() {
    return html`
      <div class="timeline-zone">
        <span class="year2"><span class="h-sr-only">${this.type} in year </span>${this.endingDate?.getFullYear()}</span>
        <span class="event-tag"></span>
      </div>
      <article class="event">
        ${this.renderMedia()}
        <div class="summary">
          ${this.renderDateRange()}
          <slot name="title" class="title"></slot>
          <slot class="content"></slot>
        </div>
        <slot name="meta" class="meta"></slot>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-life-event': KdLifeEvent;
  }
}
