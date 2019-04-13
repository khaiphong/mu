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

class MuGSLP extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>ThankYou Club</h2>
        <p>Your engagements. Head back
           <a href="/">Home RTC</a>.
        </p>
      </section>
      <section>
        <h2>Meetings</h2>
        <p>Schedule your meetings.</p>
      </section>
      <section>
        <h2>Reservations</h2>
        <p>Meeting Room.</p>
      </section>
      <section>
        <h3>Edge of The Page</h3>
        <p>General information</p>
      </section>

    `
  }
}

window.customElements.define('mu-gslp', MuGSLP);
