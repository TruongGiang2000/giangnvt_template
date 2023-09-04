import {StyleSheet} from 'react-native';

export const handlePadding = (size: number) => {
  return {
    paddingLeft: size,
    paddingRight: size,
    paddingBottom: size,
    paddingTop: size,
  };
};

export const handleMargin = (size: number) => {
  return {
    marginLeft: size,
    marginRight: size,
    marginBottom: size,
    marginTop: size,
  };
};

export const handleSquare = (size: number) => {
  return {
    width: size,
    height: size,
  };
};

export const handleRound = (size: number) => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
};

export const handleHitSlop = (size: number) => {
  return {
    left: size,
    right: size,
    bottom: size,
    top: size,
  };
};

export const enhance = <T>(arrStyle: Array<T>) => {
  return StyleSheet.flatten<T>(arrStyle);
};

export const propsToStyle = <T>(arrStyle: Array<T>) => {
  return arrStyle
    .filter(x => x !== undefined)
    .reduce((prev: any, curr: any) => {
      return {...prev, ...curr};
    }, {});
};
