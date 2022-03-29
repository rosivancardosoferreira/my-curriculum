import Head from "next/head";
import React from "react";

import { Home } from "../presentation/pages";
import { Images } from "assets/images";

export default function Index() {
  const metatags = {
    title: "Rosivan Cardoso | Portfólio",
    description:
      "Opa, Rosivan Cardoso aqui, este é meu website de apresentação. Criei este website para mostrar um pouco do meu trabalho.",
    image: Images.Banner.src,
    url: "https://rosivan-cardoso.vercel.app"
  };
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{metatags.title}</title>
        <meta name="description" content={metatags.description} />

        {/* LINKEDIN */}
        <meta property="og:title" content={metatags.title} />
        <meta property="og:image" content={metatags.image} />
        <meta property="og:description" content={metatags.description} />
        <meta property="og:url" content={metatags.url} />

        {/* GOOGLE */}
        <meta itemProp="name" content={metatags.title} />
        <meta itemProp="description" content={metatags.description} />
        <meta itemProp="image" content={metatags.image} />

        {/* FACEBOOK */}
        <meta property="og:url" content={metatags.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metatags.title} />
        <meta property="og:description" content={metatags.description} />
        <meta property="og:image" content={metatags.image} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content={metatags.image} />
        <meta name="twitter:title" content={metatags.title} />
        <meta name="twitter:description" content={metatags.description} />
        <meta name="twitter:image" content={metatags.image} />
      </Head>
      <Home />
    </>
  );
}
