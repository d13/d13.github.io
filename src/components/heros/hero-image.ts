import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { repeat } from 'lit/directives/repeat.js';

const mouseGrid = Array.from(range(-6, 7, 1)); // -3, 4
const mouseGridSize = mouseGrid.length;

@customElement('d-hero-image')
export class HeroImage extends LitElement {
  static override styles = [
    css`
      :host {
        --d-hero-image-offset-y: 0; /* -10%; */
        display: block;
      }
      * {
        box-sizing: border-box;
      }

      .hero-image {
        --d-hero-image-mouse-offset-x: 0;
        --d-hero-image-mouse-offset-y: 0;
        --d-hero-image-mouse-offset-distance: 3%;
        --d-hero-image-mouse-rotate-distance: 5deg;
        position: relative;
        inline-size: 100%;
        block-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      svg {
        display: block;
        inline-size: 100%;
        /* height: auto; */
        margin-inline: auto;
        transform: translateY(var(--d-hero-image-offset-y));
        transform-origin: center center;
      }

      .mouse-grid {
        display: grid;
        grid-template-columns: repeat(${mouseGridSize}, 1fr);
        grid-template-rows: repeat(${mouseGridSize}, 1fr);
        gap: 1px;
        inline-size: 100%;
        block-size: 100%;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
      }
      @media (prefers-reduced-motion: reduce) {
        .mouse-grid {
          display: none;
        }
      }
    `,
    ...mouseGrid.map(
      (val, i) =>
        // Can't use `:host(:has(.mouse-grid .x${i}))` yet: https://chromestatus.com/feature/5658105834373120
        css`
          .hero-image:has(.x${i}:hover) {
            --d-hero-image-mouse-offset-x: ${val};
          }
          .hero-image:has(.y${i}:hover) {
            --d-hero-image-mouse-offset-y: ${val};
          }
        `,
    ),
    css`
      svg g {
        transform-origin: center center;
        transition: transform 0.5s;
      }

      @media (prefers-reduced-motion: no-preference) {
        #svg-layer-filled {
          /* transform: translate(
          calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
          calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
        ); */
          transform: translate(
              calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
              calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }

        #svg-layer-outlined {
          /* transform: translate(
          calc(var(--d-hero-image-mouse-offset-x) * -1 * var(--d-hero-image-mouse-offset-distance)),
          calc(var(--d-hero-image-mouse-offset-y) * -1 * var(--d-hero-image-mouse-offset-distance))
        ); */
          transform: translate(
              calc((var(--d-hero-image-mouse-offset-x) * 0.75) * var(--d-hero-image-mouse-offset-distance)),
              calc((var(--d-hero-image-mouse-offset-y) * 0.75) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }
      }
    `,
  ];

  override render() {
    // return html`<div class="hero-image">${this.renderMedia()}</div>`;
    return html`<div class="hero-image">${this.renderMedia()}${this.renderMouseGrid()}</div>`;
  }

  private renderMouseGrid() {
    // Create a grid of divs that have classes to indicate the mouse position for x{column} and y{row}
    return html`<div class="mouse-grid">
      ${repeat(
        Array.from({ length: mouseGridSize ** 2 }),
        (_, i) => html`<div class="x${i % mouseGridSize} y${Math.floor(i / mouseGridSize)}"></div>`,
      )}
    </div>`;
  }

  private renderMedia() {
    // prettier-ignore
    return html`
<svg width="1364" height="1314" viewBox="0 0 1364 1314" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="svg-layer-filled">
<path d="M382 932.995C382 933.801 282 833.334 232 783H532C482 832.663 382 932.19 382 932.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M532 783.005C532 782.199 632 882.666 682 933L382 933C432 883.337 532 783.81 532 783.005Z" fill="#2A84E6" stroke="#181C21"/>
<path d="M232 782.995C232 783.801 132 683.334 82 633H382C332 682.663 232 782.19 232 782.995Z" fill="#181C21" fill-opacity="0.5" stroke="#181C21"/>
<path d="M231.995 484C232.801 484 132.334 584 82 634L82 334C131.663 384 231.19 484 231.995 484Z" fill="#D32429" stroke="#181C21"/>
<path d="M232 483.995C232 484.801 132 384.334 82 334H382C332 383.663 232 483.19 232 483.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M382 333.995C382 334.801 282 234.334 232 184H532C482 233.663 382 333.19 382 333.995Z" fill="#181C21" stroke="#181C21"/>
<path d="M532 183.995C532 184.801 432 84.334 382 34H682C632 83.6628 532 183.19 532 183.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M912 1283C912 1283.8 812 1183.33 762 1133H1062C1012 1182.66 912 1282.19 912 1283Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M1064 1133C1064 1133.8 964 1033.33 914 983H1214C1164 1032.66 1064 1132.19 1064 1133Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M1212 983.995C1212 984.801 1112 884.334 1062 834H1362C1312 883.663 1212 983.19 1212 983.995Z" fill="#181C21" fill-opacity="0.5" stroke="#181C21"/>
<path d="M1062 833.995C1062 834.801 962 734.334 912 684H1212C1162 733.663 1062 833.19 1062 833.995Z" fill="#A8344B" stroke="#181C21"/>
<path d="M912 683.995C912 684.801 812 584.334 762 534H1062C1012 583.663 912 683.19 912 683.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M762 533.995C762 534.801 662 434.334 612 384H912C862 433.663 762 533.19 762 533.995Z" fill="#1E5A9D" stroke="#181C21"/>
</g>
<g id="svg-layer-outlined" opacity="0.4">
<path d="M2 301L301.5 1.5H601.5L152.5 450.5L601 899H301.5L2 599.5V301Z" stroke="#181C21"/>
<path d="M302 899.995C302 900.801 202 800.334 152 750H452C402 799.663 302 899.19 302 899.995Z" stroke="#181C21"/>
<path d="M152 749.995C152 750.801 52 650.334 2 600H302C252 649.663 152 749.19 152 749.995Z" stroke="#181C21"/>
<path d="M151.995 451C152.801 451 52.334 551 2 601L1.99999 301C51.6628 351 151.19 451 151.995 451Z" stroke="#181C21"/>
<path d="M152 450.995C152 451.801 52 351.334 2 301H302C252 350.663 152 450.19 152 450.995Z" stroke="#181C21"/>
<path d="M302 300.995C302 301.801 202 201.334 152 151H452C402 200.663 302 300.19 302 300.995Z" stroke="#181C21"/>
<path d="M452 150.995C452 151.801 352 51.334 302 1H602C552 50.6628 452 150.19 452 150.995Z" stroke="#181C21"/>
<path d="M982.5 864L532.5 414.5H833.5L1282.5 863.5L833.5 1311.5H536L982.5 864Z" stroke="#181C21"/>
<path d="M832 1313C832 1313.8 732 1213.33 682 1163H982C932 1212.66 832 1312.19 832 1313Z" stroke="#181C21"/>
<path d="M984 1163C984 1163.8 884 1063.33 834 1013H1134C1084 1062.66 984 1162.19 984 1163Z" stroke="#181C21"/>
<path d="M1132 1014C1132 1014.8 1032 914.334 982 864H1282C1232 913.663 1132 1013.19 1132 1014Z" stroke="#181C21"/>
<path d="M982 863.995C982 864.801 882 764.334 832 714H1132C1082 763.663 982 863.19 982 863.995Z" stroke="#181C21"/>
<path d="M832 713.995C832 714.801 732 614.334 682 564H982C932 613.663 832 713.19 832 713.995Z" stroke="#181C21"/>
<path d="M682 563.995C682 564.801 582 464.334 532 414H832C782 463.663 682 563.19 682 563.995Z" stroke="#181C21"/>
</g>
</svg>
    `;
  }
}
