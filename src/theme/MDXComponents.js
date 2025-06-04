// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

import { Card, CardSection } from "../components/CardComponents";
import ColorCode from "../components/ColorCode";
import ColorPalette from "../components/ColorPalette";
import ComponentsGrid from "../components/ComponentsGrid";
import VideoPlayer from "../components/VideoPlayer";
import * as icons from "../icons";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ...icons,

  Tabs,
  TabItem,

  color: ColorCode,
  ColorPalette,
  VideoPlayer,
  ComponentsGrid,
  CardSection,
  Card,
};
