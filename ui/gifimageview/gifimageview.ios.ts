import Image from '../../ui/image';
import { GifImageViewEvents } from './gifimageview-events';
import ImageViewIOS from '../imageview/imageview.ios';
import { IGifImageView } from '.';
import GifImage from '../gifimage';
import IImage from '../image';

export default class GifImageViewIOS<TEvent extends string = GifImageViewEvents> extends ImageViewIOS<TEvent | GifImageViewEvents> implements IGifImageView {
  private _gifimage: GifImage;
  private _loopCompletionCallback: (loopCountRemain: number) => void;
  constructor(params?: IGifImageView) {
    super(params);

    if (!this.nativeObject) {
      this._nativeObject = new __SF_FLAnimatedImageView();
    }
  }

  get gifImage(): GifImage {
    return this._gifimage;
  }
  set gifImage(value: GifImage) {
    this._gifimage = value;
    this.nativeObject.animatedImage = value.nativeObject;
  }

  get currentFrame(): IImage {
    // TODO Recheck again after build
    return Image.createFromImage(this.nativeObject.currentFrame);
  }

  get currentFrameIndex(): number {
    return this.nativeObject.currentFrameIndex;
  }

  get isAnimating(): boolean {
    return this.nativeObject.animating;
  }

  startAnimating(): void {
    // TODO Old version has not startAnimating function
  }

  stopAnimating(): void {
    // TODO Old version has not stopAnimating function
  }

  get loopCompletionCallback(): (loopCountRemain: number) => void {
    return this._loopCompletionCallback;
  }
  set loopCompletionCallback(value: (loopCountRemain: number) => void) {
    this._loopCompletionCallback = value;
    this.nativeObject.setLoopCompletionBlockWithJSValue(this.loopCompletionCallback);
  }
}
