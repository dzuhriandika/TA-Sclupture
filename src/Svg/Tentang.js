import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M11.484 12.89h3.75V22.97"
        stroke="#EF883D"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.957 23.203h8.086"
        stroke="#EF883D"
        strokeWidth={2.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M15 9.375a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
        fill="#EF883D"
      />
    </Svg>
  );
}

export default SvgComponent;
