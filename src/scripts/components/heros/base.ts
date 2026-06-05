import { css, html, LitElement, type TemplateResult } from 'lit';
import { range } from 'lit/directives/range.js';
import { repeat } from 'lit/directives/repeat.js';

const mouseGrid = Array.from(range(-6, 7, 1)); // -3, 4
const mouseGridSize = mouseGrid.length;

export abstract class HeroImageBase extends LitElement {
  static override styles = [
    css`
      :host {
        --d-hero-image-offset-y: 0; /* -10%; */

        display: block;
      }

      * {
        box-sizing: border-box;
      }

      .hero-image {
        --d-hero-image-mouse-offset-x: 0;
        --d-hero-image-mouse-offset-y: 0;
        --d-hero-image-mouse-offset-distance: 3%;
        --d-hero-image-mouse-rotate-distance: 5deg;

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
        block-size: 100%;
        overflow: hidden;
      }

      svg {
        display: block;
        inline-size: 100%;
        block-size: 100%;
        margin-inline: auto;
        transform: translateY(var(--d-hero-image-offset-y));
        transform-origin: center center;
      }

      .mouse-grid {
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        display: grid;
        grid-template-rows: repeat(${mouseGridSize}, 1fr);
        grid-template-columns: repeat(${mouseGridSize}, 1fr);
        gap: 1px;
        inline-size: 100%;
        block-size: 100%;
      }

      @media (prefers-reduced-motion: reduce) {
        .mouse-grid {
          display: none;
        }
      }
    `,
    ...mouseGrid.map(
      (val, i) =>
        // Can't use `:host(:has(.mouse-grid .x${i}))` yet: https://chromestatus.com/feature/5658105834373120
        css`
          .hero-image:has(.x${i}:hover) {
            --d-hero-image-mouse-offset-x: ${val};
          }

          .hero-image:has(.y${i}:hover) {
            --d-hero-image-mouse-offset-y: ${val};
          }
        `,
    ),
    css`
      [fill='#BEBFC1'],
      [fill='#6B6E71'] {
        fill: var(--color-raw-neutral-50);
      }

      [fill='#2A84E6'] {
        fill: var(--color-raw-blue-50);
      }

      [fill='#D32429'] {
        fill: var(--color-raw-red-50);
      }

      [fill='#A8344B'] {
        fill: var(--color-raw-red-30);
      }

      [fill='#1E5A9D'] {
        fill: var(--color-raw-blue-30);
      }

      :host-context([data-scheme='auto']),
      :host-context([data-scheme='light']) {
        [fill='#181C21'] {
          fill: var(--color-raw-neutral-10);
        }

        [stroke='#181C21'] {
          stroke: var(--color-raw-neutral-10);
        }
      }

      @media (prefers-color-scheme: dark) {
        :host-context([data-scheme='auto']) {
          [fill='#181C21'] {
            fill: var(--color-raw-neutral-70);
          }

          [stroke='#181C21'] {
            stroke: var(--color-raw-neutral-70);
          }
        }
      }

      :host-context([data-scheme='dark']) {
        [fill='#181C21'] {
          fill: var(--color-raw-neutral-70);
        }

        [stroke='#181C21'] {
          stroke: var(--color-raw-neutral-70);
        }
      }

      svg g {
        transform-origin: center center;
        transition: transform 0.5s;
      }

      @media (prefers-reduced-motion: no-preference) {
        #svg-layer-filled {
          /* transform: translate(
  calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
  calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
); */
          transform: translate(
              calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
              calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }

        #svg-layer-outlined {
          /* transform: translate(
  calc(var(--d-hero-image-mouse-offset-x) * -1 * var(--d-hero-image-mouse-offset-distance)),
  calc(var(--d-hero-image-mouse-offset-y) * -1 * var(--d-hero-image-mouse-offset-distance))
); */
          transform: translate(
              calc((var(--d-hero-image-mouse-offset-x) * 0.75) * var(--d-hero-image-mouse-offset-distance)),
              calc((var(--d-hero-image-mouse-offset-y) * 0.75) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }
      }
    `,
  ];

  override render() {
    return html`<div class="hero-image">${this.renderMedia()}${this.renderMouseGrid()}</div>`;
  }

  private renderMouseGrid() {
    // Create a grid of divs that have classes to indicate the mouse position for x{column} and y{row}
    return html`<div class="mouse-grid">
      ${repeat(
        Array.from({ length: mouseGridSize ** 2 }),
        (_, i) => html`<div class="x${i % mouseGridSize} y${Math.floor(i / mouseGridSize)}"></div>`,
      )}
    </div>`;
  }

  protected abstract renderMedia(): TemplateResult;
}
