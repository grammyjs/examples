import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import TryWebApp from "../islands/TryWebApp.tsx";

export default define.page(function Home() {
    return (
        <>
            <Head>
                <title>grammY WebApp</title>
            </Head>
            <div class="p-4 mx-auto max-w-screen-md">
                <TryWebApp />
            </div>
        </>
    );
});
