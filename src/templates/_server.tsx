import * as ReactDOMServer from "react-dom/server";
import { PageContext } from "@yext/pages";
import { Auth0Provider } from "@auth0/auth0-react";

export { render };

const render = async (pageContext: PageContext<any>) => {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    // <Auth0Provider
    //   domain="dev-u3433rooy5m6eezt.us.auth0.com"
    //   clientId="GF0dafL06NHsW1uSr2IRU840z5I8RP0Z"
    //   authorizationParams={{
    //     redirect_uri: "http://localhost:5173/index.html",
    //   }}
    // >
    <Page {...pageProps} />
    // </Auth0Provider>
  );
  return `<!DOCTYPE html>
    <html lang="<!--app-lang-->">
      <head></head>
      <body>
        <div id="reactele">${viewHtml}</div>
      </body>
    </html>`;
};
