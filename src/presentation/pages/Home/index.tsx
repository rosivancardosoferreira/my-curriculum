import React, { Fragment } from "react";
import Head from "next/head";

import {
  Banner,
  AboutMe,
  Skills,
  Portfolio,
  Numbers,
  Footer
} from "presentation/Sections";
import { NavHeader, WhatsApp } from "presentation/Components";

export function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rosivan Cardoso | Portfólio</title>
      </Head>
      <NavHeader />
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
