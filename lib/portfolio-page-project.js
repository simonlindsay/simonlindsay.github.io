import { html, render } from "https://unpkg.com/lit-html?module";
import "./portfolio-header.js";
import "./simo-project-title.js";

class PortfolioPageProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template() {
    return html`
      <link href="../styles/base.css" rel="stylesheet">
      <portfolio-header></portfolio-header>
      <main>
        <br/>
        <p>&mdash;&mdash;&mdash;</p>
        <br/>
        <h1 style="font-size: 1vw">SSENSE</h1>
        <p style="width: 50%;">SSENSE  Editorial Site, featuring highly customized article layouts and dynamic homepage. Built using a decoupled VueJS SPA frontend with Wordpress API Backend.</p>
        <br />
        <br/>
        <p><img src="https://payload29.cargocollective.com/1/0/4314/2886359/-en-us-editorial-fashion-your-one-size-fits-all-future-1440x1200_1600_c.png" /></p>

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

window.customElements.define("portfolio-page-project", PortfolioPageProject);
