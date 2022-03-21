import React, { Fragment } from "react";

import {
  Banner,
  AboutMe,
  Skills,
  Portfolio,
  Numbers,
  Footer
} from "presentation/Sections";

export function Home() {
  return (
    <Fragment>
      <Banner />
      <AboutMe />
      <Skills />
      <Numbers />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}
