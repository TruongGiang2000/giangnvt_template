import {ViewProps} from 'react-native';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type OverFlow = 'visible' | 'hidden' | 'scroll';

type AlignSelf =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch';

export interface BlockProps extends ViewProps {
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
   * row direction
   * @default undefined
   */
  row?: boolean;
  /**
   * column direction
   * @default undefined
   */
  column?: boolean;
  /**
   * shadow
   * @default undefined
   */
  shadow?: boolean;
  /**
   * using background color for block
   * @default undefined
   */
  backgroundColor?: string;
  /**
   * justifyContent
   * @default undefined
   */
  space?: JustifyContent;
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
   * align start
   * @default undefined
   */
  alignStart?: boolean;
  /**
   * align center
   * @default undefined
   */
  alignCenter?: boolean;
  /**
   * align end
   * @default undefined
   */
  alignEnd?: boolean;
  /**
   * flex wrap
   * @default undefined
   */
  wrap?: boolean;
  /**
   * justify center
   * @default undefined
   */
  justifyCenter?: boolean;
  /**
   * justify end
   * @default undefined
   */
  justifyEnd?: boolean;
  /**
   * justify start
   * @default undefined
   */
  justifyStart?: boolean;
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
  /**
   * padding vertical
   * @default undefined
   */
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
   * border radius
   * @default undefined
   */
  radius?: number;
  /**
   * height
   * @default undefined
   */
  height?: number;
  /**
   * width
   * @default undefined
   */
  width?: number;
  /**
   * size square
   * @default undefined
   */
  square?: number;
  /**
   * size circle
   * @default undefined
   */
  round?: number;
  /**
   * border width
   * @default undefined
   */
  borderWidth?: number;
  /**
   * relative position
   * @default undefined
   */
  relative?: boolean;
  /**
   * absolute position
   * @default undefined
   */
  absolute?: boolean;
  /**
   * top
   * @default undefined
   */
  top?: number;
  /**
   * let
   * @default undefined
   */
  left?: number;
  /**
   * right
   * @default undefined
   */
  right?: number;
  /**
   * bottom
   * @default undefined
   */
  bottom?: number;
  /**
   * color black for border
   * @default undefined
   */
  borderColor?: boolean;
  /**
   * overflow
   * @default undefined
   */
  overflow?: OverFlow;
  /**
   * align self
   * @default undefined
   */
  alignSelf?: AlignSelf;
  /**
   * opacity
   * @default undefined
   */
  opacity?: number;
  /**
   * elevation shadow
   * @default undefined
   */
  elevation?: number;
  /**
   * border top width
   * @default undefined
   */
  borderTopWidth?: number;
  /**
   * border right width
   * @default undefined
   */
  borderRightWidth?: number;
  /**
   * border bottom width
   * @default undefined
   */
  borderBottomWidth?: number;
  /**
   * border left width
   * @default undefined
   */
  borderLeftWidth?: number;
  /**
   * radius top left
   * @default undefined
   */
  radiusTopLeft?: number;
  /**
   * radius top right
   * @default undefined
   */
  radiusTopRight?: number;
  /**
   * radius bottom left
   * @default undefined
   */
  radiusBottomLeft?: number;
  /**
   * radius bottom right
   * @default undefined
   */
  radiusBottomRight?: number;
  /**
   * safe bottom
   * @default undefined
   */
  safeBottom?: boolean;
}
