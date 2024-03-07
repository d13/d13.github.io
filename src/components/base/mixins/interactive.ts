import { LitElement } from 'lit';
import { ElementConstructor, InteractiveElement } from '../types';

export function Interactive<T extends ElementConstructor<LitElement>>(
  constructor: T,
): T & ElementConstructor<InteractiveElement> {
  return class extends constructor implements InteractiveElement {
    static shadowRootOptions: ShadowRootInit = {
      ...(constructor as unknown as typeof LitElement).shadowRootOptions,
      delegatesFocus: true,
    };

    protected _control!: HTMLElement;

    override focus(options?: FocusOptions) {
      this._control.focus(options);
    }

    override blur() {
      this._control.blur();
    }

    override click() {
      this._control.click();
    }
  };
}
