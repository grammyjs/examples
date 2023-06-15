// routes/_app.tsx

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import InitializeWebApp from "../islands/InitializeWebApp.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <InitializeWebApp />
      <Component />
    </>
  );
}
