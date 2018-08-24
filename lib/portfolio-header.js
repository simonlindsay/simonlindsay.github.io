import { html, render } from "https://unpkg.com/lit-html?module";
import "./simo-header.js";

class PortfolioHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template() {
    return html`
      <link href="../styles/base.css" rel="stylesheet">
      <style>
        :host {
          display: block;
          margin: var(--spacing-2);
        }
        nav {
          height: auto;
        }
        p {
          margin: 0;
          padding: 0;
        }
      </style>
      <simo-header>
        <nav title="nav">
          <a href="/">&larr; Home</a>
        </nav>
        <p>Simon Lindsay / Front-end Developer / San Francisco, CA</p>
      </simo-header>
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

window.customElements.define("portfolio-header", PortfolioHeader);
