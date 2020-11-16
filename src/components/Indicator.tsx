import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import constants from '../lib/constants';

interface BarProps {
  tabWidth: number;
  color: string;
}

const Bar = styled(Animated.View)`
  height: 4;
  width: ${(props: BarProps) => props.tabWidth};
  position: absolute;
  bottom: 0;
  zIndex: 99;
  border-radius: 5;
  background-color: ${(props: BarProps) => props.color};
`;

interface IndicatorProps {
  color: string;
  tabWidth: number;
  value: Animated.Value;
}

const Indicator = (props: IndicatorProps) => (
    <Bar
        color={props.color}
        style={{ transform: [{ translateX: props.value }] }}
        tabWidth={props.tabWidth}
    />
);

export default Indicator;
