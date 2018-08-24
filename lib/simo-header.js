import { html, render } from "https://unpkg.com/lit-html?module";

class SimoHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template() {
    return html`
      <link href="../styles/base.css" rel="stylesheet">
      <style>
        :host {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      </style>
      <slot name="nav"></slot>
      <slot></slot>
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

window.customElements.define("simo-header", SimoHeader);
