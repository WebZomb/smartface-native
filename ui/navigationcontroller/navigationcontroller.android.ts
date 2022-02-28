import { AbstractNavigationController, Controller, OperationType } from '.';
import Application from '../../application';
import FragmentTransaction from '../../util/Android/transition/fragmenttransition';
import ViewController from '../../util/Android/transition/viewcontroller';
import BottomTabBarController from '../bottomtabbarcontroller';
import HeaderBar from '../headerbar';
import Page from '../page';

export class NavigationControllerAndroid implements AbstractNavigationController {
  static NavCount = 0;
  static OperationType = OperationType;
  private pageIDCollectionInStack = {};
  private _childControllers = [];
  private _willShowCallback: (opts?: { controller: Controller; animated?: boolean }) => void;
  private _onTransitionCallback: (opts?: { controller: Controller; operation: OperationType; currentController?: Controller; targetController?: Controller }) => void;
  private __isActive: boolean;
  private __navID: number;
  isInsideBottomTabBar: any;
  popupBackNavigator: any;
  popUpBackPage: any;
  constructor(params?: Partial<AbstractNavigationController>) {
    this.__isActive = false;
    this.__navID = ++NavigationControllerAndroid.NavCount;
  }
  headerBar: HeaderBar;
  get childControllers() {
    return this._childControllers;
  }
  set childControllers(childControllersArray) {
    // Reset history and pageIDDtack
    this._childControllers = childControllersArray;
    this.pageIDCollectionInStack = {};

    // Fill properties of each controller
    for (let i = 0; i < childControllersArray.length; i++) {
      const childController = childControllersArray[i];
      childController.parentController = this;
      childController.isInsideBottomTabBar = this.isInsideBottomTabBar;
      if (!childController.pageID) {
        childController.pageID = FragmentTransaction.generatePageID();
      }

      if (this.pageIDCollectionInStack[childController.pageID]) {
        // console.log("This page exist in history!");
      }
      this.pageIDCollectionInStack[childController.pageID] = childController;
    }

    if (this.__isActive) {
      ViewController.activateController(this.getCurrentController());

      this.show({
        controller: this._childControllers[this._childControllers.length - 1],
        animated: false
      });
    }
  }
  get willShow() {
    return this._willShowCallback;
  }
  set willShow(callback: (opts?: { controller: Controller; animated?: boolean }) => void) {
    this._willShowCallback = callback;
  }
  get onTransition() {
    return this._onTransitionCallback;
  }
  set onTransition(callback: (opts?: { controller: Controller; operation: OperationType }) => void) {
    this._onTransitionCallback = callback;
  }
  toString() {
    return 'NavigationController';
  }
  // Use this function to show page or controller without back stack operation.
  // Show page or controller that exists in history
  // Call this function from BottomTabBarController
  show(params?: any) {
    if (!this.pageIDCollectionInStack[params.controller.pageID]) {
      throw new Error("This page doesn't exist in history!");
    }
    if (!this.__isActive) return;

    params.animated && (params.animationType = FragmentTransaction.AnimationType.RIGHTTOLEFT);
    !params.controller.parentController && (params.controller.parentController = this);
    this._willShowCallback?.({
      controller: params.controller,
      animated: params.animated
    });

    // No need self.__isActive property. show method is triggered when self is active.
    ViewController.activateController(params.controller);

    this.showController(params);
    let currentController;
    if (this._childControllers.length > 1) {
      currentController = this._childControllers[this._childControllers.length - 1];
    }

    //TODO: I changed currentController to controller
    // this._onTransitionCallback?.({
    //   currentController: currentController,
    //   targetController: params.controller,
    //   operation: NavigationController.OperationType.PUSH
    // });
    // TODO: Chnage currentPage as currentController
    this._onTransitionCallback?.({
      controller: currentController,
      targetController: params.controller,
      operation: OperationType.PUSH
    });
  }
  push(params) {
    if (!params.controller.pageID) {
      params.controller.pageID = FragmentTransaction.generatePageID();
    }

    if (this.pageIDCollectionInStack[params.controller.pageID]) {
      // console.log("This page exist in history! PageID: " + params.controller.pageID);
    }

    this.__isActive && ViewController.deactivateController(this.getCurrentController());

    params.controller.parentController = this;
    params.controller.isInsideBottomTabBar = this.isInsideBottomTabBar;
    this.pageIDCollectionInStack[params.controller.pageID] = params.controller;
    this._childControllers.push(params.controller);
    this.show(params);
  }
  showController(params) {
    if (params.controller instanceof Page) {
      params.controller.isInsideBottomTabBar = this.isInsideBottomTabBar;
      FragmentTransaction.push({
        page: params.controller,
        animated: params.animated,
        animationType: params.animationType,
        isComingFromPresent: params.isComingFromPresent
      });
    } else if (params.controller instanceof BottomTabBarController) {
      params.controller.isInsideBottomTabBar = true;
      params.controller.show();
    } else {
      throw new Error('The controller is not a Page instance or a BottomTabBarController instance!');
    }
  }

  present(params) {
    if (!params || !this.__isActive) return;
    params.controller.popupBackNavigator = this;
    ViewController.deactivateRootController(Application.currentPage);
    ViewController.activateController(params.controller);

    ViewController.setController({
      controller: params.controller,
      animation: params.animated,
      isComingFromPresent: true
    });

    params.onComplete && params.onComplete();
  }
  dismiss(params: any) {
    if (!this.popupBackNavigator) {
      return;
    }

    FragmentTransaction.dismissTransition(this.getCurrentController(), params.animated);
    FragmentTransaction.checkBottomTabBarVisible(this.popUpBackPage);

    Application.currentPage = this.popUpBackPage;
    ViewController.activateRootController(Application.currentPage);
    this.popUpBackPage = null;
    this.popupBackNavigator = null;

    ViewController.deactivateController(this);
    params.onComplete && params.onComplete();
  }
  pop(params) {
    if (this._childControllers.length < 2) {
      throw new Error('There is no page in history!');
    }
    // remove current page from history and its id from collection
    const poppedController = this._childControllers.pop();
    this.pageIDCollectionInStack[poppedController.pageID] = null;
    if (!this.__isActive) {
      return;
    }

    !params && (params = {});
    this.popFromHistoryController(poppedController, params);
  }
  popTo(params) {
    if (this._childControllers.length < 2) {
      throw new Error('There is no controller in history!');
    }

    // check whether target page exist in history
    if (!this.pageIDCollectionInStack[params.controller.pageID]) {
      throw new Error("Target controller doesn't exist in history!");
    }

    const currentController = this.getCurrentController();
    // TODO: getCurrentController for accesing current controller
    // remove current controller from history and its id from collection
    while (this._childControllers[this._childControllers.length - 1].pageID !== params.controller.pageID) {
      const controller = this._childControllers.pop();
      this.pageIDCollectionInStack[controller.pageID] = null;
    }

    if (!this.__isActive) {
      return;
    }
    this.popFromHistoryController(currentController, params);
  }
  // TODO: Use getCurrentController for all possible case
  getCurrentController() {
    if (this._childControllers.length > 0) {
      return this._childControllers[this._childControllers.length - 1];
    }
    return null;
  }
  popFromHistoryController(currentController, params) {
    const targetController = this._childControllers[this._childControllers.length - 1];
    this._willShowCallback?.({ controller: targetController, animated: params.animated });
    if (targetController instanceof Page) {
      const page = targetController;
      FragmentTransaction.pop({
        page: page,
        animated: params.animated
      });
    } else if (targetController instanceof BottomTabBarController) {
      const bottomTabBarController = targetController;
      bottomTabBarController.show();
    }
    //TODO: currentController changed to controller
    this._onTransitionCallback?.({ controller: currentController, targetController: targetController, operation: OperationType.POP });
  }
}
