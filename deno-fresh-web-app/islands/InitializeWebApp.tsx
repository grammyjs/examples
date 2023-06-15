import { useEffect } from "preact/hooks";
import { telegramWebApp } from "$utils/webapp.ts";

const InitializeWebApp = () => {
  useEffect(() => {
    if (telegramWebApp.webApp) {
      telegramWebApp.webApp.ready();
    }
  }, []);

  return <></>;
};

export default InitializeWebApp;
