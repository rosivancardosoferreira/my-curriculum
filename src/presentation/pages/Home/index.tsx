import React, { Fragment } from "react";

import {
  Banner,
  AboutMe,
  Skills,
  Portfolio,
  Numbers,
  Footer
} from "presentation/Sections";
import { WhatsApp } from "presentation/Components";

export function Home() {
  return (
    <Fragment>
      <WhatsApp />
      <Banner />
      <AboutMe />
      <Skills />
      <Numbers />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}
