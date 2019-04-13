/**
@license KhaiPhong new page: mu-app.js, mu-eip.js, app.js, push-manifest.json

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

class MuEIP extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Executive Information Portal</h2>
        <p>Team collaboration by project.</p>
        <p>To be developed as user PersonaAI Command Centre.</p>
      </section>
      <section>
        <h2>ToDos</h2>
        <p>Free ToDos in exploring PersonaAI.</p>
      </section>
      <section>
        <h2>Plan Execution Feedback</h2>
        <p>Free ToDos in exploring PersonaAI.</p>
      </section>
      <section>
        <h3>Edge of The Page</h3>
        <p>General Information.</p>
      </section>
    `;
  }
}

window.customElements.define('mu-eip', MuEIP);
