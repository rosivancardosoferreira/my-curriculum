import React, { Fragment } from "react";

import {
  Banner,
  AboutMe,
  Skills,
  Experience,
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
      <Experience />
      <Numbers />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}
