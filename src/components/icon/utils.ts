import { CSSResult, unsafeCSS } from 'lit';

export function numberToCssContent(number: number) {
  return `\\${number.toString(16)}`;
}

function defaultSelector(key: string) {
  return `:host([icon='${key}'])::before`;
}

function defaultProperties(key: string, value: number) {
  return `content: '${numberToCssContent(value)}';`;
}

export function mapIconsToCss(
  map: Record<string, number>,
  selector: (key: string, value: number) => string = defaultSelector,
  properties: (key: string, value: number) => string = defaultProperties,
): CSSResult {
  return unsafeCSS(
    Object.entries(map)
      .map(([key, value]) => {
        return /*css*/ `${selector(key, value)} { ${properties(key, value)} }`;
      })
      .join(''),
  );
}
