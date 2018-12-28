/* globals requireClass */
const NativeRecyclerView = requireClass("android.support.v7.widget.RecyclerView");
const NativeSwipeRefreshLayout = requireClass("android.support.v4.widget.SwipeRefreshLayout");

function Scrollable(childJsClass, nativeScrollableObject) {
    var self = childJsClass;
    if(!self.android) {
        self.android = {};
    }
    
    var _overScrollMode = 0, _onGesture;
    Object.defineProperties(self.android, {
        'overScrollMode': {
            get: function() {
                return _overScrollMode;
            },
            set: function(mode) {
                nativeScrollableObject.setOverScrollMode(mode);
                _overScrollMode = mode;
            },
            enumerable: true,
            configurable: true
        }
    });
    
    if(!self.__isRecyclerView)
        return;
        
    Object.defineProperties(self.android, {
        'onGesture': {
            get: function() {
                return _onGesture;
            },
            set: function(value) {
                _onGesture = value;
                if(_onGesture) {
                    self.nativeInner.setJsCallbacks({
                        onScrollGesture: function(distanceX, distanceY) {
                            let returnValue = true;
                            _onGesture && (returnValue = _onGesture({distanceX: distanceX, distanceY: distanceY}));
                            return !!returnValue;
                        }
                    });
                } else {
                    self.nativeInner.setJsCallbacks(null);
                }
            },
            enumerable: true,
            configurable: true
        }
    });
            
    
    self.nativeObject.setOnRefreshListener(NativeSwipeRefreshLayout.OnRefreshListener.implement({
        onRefresh: function() {
            self.onPullRefresh && self.onPullRefresh();
        }
    }));
        
    self.nativeInner.addOnItemTouchListener(NativeRecyclerView.OnItemTouchListener.implement({
        onInterceptTouchEvent: function(recyclerView, motionEvent) {
            return !self.touchEnabled;
        },
        onRequestDisallowInterceptTouchEvent: function(disallowIntercept) {},
        onTouchEvent: function(recyclerView, motionEvent) {}
    }));
}

module.exports = Scrollable;