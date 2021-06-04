import Color = require("../color");
import View = require("../view");
import _ActivityIndicatorViewStyle = require("./ios/activityindicatorviewstyle");

declare class ActivityIndicator extends View {
  color: Color
}

declare namespace ActivityIndicator {
  namespace iOS {
    export import ActivityIndicatorViewStyle = _ActivityIndicatorViewStyle;
    export import SemanticContentAttribute = View.iOS.SemanticContentAttribute;
  }
}

export = ActivityIndicator;