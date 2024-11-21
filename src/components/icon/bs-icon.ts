import { customElement, property } from 'lit/decorators.js';
import iconMap from 'bootstrap-icons/font/bootstrap-icons.json';
import { css } from 'lit';
import { KdBaseElement } from '../base/base-element';
import { iconBase } from './icon.css';
import { mapIconsToCss } from './utils';

@customElement('kd-bs-icon')
export class KdBsIcon extends KdBaseElement {
  static override styles = [
    iconBase,
    css`
      :host {
        font-family: bootstrap-icons !important;
      }

      :host::before {
        vertical-align: -0.125em;
      }

      ${mapIconsToCss(iconMap)}
    `,
  ];

  @property({ type: String })
  icon!: keyof typeof iconMap;
}
