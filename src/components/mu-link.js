/**
@license KhaiPhong
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MuLink extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Inner Circle</h2>
        <p>Real time communications and collaborations.</p>
        <p>To be developed as user PersonaAI Command Centre.</p>
      </section>
      <section>
        <h2>Subscriber to #</h2>
        <p>Start your communication.</p>
      </section>
      <section>
        <h2>Planning to #</h2>
        <p>Start your communication.</p>
      </section>
      <section>
        <h3>Edge of The Page</h3>
        <p>General Information.</p>
      </section>
    `;
  }
}

window.customElements.define('mu-link', MuLink);
