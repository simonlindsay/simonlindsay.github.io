import { html, render } from "https://unpkg.com/lit-html?module";

class SimoProjectTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template() {
    return html`
      <link href="../styles/base.css" rel="stylesheet">
      <link href="../styles/variables.css" rel="stylesheet">
      <style>
        :host {
          display: block;
          padding: 0;
          margin: 0 0 10px 0;
        }
        h1 {
          color: var(--color-gunpowder);
        }
        :host(:hover) {
          background-color: black;
        }
        :host(:hover) h1 {
          color: white;
        }
      </style>
      <a href="/ssense.html"><h1><slot>Project Title</slot></h1></a>
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

window.customElements.define("simo-project-title", SimoProjectTitle);
