import {colors} from '@constants';
import {fonts} from '@constants/fonts';
import {
  enhance,
  handleMargin,
  handlePadding,
  propsToStyle,
} from '@utils/layout';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React, {memo} from 'react';
import {StyleProp, Text as RNText, TextStyle} from 'react-native';
import {TextComponentProps} from './types';
import equals from 'react-fast-compare';

const Text = (props: TextComponentProps) => {
  const {
    sm,
    md,
    lg,
    xl,
    flex,
    flexShrink,
    flexGrow,
    size = 14,
    color = colors.black,
    center,
    right,
    justify,
    padding,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    style,
    type = 'regular',
    lineHeight,
    textDecorationLine,
    ...textProps
  } = props;

  const textStyle = enhance<StyleProp<TextStyle>>(
    propsToStyle([
      flex && {flex: 1},
      flexShrink && {flexShrink: 1},
      flexGrow && {flexGrow: 1},
      {color: color},
      center && {textAlign: 'center'},
      right && {textAlign: 'right'},
      justify && {textAlign: 'justify'},
      padding && {...handlePadding(getSize.m(padding))},
      margin && {...handleMargin(getSize.m(margin))},
      paddingTop && {paddingTop: getSize.m(paddingTop)},
      paddingRight && {paddingRight: getSize.m(paddingRight)},
      paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
      paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
      marginBottom && {marginBottom: getSize.m(marginBottom)},
      marginTop && {marginTop: getSize.m(marginTop)},
      marginRight && {marginRight: getSize.m(marginRight)},
      marginLeft && {marginLeft: getSize.m(marginLeft)},
      paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
      paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
      marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
      marginVertical && {marginVertical: getSize.m(marginVertical)},
      isNumber(lineHeight) && {lineHeight: getSize.m(lineHeight)},
      {fontFamily: fonts?.[type]},
      textDecorationLine && {textDecorationLine},
      {fontSize: getSize.m(size)},
      sm && {fontSize: getSize.m(12)},
      md && {fontSize: getSize.m(16)},
      lg && {fontSize: getSize.m(19)},
      xl && {fontSize: getSize.m(25)},
    ]),
  );

  return (
    <RNText allowFontScaling={false} style={[textStyle, style]} {...textProps}>
      {props.children}
    </RNText>
  );
};

export default memo(Text, equals);
