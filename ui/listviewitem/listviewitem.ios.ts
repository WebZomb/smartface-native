import { IListViewItem, ListViewItemIOSProperties } from '.';
import { WithMobileOSProps } from '../../core/native-mobile-component';
import { FlexLayoutEvents } from '../flexlayout/flexlayout-events';
import FlexLayoutIOS from '../flexlayout/flexlayout.ios';

export default class ListViewItemIOS<TEvent extends string = FlexLayoutEvents, TNative = ListViewItemIOSProperties>
  extends FlexLayoutIOS<TEvent | FlexLayoutEvents, TNative, WithMobileOSProps<Partial<IListViewItem>> & ListViewItemIOS>
  implements IListViewItem
{
  nativeInner: any;
  __nativeCell: __SF_UICollectionViewCell;
  constructor(params: Partial<IListViewItem> = {}) {
    super(params);
    this.ios.expandSwipe = (direction) => {
      this.__nativeCell.expandSwipeAnimated(direction, true);
    };
  }
}
