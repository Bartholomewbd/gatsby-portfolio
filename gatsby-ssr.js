import React from "react";
export function onRenderBody(
    { setHeadComponents }) {
  setHeadComponents([
       <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />,
        <script 
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
        ,
  ]);
  }