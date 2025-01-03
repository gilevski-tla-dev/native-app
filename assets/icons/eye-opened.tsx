import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../shared/tokens";
const EyeOpenedIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24" style={{ width: 30, height: 30 }}>
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5C8.243 5 5.436 7.44 3.767 9.44a3.96 3.96 0 0 0 0 5.12C5.436 16.56 8.243 19 12 19c3.757 0 6.564-2.44 8.233-4.44a3.96 3.96 0 0 0 0-5.12C18.564 7.44 15.757 5 12 5Z"
    />
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
export default EyeOpenedIcon;
