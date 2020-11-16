import React from 'react';
import { StyleSheet, StyleProp, TextStyle, Image } from 'react-native';
import { TabText, TabBody, TabButton } from './styles';

export type ContentType = string | React.ReactElement;

interface TabProps {
  allowFontScaling: boolean;
  content: ContentType;
  tabWidth: number;
  tabHeight: number;
  indexImage: number;
  activeTextColor: string;
  inActiveTextColor: string;
  active?: boolean;
  itemsImage: any;
  itemsImageActive: any;
  textStyle: StyleProp<TextStyle>;
  uppercase: boolean;
  activeTextStyle?: StyleProp<TextStyle>;
  onPress(): void;
}

const Tab = ({
  allowFontScaling,
  activeTextColor,
  active,
  onPress,
  content,
  inActiveTextColor,
  tabWidth,
  tabHeight,
  textStyle,
  uppercase,
  activeTextStyle,
  itemsImage,
  itemsImageActive,
  indexImage,
}: TabProps) => {
  const color = active ? activeTextColor : inActiveTextColor;
  const image = active ? itemsImageActive[indexImage] : itemsImage[indexImage];
  return (
    <TabButton onPress={onPress} tabWidth={tabWidth}>
      <TabBody tabHeight={itemsImage.length > 0 ? 60 : tabHeight}>
        {itemsImage.length > 0 && (
            <Image
                source={image}
                style={{resizeMode: 'contain', height: 20, width: 20, marginBottom: 8}}
            />
        )}
        {typeof content === 'string' ? (
          <TabText
            color={color}
            style={[StyleSheet.flatten([textStyle, activeTextStyle])]}
            allowFontScaling={allowFontScaling}
          >
            {uppercase ? content.toUpperCase() : content}
          </TabText>
        ) : (
          React.cloneElement(content, {
            style: [content.props.style, { color }],
          })
        )}
      </TabBody>
    </TabButton>
  );
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
