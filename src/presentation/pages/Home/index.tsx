import React, { Fragment } from "react";

import {
  Banner,
  AboutMe,
  Skills,
  Experience,
  Portfolio
} from "presentation/Sections";

export function Home() {
  return (
    <Fragment>
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
    </Fragment>
  );
}
