import { define } from "../utils.ts";
import InitializeWebApp from "../islands/InitializeWebApp.tsx";

export default define.page(function App({ Component }) {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <script src="https://telegram.org/js/telegram-web-app.js">
                </script>
            </head>
            <body>
                <InitializeWebApp />
                <Component />
            </body>
        </html>
    );
});
