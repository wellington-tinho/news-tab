import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function S2() {
  return (
    <>
      <Head>
        <title>❤️ Sabia</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="container text-center pt-5">
        <Image
          src="/images/coxinha.gif"
          alt="Coxinha fazendo coração"
          width={500}
          height={500}
        />
        <h2 className="mt-5">Nunca desconfiei disso. s2</h2>
      </div>
    </>
  );
}
