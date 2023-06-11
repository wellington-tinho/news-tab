import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const positionButton = useRef(null);

  function generatePositionButton() {
    positionButton.current.style.top =
      Math.random() * 720 + "px";
    positionButton.current.style.left =
      Math.random() * 1080 + "px";
    positionButton.current.style.position = "absolute";
  }

  return (
    <div>
      <Head>
        <title>Test</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        ></link>
      </Head>

      <fieldset class="border p-2 w-50 mx-auto position-relative">
        <h1>Claudimayra, me ama ?</h1>

        <div class="d-flex justify-content-center ">
          <button
            onClick={() => {
              window.location.href = "/s2";
            }}
            type="button"
            class="btn btn-success btn-lg btn-block"
          >
            {" "}
            Sim
          </button>

          <button
            ref={positionButton}
            type="button"
            class="btn btn-danger btn-lg"
            onMouseOver={generatePositionButton}
            onClick={() => {
              alert(
                "ahh pensou que seria fácil assim ? kkkk, vai ter que responder"
              );
            }}
          >
            Não
          </button>
        </div>
      </fieldset>
    </div>
  );
}
