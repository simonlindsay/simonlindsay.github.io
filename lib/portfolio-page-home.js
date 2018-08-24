import { html, render } from "https://unpkg.com/lit-html?module";
import "./portfolio-header.js";
import "./simo-project-title.js";

class PortfolioPageHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template() {
    return html`
      <link href="../styles/base.css" rel="stylesheet">
      <style>
        main::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: -1;
          opacity: 0.05;
          // background-image: url("https://payload29.cargocollective.com/1/0/4314/2886359/-en-us-editorial-fashion-your-one-size-fits-all-future-1440x1200_1600_c.png");
          background-position: center center;
        }
      </style>
      <portfolio-header></portfolio-header>
      <main>
        <br/>
        <p>&mdash;&mdash;&mdash;</p>
        <br/>
        <slot></slot>
      </main>
    `;
  }
  /**
   * `connectedCallback()` fires when the element is inserted into the DOM.
   * It's a good place to set the initial `role`, `tabindex`, internal state,
   * and install event listeners.
   */
  connectedCallback() {
    render(this.template(), this.shadowRoot);
  }
  /**
   * `disconnectedCallback()` unregisters the event listeners that were set up
   * in `connectedCallback()`.
   */
  disconnectedCallback() {}
}

window.customElements.define("portfolio-page-home", PortfolioPageHome);
