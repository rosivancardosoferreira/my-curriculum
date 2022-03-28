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
import { Images } from "assets/images";

export function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rosivan Cardoso | Portfólio</title>
        <meta property="og:image" content={Images.Profile.src} />
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
