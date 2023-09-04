import {colors} from '@constants';
import {
  enhance,
  handleMargin,
  handlePadding,
  handleRound,
  handleSquare,
  propsToStyle,
} from '@utils/layout';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React, {memo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {BlockProps} from './types';
import equals from 'react-fast-compare';

const Block = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  column,
  shadow,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
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
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  opacity,
  elevation,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  safeBottom,
  ...rest
}: BlockProps) => {
  const insets = useSafeAreaInsets();
  const blockStyles = enhance<StyleProp<ViewStyle>>(
    propsToStyle([
      flex && styles.block,
      flexShrink && styles.flexShrink,
      flexGrow && styles.flexGrow,
      !flex && {flex: 0},
      width && {width: width},
      height && {height: height},
      row && styles.row,
      column && styles.column,
      shadow && {
        ...styles.shadow,
        shadowColor: colors.black,
        elevation: elevation || 3,
      },
      wrap && {flexWrap: 'wrap'},
      backgroundColor && {
        backgroundColor: backgroundColor,
      },
      padding && {...handlePadding(getSize.m(padding))},
      margin && {...handleMargin(getSize.m(margin))},
      alignStart && styles.alignStart,
      alignCenter && styles.alignCenter,
      alignEnd && styles.alignEnd,
      justifyCenter && styles.justifyCenter,
      justifyStart && styles.justifyStart,
      justifyEnd && styles.justifyEnd,
      space && {justifyContent: `space-${space}`},
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
      radius && {borderRadius: getSize.s(radius)},
      borderWidth && {borderWidth: borderWidth},
      square && {...handleSquare(square)},
      round && {...handleRound(round)},
      isNumber(opacity) && {opacity: opacity},
      borderColor && {
        borderColor: colors.black,
      },
      relative && {position: 'relative'},
      absolute && {position: 'absolute'},
      isNumber(top) && {top: getSize.v(top)},
      isNumber(left) && {left: getSize.s(left)},
      isNumber(right) && {right: getSize.s(right)},
      isNumber(bottom) && {bottom: getSize.v(bottom)},
      overflow && {overflow},
      alignSelf && {alignSelf},
      borderTopWidth && {borderTopWidth},
      borderRightWidth && {borderRightWidth},
      borderBottomWidth && {borderBottomWidth},
      borderLeftWidth && {borderLeftWidth},
      radiusTopLeft && {borderTopLeftRadius: radiusTopLeft},
      radiusTopRight && {borderTopRightRadius: radiusTopRight},
      radiusBottomLeft && {borderBottomLeftRadius: radiusBottomLeft},
      radiusBottomRight && {borderBottomRightRadius: radiusBottomRight},
      safeBottom && {
        paddingBottom: insets.bottom ? insets.bottom : getSize.m(24),
      },
    ]),
  );

  return (
    <View style={[blockStyles, style]} {...rest}>
      {children}
    </View>
  );
};

export default memo(Block, equals);
