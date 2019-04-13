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

class MuChat extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Chat</h2>
        <p>Real time communications and collaborations.</p>
        <p>To be developed as user PersonaAI Command Centre.</p>
      </section>
      <section>
        <h2>Connected Circles</h2>
        <p>Start your communication.</p>
      </section>
      <section>
        <h2>Connected Graphs</h2>
        <p>Start your communication.</p>
      </section>
      <section>
        <h4>Edge of The Page</h4>
        <p>Relationship Building</p>
      </section>
    `;
  }
}

window.customElements.define('mu-chat', MuChat);
