import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <Circle cx={10} cy={10.5} r={9.5} stroke="#C4C4C4" />
    </Svg>
  );
}

export default SvgComponent;
