import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";
import Footer from "@theme-original/Footer";
import React from "react";

export default function FooterWrapper(props) {
  const { pathname } = useLocation();

  return (
    <>
      <Footer {...props} />
    </>
  );
}
