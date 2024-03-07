import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { KdEvents } from 'src/components/base/base-element';
import { KdInteractiveElement } from '../base/interactive-element';
import '../icon/bs-icon';

// TODO: will need to investigate high contrast preferences
type Modes = 'light' | 'dark';

@customElement('kd-mode-switcher')
export class KdModeSwitcher extends KdInteractiveElement<KdEvents<'mode-switcher'>> {
  static override styles = [
    css`
      :host {
        display: contents;
      }

      :host * {
        box-sizing: border-box;
      }

      .button {
        appearance: none;
        display: inline-flex;
        padding: 0; /* padding: var(--spacing-xs) var(--spacing-md); */
        color: var(--color-action-hover-background);
        background-color: transparent;
        border: 1px solid transparent;
        transition: background-color 0.2s ease;
        text-align: center;
        cursor: pointer;
      }

      .light,
      .dark {
        aspect-ratio: 1;
        inline-size: var(--size-1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transition: color 0.2s ease;
      }

      .dark {
        margin-inline-start: calc(var(--spacing-xs) * -1);
      }

      :host([mode='light']) .light,
      :host([mode='dark']) .dark {
        z-index: 2;
        color: var(--color-primary-foreground);
      }

      .dot {
        position: absolute;
        inline-size: var(--size-1);
        aspect-ratio: 1;
        background-color: var(--color-action-hover-background);
        border-radius: 50%;
        transition: transform 0.2s ease;
      }

      :host([mode='dark']) .dot {
        transform: translateX(calc(var(--size-1) - var(--spacing-xs)));
      }
    `,
  ];

  @query('.button', true)
  protected _control!: HTMLButtonElement;

  private _mode: Modes = 'light';
  @property({ type: String, reflect: true })
  get mode() {
    return this._mode;
  }
  set mode(value: Modes) {
    const old = this._mode;
    this._mode = value;
    this.requestUpdate('mode', old);
    this.updateMode();
  }

  get preferredMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  constructor() {
    super();
    this.mode = this.preferredMode;
  }

  private updateMode() {
    const label = `Switch to ${this.mode === 'light' ? 'dark' : 'light'} mode`;
    this._control?.setAttribute('aria-label', label);
    this._control?.setAttribute('title', label);
    // this.dispatchEvent(
    //   new CustomEvent('kd-mode-changed', {
    //     detail: { mode: this.mode },
    //   }),
    // );
    this.fireEvent('kd-mode-switcher-changed', { mode: this.mode });

    document.documentElement.dataset.mode = this.mode;
  }

  override render() {
    return html`<button class="button" @click=${this.onClick.bind(this)}>
      <span class="light"><kd-bs-icon icon="sun"></kd-bs-icon></span>
      <span class="dark"><kd-bs-icon icon="moon"></kd-bs-icon></span>
      <span class="dot"></span>
    </button>`;
  }

  private onClick() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-mode-switcher': KdModeSwitcher;
  }

  interface ElementEventMap {
    'kd-mode-switcher-changed': CustomEvent<{ mode: Modes }>;
  }
}
