"use client";

import * as React from "react";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { StarknetProvider } from "@/components/StarknetProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StarknetProvider>
      <Component {...pageProps} />
    </StarknetProvider>
  );
}
