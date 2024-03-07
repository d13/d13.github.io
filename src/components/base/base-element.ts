import { LitElement } from 'lit';
import { Disposable } from '../../system/disposable';

export type Unwrapped<T> = T extends CustomEvent<infer D> ? D : undefined;
export type KdEventName<Prefix extends string = ''> = `kd-${Prefix}${string}`;
export type KdEventMap<Prefix extends string = ''> = Record<KdEventName<Prefix>, CustomEvent>;

// hack to get around "Type 'ElementEventMap' is not generic." error
type EventMapWithGeneric<K extends keyof ElementEventMap> = ElementEventMap[K];

export type KdEvents<Prefix extends string = ''> = {
  [K in Extract<keyof ElementEventMap, KdEventName<Prefix>>]: EventMapWithGeneric<K>;
};

export class KdBaseElement<Events extends KdEventMap = KdEvents> extends LitElement {
  protected _disposables: Disposable[] = [];

  override disconnectedCallback() {
    super.disconnectedCallback();

    for (const disposable of this._disposables) {
      disposable.dispose();
    }
  }

  protected fireEvent<T extends string & keyof Events>(name: T, detail?: Unwrapped<Events[T]>): boolean {
    type CustomEventDetail = Unwrapped<Events[T]>;
    let event: CustomEvent;
    if (detail === undefined) {
      event = new CustomEvent<CustomEventDetail>(name);
    } else {
      event = new CustomEvent<CustomEventDetail>(name, { detail });
    }
    return this.dispatchEvent(event);
  }
}
