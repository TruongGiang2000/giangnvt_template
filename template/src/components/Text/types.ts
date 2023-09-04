import {TextProps} from 'react-native';

export interface TextComponentProps extends TextProps {
  /**
   * small
   * @default undefined
   */
  sm?: boolean;
  /**
   * medium
   * @default undefined
   */
  md?: boolean;
  /**
   * large
   * @default undefined
   */
  lg?: boolean;
  /**
   * x large
   * @default undefined
   */
  xl?: boolean;
  /**
   * flex to 1
   * @default undefined
   */
  flex?: boolean;
  /**
   * flex shrink to 1
   * @default undefined
   */
  flexShrink?: boolean;
  /**
   * flex grow to 1
   * @default undefined
   */
  flexGrow?: boolean;
  /**
   * text size
   * @default undefined
   */
  size?: number;
  /**
   * text color
   * @default undefined
   */
  color?: string;
  /**
   * text center
   * @default undefined
   */
  center?: boolean;
  /**
   * text right
   * @default undefined
   */
  right?: boolean;
  /**
   * text justify
   * @default undefined
   */
  justify?: boolean;
  /**
   * padding
   * @default undefined
   */
  padding?: number;
  /**
   * margin
   * @default undefined
   */
  margin?: number;
  /**
   * padding top
   * @default undefined
   */
  paddingTop?: number;
  /**
   * padding bottom
   * @default undefined
   */
  paddingBottom?: number;
  /**
   * padding left
   * @default undefined
   */
  paddingLeft?: number;
  /**
   * padding right
   * @default undefined
   */
  paddingRight?: number;
  /**
   * margin bottom
   * @default undefined
   */
  marginBottom?: number;
  /**
   * margin left
   * @default undefined
   */
  marginLeft?: number;
  /**
   * margin right
   * @default undefined
   */
  marginRight?: number;
  /**
   * margin top
   * @default undefined
   */
  marginTop?: number;
  paddingVertical?: number;
  /**
   * padding horizontal
   * @default undefined
   */
  paddingHorizontal?: number;
  /**
   * margin vertical
   * @default undefined
   */
  marginVertical?: number;
  /**
   * margin horizontal
   * @default undefined
   */
  marginHorizontal?: number;
  /**
   * font family
   * @default undefined
   */
  type?: 'bold' | 'semibold' | 'medium' | 'regular';
  /**
   * line height
   * @default undefined
   */
  lineHeight?: number;
  /**
   * text decoration line
   * @default undefined
   */
  textDecorationLine?:
    | 'line-through'
    | 'none'
    | 'underline'
    | 'underline line-through';
}
