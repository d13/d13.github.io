import type { CSSResult } from 'lit';

export function litToStyleSheet(...cssResults: CSSResult[]): CSSStyleSheet[] {
  const styleSheets: CSSStyleSheet[] = [];
  for (const cssResult of cssResults) {
    if (!cssResult.styleSheet) {
      continue;
    }
    styleSheets.push(cssResult.styleSheet);
  }
  return styleSheets;
}
