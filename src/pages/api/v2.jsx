import { Redirect, useHistory } from "@docusaurus/router";
import React from "react";

/**
 * Route to make sure older /api/v2 links work
 */
export default function V2API() {
  const router = useHistory();

  return (
    <Redirect
      to={{
        pathname: "/api",
        search: "v=v2",
        hash: router.location.hash,
      }}
    />
  );
}
