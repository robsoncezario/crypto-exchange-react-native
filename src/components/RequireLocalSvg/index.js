import React from "react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import { SvgCssUri } from "react-native-svg";

export function RequireLocalSvg({ asset, ...rest }) {
  return <SvgCssUri uri={resolveAssetSource(asset).uri} {...rest} />;
}
