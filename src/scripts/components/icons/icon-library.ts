import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as icons from './icons';

@customElement('d-icon-library')
export class IconLibrary extends LitElement {
  static icons = {
    close: icons.close,
    envelope: icons.mail,
    github: icons.gitHubInverted,
    'link-external': icons.linkExternal,
    'arrow-up': icons.arrowUp,
  };

  static override styles = [
    css`
      :host {
        display: contents;
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
        inline-size: 1em;
        aspect-ratio: 1;
      }
      .icon svg {
        vertical-align: middle;
        inline-size: 100%;
        block-size: 100%;
      }
    `,
  ];

  @property({ type: String })
  icon?: string; // keyof typeof IconLibrary.icons;

  override render() {
    return html`<span class="icon"
      >${
        // @ts-expect-error - Ignoring index signature error
        IconLibrary.icons[this.icon ?? 'link-external'] ?? IconLibrary.icons['link-external']
      }</span
    >`;
  }
}
