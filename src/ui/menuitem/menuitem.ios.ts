import { IMenuItem, Style } from './menuitem';
import NativeEventEmitterComponent from '../../core/native-event-emitter-component';
import { MenuItemEvents } from './menuitem-events';

export default class MenuItemIOS extends NativeEventEmitterComponent<MenuItemEvents, any, IMenuItem> implements IMenuItem {
  protected __createNativeObject__() {
    return null;
  }
  static Styles = {
    DEFAULT: Style.DEFAULT,
    CANCEL: Style.CANCEL,
    DESTRUCTIVE: Style.DESTRUCTIVE
  };
  private _title: string;
  private _style: Style;
  constructor(params?: Partial<IMenuItem>) {
    super(params);
    this.addIOSProps(this.getIOSProps());
  }
  protected __init__(params?: Partial<Record<string, any>>): void {
    this._title = '';
    this._style = Style.DEFAULT;
    super.__init__(params);
  }
  private getIOSProps() {
    const self = this;
    return {
      get style(): Style {
        return self._style;
      },
      set style(color: Style) {
        self._style = color;
      }
    };
  }
  onSelected: () => void;
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  toString() {
    return 'MenuItem';
  }
  onSelectedListener() {
    this.onSelected?.();
    this.emit('selected');
  }
}
