import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { KdBaseElement } from '../base/base-element';

@customElement('kd-attribution')
export class KdAttribution extends KdBaseElement {
  static override styles = [
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: top;
        gap: var(--spacing-md);
        margin-block-end: var(--spacing-sm);
      }

      [role='term'] {
        /* min-inline-size: var(--size-8); */
        display: block;
        /* font-weight: bold; */
        /* font-size: var(--type-body-sm-size); */
        /* line-height: 1.25; */
        text-transform: uppercase;
        opacity: 0.6;
      }

      [role='definition'] {
        display: block;
        font-weight: bold;
      }

      .tags {
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm) var(--spacing-xs);
      }
    `,
  ];

  @property()
  term = '';

  @property()
  definition = '';

  @property()
  type: 'tags' | 'text' = 'tags';

  get tags() {
    if (this.definition.trim().length === 0) {
      return [];
    }

    // split on commas, but ignore commas inside parens
    return this.definition.split(/,(?![^(]*\))/).map(tag => tag.trim());
  }

  override render() {
    return html`
      <span role="term"><slot name="term">${this.term}</slot></span>
      <span role="definition"
        ><slot>
          ${when(
            this.type === 'tags',
            () => html`<span class="tags">${this.tags.map(tag => html`<kd-tag>${tag}</kd-tag> `)}</span>`,
            () => this.definition,
          )}</slot
        ></span
      >
    `;
  }
}
