import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import React from "react";
import styles from "./styles.module.css";

function LogoImage({ logo }) {
  const { withBaseUrl } = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  };
  return (
    <ThemedImage
      className="footer__logo h-9"
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
    />
  );
}

export default function FooterLogo({ logo }) {
  return logo.href
    ? (
      <Link href={logo.href} className={styles.footerLogoLink}>
        <LogoImage logo={logo} />
      </Link>
    )
    : <LogoImage logo={logo} />;
}
