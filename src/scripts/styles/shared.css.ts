import { css } from 'lit';

export const linkStyles = css`
  @layer base.normalize {
    :where(a) {
      color: var(--color-link-foreground);
    }

    :where(a:visited) {
      color: var(--color-link-visited-foreground);
    }

    :where(a:hover) {
      color: var(--color-link-hover-foreground);
    }
  }
`;

export const a11yStyles = css`
  @layer overrides.a11y {
    :where(.o-sr-only, .o-sr-only-focusable:not(:focus, :focus-within)) {
      position: absolute !important;
      inline-size: 1px !important;
      block-size: 1px !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
    }
  }
`;
