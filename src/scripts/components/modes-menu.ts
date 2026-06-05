import { html, LitElement, nothing, type TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

type Scheme = 'light' | 'dark' | 'auto';
type Accent = 'blue' | 'red' | 'mix';

const STORAGE_SCHEME = 'd13:scheme';
const STORAGE_ACCENT = 'd13:accent';

const SCHEMES: readonly Scheme[] = ['light', 'dark', 'auto'];
const ACCENTS: readonly Accent[] = ['blue', 'red', 'mix'];

function isScheme(value: string | undefined): value is Scheme {
  return value != null && (SCHEMES as readonly string[]).includes(value);
}

function isAccent(value: string | undefined): value is Accent {
  return value != null && (ACCENTS as readonly string[]).includes(value);
}

@customElement('d-modes-menu')
export class ModesMenu extends LitElement {
  // Render in light DOM so the trigger inherits header-nav button styles
  // and the popover content uses site tokens directly.
  protected override createRenderRoot(): HTMLElement {
    return this;
  }

  @state() private scheme: Scheme = 'auto';
  @state() private accent: Accent = 'mix';
  @state() private open = false;

  @query('.modes-popover') private popoverEl?: HTMLElement;

  override connectedCallback(): void {
    super.connectedCallback();
    const root = document.documentElement;
    this.scheme = isScheme(root.dataset.scheme) ? root.dataset.scheme : 'auto';
    this.accent = isAccent(root.dataset.accent) ? root.dataset.accent : 'mix';
  }

  override render(): TemplateResult {
    return html`
      <button
        type="button"
        class="modes-trigger"
        aria-haspopup="dialog"
        aria-expanded=${this.open ? 'true' : 'false'}
        @click=${this.onTriggerClick}
      >
        <span class="dot"></span>Modes
      </button>
      <div
        class="modes-popover"
        popover="auto"
        role="dialog"
        aria-label="Theme settings"
        @toggle=${this.onPopoverToggle}
      >
        ${this.renderGroup('Scheme', 'scheme', SCHEMES, this.scheme)}
        ${this.renderGroup('Accent', 'accent', ACCENTS, this.accent)}
      </div>
    `;
  }

  private renderGroup(
    legend: string,
    name: 'scheme' | 'accent',
    options: readonly string[],
    current: string,
  ): TemplateResult {
    return html`
      <fieldset class="modes-group">
        <legend class="modes-group__legend eyebrow">${legend}</legend>
        <div class="toggle-group">
          ${options.map(
            value => html`
              <label class="toggle">
                <input
                  type="radio"
                  .name=${`modes-${name}`}
                  .value=${value}
                  ?checked=${value === current}
                  @change=${name === 'scheme' ? this.onSchemeChange : this.onAccentChange}
                />
                <span>${value}</span>
              </label>
            `,
          )}
        </div>
      </fieldset>
    `;
  }

  private onTriggerClick = (): void => {
    this.popoverEl?.togglePopover();
  };

  private onPopoverToggle = (event: Event): void => {
    const e = event as ToggleEvent;
    this.open = e.newState === 'open';
  };

  private onSchemeChange = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    if (!isScheme(input.value)) return;
    this.scheme = input.value;
    document.documentElement.dataset.scheme = input.value;
    try {
      localStorage.setItem(STORAGE_SCHEME, input.value);
    } catch {
      /* storage may be unavailable (private mode, etc.) */
      void nothing;
    }
  };

  private onAccentChange = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    if (!isAccent(input.value)) return;
    this.accent = input.value;
    document.documentElement.dataset.accent = input.value;
    try {
      localStorage.setItem(STORAGE_ACCENT, input.value);
    } catch {
      void nothing;
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'd-modes-menu': ModesMenu;
  }
}
