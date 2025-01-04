import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Providers } from "./providers";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import { deleteTest, getTests } from "./data";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Pacifico&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap",
  },
];

// export const action = async ({ params, request }: ActionFunctionArgs) => {
//   const tests = await getTests();

//   await deleteTest();
//   return redirect("/");
// };

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Providers>
          <NavigationBar />
          {children}
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
