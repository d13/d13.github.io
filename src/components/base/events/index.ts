export type KdBlurEvent = CustomEvent<undefined>;
export type KdFocusEvent = CustomEvent<undefined>;

declare global {
  interface ElementEventMap {
    'kd-blur': KdBlurEvent;
    'kd-focus': KdFocusEvent;
  }
}
