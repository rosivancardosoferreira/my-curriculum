import Head from "next/head";
import React from "react";

import { Home } from "../presentation/pages";

export default function Index() {
  return (
    <>
      <Head>
        <title>Rosivan Cardoso | Portfólio</title>
        <meta
          name="image"
          content="https://rosivan-cardoso.vercel.app/static/images/photo_profile.webp"
        />
        <meta
          name="image"
          property="og:image"
          content="https://rosivan-cardoso.vercel.app/static/images/photo_profile.webp"
        />
        <meta
          name="description"
          property="og:description"
          content="Opa, Rosivan Cardoso aqui, este é meu website de apresentação.
            Criei este website para mostrar um pouco do meu trabalho."
        />
        <meta name="author" content="Rosivan Cardoso Ferreira" />
      </Head>
      <Home />
    </>
  );
}
