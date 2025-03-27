"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow-x: hidden; 
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  }

  * {
    box-sizing: border-box;
    max-width: 100vw; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
