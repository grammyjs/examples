import { useEffect } from "preact/hooks";

import { telegramWebApp } from "$utils/webapp.ts";

const TryWebApp = () => {
  useEffect(() => {
    // if (telegramWebApp.webApp) {
    telegramWebApp.webApp.MainButton.show();
    telegramWebApp.webApp.MainButton.setText("Hello");
    // }
  }, []);

  return (
    <>
      <div>{JSON.stringify({ user: telegramWebApp.user }, null, 2)}</div>
    </>
  );
};

export default TryWebApp;
