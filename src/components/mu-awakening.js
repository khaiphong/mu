/**
@license KhaiPhong

DNS link <a href="https://MyBook.mydns.com/">Book</a> connects microservice in
the cloud via streaming to inject on-demand activities and relationships to
Mu <app-nav> container, having serviceworker for its specific notifications
that ride on available facilities of the Mu <app-toolbar> and/or browser
defaults.

Each section is the functional type of the Mu component, whose registered
microservices push notification can ride on public facilities of PersonaAI. 
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MuAwakening extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Wu-Nien Body-Mind Cleaning</h2>
        <p>Specialised professional services.</p>
      </section>
      <section>
        <h2>PrajnaTIP<sup>&#169;&#174;</sup> in Sound</h2>
        <p>Supported and organized by its operator.</p>
      </section>
      <section>
        <h2>PrajnaTIP<sup>&#169;&#174;</sup> in Kindness</h2>
        <p>Specialised professional services.</p>
      </section>
      <section>
        <h4>Edge of The Page</h4>
        <p>General information.</p>
      </section>
    `;
  }
}

window.customElements.define('mu-awakening', MuAwakening);
