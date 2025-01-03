import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../shared/tokens";
const EyeClosedIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24" style={{ width: 30, height: 30 }}>
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0 1.5 1.815M6 12.685 4.5 14.5"
    />
  </Svg>
);
export default EyeClosedIcon;
