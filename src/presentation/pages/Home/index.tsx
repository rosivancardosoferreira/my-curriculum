import React, { Fragment } from "react";

import {
  Banner,
  AboutMe,
  Skills,
  Experience,
  Portfolio,
  Numbers
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
    </Fragment>
  );
}
