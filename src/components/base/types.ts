// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElementConstructor<T = Record<PropertyKey, unknown>> = new (...args: any[]) => T;

export interface InteractiveElement {
  focus(options?: FocusOptions): void;
  blur(): void;
  click(): void;
}

export interface FormAssociatedElement {
  readonly form: HTMLFormElement | null;
  readonly validity: ValidityState;
  readonly validationMessage: string;
  readonly willValidate: boolean;
  name: string;
  type: string;
  disabled: boolean;

  checkValidity(): boolean;
  reportValidity(): boolean;
}

export interface FormControlElement<T> {
  defaultValue: T;
  value: T;
  setCustomValidity(message: string): void;
}
