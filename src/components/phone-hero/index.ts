import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { KdBaseElement } from '../base/base-element';

@customElement('kd-phone-hero')
export class KdPhoneHero extends KdBaseElement {
  static override styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    :host {
      --kd-phone-hero-block-offset: 30vh;
      --kd-phone-hero-content-width: 80;
      --kd-phone-hero-content-gap: 20px;
      display: block;
      contain: content;
      height: 100%;
      background-image: none;

      will-change: contents;
    }

    @media (max-width: 623px) {
      :host::before {
        position: absolute;
        left: 0;
        top: 0;
        inline-size: 100%;
        block-size: 100%;
        content: '';
        display: block;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% auto;
        background-position: left 50% top 50vh;
        background-image: var(--kd-phone-hero-background-image, none);
        opacity: 0.3;
        z-index: -1;
      }
    }

    @media (min-width: 480px) {
      :host {
        --kd-phone-hero-block-offset: 30vh;
        --kd-phone-hero-content-width: 70;
      }
    }

    @media (min-width: 624px) {
      :host {
        --kd-phone-hero-content-width: 60;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: auto 100%;
        background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
          bottom calc(-1 * var(--kd-phone-hero-block-offset));
        background-image: var(--kd-phone-hero-background-image, none);
        animation-name: phone-home;
        animation-duration: 0.65s;
      }
    }

    @media (min-width: 768px) {
      :host {
        --kd-phone-hero-content-width: 50;
      }
    }

    @keyframes phone-home {
      from {
        background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
          bottom -100vh;
      }

      to {
        background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
          bottom calc(-1 * var(--kd-phone-hero-block-offset));
      }
    }

    .container {
      display: flex;
      height: 100%;
      max-width: 900px;
      margin-inline: auto;
      padding-block-start: calc(0.4 * var(--kd-phone-hero-block-offset));
      padding-inline: var(--spacing-md);
    }

    @media (min-width: 624px) {
      .container {
        padding-block-start: var(--kd-phone-hero-block-offset);
      }
    }

    .content {
      display: block;
    }

    @media (min-width: 624px) {
      .content {
        max-inline-size: calc(var(--kd-phone-hero-content-width) * 1%);
      }
    }
  `;

  @property({ type: String })
  src?: HTMLImageElement['src'];

  protected override updated() {
    if (this.src) {
      this.style.setProperty('--kd-phone-hero-background-image', `url(${this.src})`);
    }
  }

  override render() {
    return html`<div class="container"><slot class="content"></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-phone-hero': KdPhoneHero;
  }
}
