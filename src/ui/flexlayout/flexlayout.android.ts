import ViewGroupAndroid from '../../ui/viewgroup/viewgroup.android';
import { FlexLayoutEvents } from './flexlayout-events';
import AndroidConfig from '../../util/Android/androidconfig';
import * as NativeFlexProps from '../shared/android/nativeflexprops';
import { IFlexLayout } from './flexlayout';
import Flex from '../shared/Flex';
const NativeYogaLayout = requireClass('io.smartface.android.sfcore.ui.yogalayout.SFYogaLayout');

const JustifyContentMapping = {
  [Flex.JustifyContent.FLEX_START]: NativeFlexProps.NativeJustifyContent.FLEX_START,
  [Flex.JustifyContent.FLEX_END]: NativeFlexProps.NativeJustifyContent.FLEX_END,
  [Flex.JustifyContent.CENTER]: NativeFlexProps.NativeJustifyContent.CENTER,
  [Flex.JustifyContent.SPACE_BETWEEN]: NativeFlexProps.NativeJustifyContent.SPACE_BETWEEN,
  [Flex.JustifyContent.SPACE_AROUND]: NativeFlexProps.NativeJustifyContent.SPACE_AROUND,
  [Flex.JustifyContent.SPACE_EVENLY]: NativeFlexProps.NativeJustifyContent.SPACE_EVENLY
};

const AligncontentMapping = {
  [Flex.AlignContent.FLEX_START]: NativeFlexProps.NativeAlignContent.FLEX_START,
  [Flex.AlignContent.FLEX_END]: NativeFlexProps.NativeAlignContent.FLEX_END,
  [Flex.AlignContent.CENTER]: NativeFlexProps.NativeAlignContent.CENTER,
  [Flex.AlignContent.SPACE_BETWEEN]: NativeFlexProps.NativeAlignContent.SPACE_BETWEEN,
  [Flex.AlignContent.SPACE_AROUND]: NativeFlexProps.NativeAlignContent.SPACE_AROUND,
  [Flex.AlignContent.AUTO]: NativeFlexProps.NativeAlignContent.AUTO,
  [Flex.AlignContent.STRETCH]: NativeFlexProps.NativeAlignContent.STRETCH,
  [Flex.AlignContent.BASELINE]: NativeFlexProps.NativeAlignContent.BASELINE
};

const AlignItemsMapping = {
  [Flex.AlignItems.FLEX_START]: NativeFlexProps.NativeAlignItems.FLEX_START,
  [Flex.AlignItems.FLEX_END]: NativeFlexProps.NativeAlignItems.FLEX_END,
  [Flex.AlignItems.CENTER]: NativeFlexProps.NativeAlignItems.CENTER,
  [Flex.AlignItems.AUTO]: NativeFlexProps.NativeAlignItems.AUTO,
  [Flex.AlignItems.STRETCH]: NativeFlexProps.NativeAlignItems.STRETCH
};

const DirectionMapping = {
  [Flex.Direction.INHERIT]: NativeFlexProps.NativeDirection.INHERIT,
  [Flex.Direction.LTR]: NativeFlexProps.NativeDirection.LTR,
  [Flex.Direction.RTL]: NativeFlexProps.NativeDirection.RTL
};

const FlexDirectionMapping = {
  [Flex.FlexDirection.COLUMN]: NativeFlexProps.NativeFlexDirection.COLUMN,
  [Flex.FlexDirection.COLUMN_REVERSE]: NativeFlexProps.NativeFlexDirection.COLUMN_REVERSE,
  [Flex.FlexDirection.ROW]: NativeFlexProps.NativeFlexDirection.ROW,
  [Flex.FlexDirection.ROW_REVERSE]: NativeFlexProps.NativeFlexDirection.ROW_REVERSE
};

const FlexWrapMapping = {
  [Flex.FlexWrap.NOWRAP]: NativeFlexProps.NativeFlexWrap.NOWRAP,
  [Flex.FlexWrap.WRAP]: NativeFlexProps.NativeFlexWrap.WRAP,
  [Flex.FlexWrap.WRAP_REVERSE]: NativeFlexProps.NativeFlexWrap.WRAP_REVERSE
};

export default class FlexLayoutAndroid<TEvent extends string = FlexLayoutEvents, TNative = any, TProps extends IFlexLayout = IFlexLayout>
  extends ViewGroupAndroid<TEvent | FlexLayoutEvents, TNative, TProps>
  implements IFlexLayout
{
  private _flexWrap: IFlexLayout['flexWrap'];
  private _direction: IFlexLayout['direction'];
  private _alignContent: IFlexLayout['alignContent'];
  private _justifyContent: IFlexLayout['justifyContent'];
  private _flexDirection: IFlexLayout['flexDirection'];
  private _alignItems: IFlexLayout['alignItems'];
  constructor(params?: Partial<TProps>) {
    super(params);
  }

  protected preConstruct(params) {
    this._flexWrap = null;
    super.preConstruct(params);
  }

  protected createNativeObject() {
    return new NativeYogaLayout(AndroidConfig.activity, {
      onInterceptTouchEvent: () => {
        this.emit('interceptTouchEvent');
        if (typeof this.android.onInterceptTouchEvent === 'function') {
          return this.android.onInterceptTouchEvent();
        }
      }
    });
  }

  get direction() {
    return this._direction;
    return this.convertFlexJavaEnumToJsEnum(this.yogaNode.getStyleDirection(), NativeFlexProps.NativeDirection);
  }
  set direction(value) {
    const direction = DirectionMapping[value] ?? value;
    this._direction = value;
    this.yogaNode.setDirection(direction);
    this.requestLayout();
  }
  get flexDirection() {
    return this._flexDirection;
    return this.convertFlexJavaEnumToJsEnum(this.yogaNode.getFlexDirection(), NativeFlexProps.NativeFlexDirection);
  }
  set flexDirection(value) {
    const flexDirection = FlexDirectionMapping[value] ?? value;
    this._flexDirection = value;
    this.yogaNode.setFlexDirection(flexDirection);
    this.requestLayout();
  }
  get justifyContent() {
    return this._justifyContent;
    return this.convertFlexJavaEnumToJsEnum(this.yogaNode.getJustifyContent(), NativeFlexProps.NativeJustifyContent);
  }
  set justifyContent(value) {
    const justifyContent = JustifyContentMapping[value] ?? value;
    this._justifyContent = value;
    this.yogaNode.setJustifyContent(justifyContent);
    this.requestLayout();
  }
  get alignContent() {
    return this._alignContent;
    return this.convertFlexJavaEnumToJsEnum(this.yogaNode.getAlignContent(), NativeFlexProps.NativeAlignContent);
  }
  set alignContent(value) {
    const alignContent = AligncontentMapping[value] ?? value;
    this._alignContent = value;
    this.yogaNode.setAlignContent(alignContent);
    this.requestLayout();
  }
  get alignItems() {
    return this._alignItems;
    return this.convertFlexJavaEnumToJsEnum(this.yogaNode.getAlignItems(), NativeFlexProps.NativeAlignItems);
  }
  set alignItems(value) {
    const alignItems = AlignItemsMapping[value] ?? value;
    this._alignItems = value;
    this.yogaNode.setAlignItems(alignItems);
    this.requestLayout();
  }
  get flexWrap() {
    return this._flexWrap;
  }
  set flexWrap(value) {
    const flexWrap = typeof value === 'number' ? FlexWrapMapping[value] ?? value : value;
    this._flexWrap = value;
    this.yogaNode.setWrap(flexWrap);
    this.requestLayout();
  }

  toString() {
    return 'FlexLayout';
  }
  // _maskedBorders: any[] = [];
  protected _masksToBounds: boolean;

  private convertFlexJavaEnumToJsEnum(javaEnum, jsEnums) {
    const jsKeys = Object.keys(jsEnums);
    for (let i = 0; i < jsKeys.length; i++) {
      if (javaEnum.equals(jsEnums[jsKeys[i]])) {
        return jsEnums[jsKeys[i]];
      }
    }
    return null;
  }

  static Direction = NativeFlexProps.NativeDirection;
  static FlexDirection = NativeFlexProps.NativeFlexDirection;
  static JustifyContent = NativeFlexProps.NativeJustifyContent;
  static AlignContent = NativeFlexProps.NativeAlignContent;
  static FlexWrap = NativeFlexProps.NativeFlexWrap;
  static AlignItems = NativeFlexProps.NativeAlignItems;
  static AlignSelf = NativeFlexProps.NativeAlignSelf;
  static PositionType = NativeFlexProps.NativePositionType;
}
