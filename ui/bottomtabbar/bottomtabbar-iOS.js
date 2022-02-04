const Color = require('../../ui/color');
const Image = require('../../ui/image');
const System = require('../../device/system');

function TabBar(params) {
    const UITabBar = SF.requireClass("UITabBar");
    const TabBarItem = require('../../ui/tabbaritem');

    var self = this;

    self.android = {};

    self.nativeObject = undefined;
    self.appearance = undefined;
    if (params.nativeObject) {
        self.nativeObject = params.nativeObject;

        // Xcode 13.1 background bug fixes [NTVE-398]
        if (parseInt(System.OSVersion) >= 15) {
            self.appearance = new __SF_UITabBarAppearance();
            
            self.appearance.configureWithOpaqueBackground();

            self.nativeObject.standardAppearance = self.appearance
            self.nativeObject.scrollEdgeAppearance = self.nativeObject.standardAppearance
        }
    }

    self.nativeObject.translucent = false;
    //////////////////////////////////////////////////////////////////////////
    // ITEMS

    var _ios = {};
    Object.defineProperty(self, 'ios', {
        get: function() {
            return _ios;
        },
        set: function(value) {
            if (typeof value === 'object') {
                Object.assign(_ios, value);
            }
        },
        enumerable: true
    });

    var _items = [];
    Object.defineProperty(self, 'items', {
        get: function() {
            return _items;
        },
        set: function(value) {
            if (typeof value === 'object') {
                _items = value;

                for (var i in _items) {
                    if (typeof _items[i].nativeObject === "undefined") {
                        _items[i].nativeObject = self.nativeObject.items[i];
                    }
                    _items[i].invalidate();
                }
            }
        },
        enumerable: true
    });

    // ITEMS DELEGATE
    self.tabBarControllerItemsDidChange = function() {
        if (self.items.length === self.nativeObject.items.length) {
            for (var i in self.nativeObject.items) {
                self.items[i].nativeObject = self.nativeObject.items[i];
            }
        } else {
            var itemsArray = [];
            for (var i in self.nativeObject.items) {
                var sfTabBarItem = new TabBarItem({
                    nativeObject: self.nativeObject.items[i]
                });
                itemsArray.push(sfTabBarItem);
            }
            self.items = itemsArray;
        }
    }
    //////////////////////////////////////////////////////////////////////////

    Object.defineProperty(self.ios, 'translucent', {
        get: function() {
            return self.nativeObject.translucent;
        },
        set: function(value) {
            if (typeof value === 'boolean') {
                self.nativeObject.translucent = value;
            }
        },
        enumerable: true
    });

    var _itemColor = {
        normal: undefined,
        selected: undefined
    };
    Object.defineProperty(self, 'itemColor', {
        get: function() {
            return _itemColor;
        },
        set: function(itemColorObject) {
            if (typeof itemColorObject === 'object') {
                _itemColor = itemColorObject;
                self.tintColor = _itemColor;
            }
        },
        enumerable: true
    });

    Object.defineProperty(self, 'tintColor', {
        get: function() {
            return new Color({
                color: self.nativeObject.tintColor
            });
        },
        set: function(value) {
            if (self.nativeObject) {
                if (typeof value.normal === 'object') {
                    var systemVersion = parseInt(SF.requireClass("UIDevice").currentDevice().systemVersion);
                    if (systemVersion >= 10) {
                        self.unselectedItemColor = value.normal;
                    }
                }
                if (typeof value.selected === 'object') {
                    self.nativeObject.tintColor = value.selected.nativeObject;
                }
            }
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(self, 'unselectedItemColor', {
        get: function() {
            return new Color({
                color: self.nativeObject.unselectedItemTintColor
            });
        },
        set: function(value) {
            self.nativeObject.unselectedItemTintColor = value.nativeObject;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(self, 'backgroundColor', {
        get: function() {
            return new Color({
                color: self.nativeObject.barTintColor
            });
        },
        set: function(value) {
            // Xcode 13.1 background bug fixes [NTVE-398]
            if (parseInt(System.OSVersion) >= 15) { 
                self.appearance.backgroundColor = value.nativeObject
        
                self.nativeObject.standardAppearance = self.appearance
                self.nativeObject.scrollEdgeAppearance = self.appearance    

            } else {
                self.nativeObject.barTintColor = value.nativeObject;
            }
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(self, 'backgroundImage', {
        get: function() {
            return Image.createFromImage(self.nativeObject.backgroundImage);
        },
        set: function(value) {
            self.nativeObject.backgroundImage = value.nativeObject;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(self, 'height', {
        get: function() {
            return self.nativeObject.frame.height;
        },
        enumerable: true,
        configurable: true
    });

    var _borderVisibility = true;
    Object.defineProperty(self, 'borderVisibility', {
        get: function() {
            return _borderVisibility;
        },
        set: function(value) {
            if (typeof value === "boolean") {
                if (value) {
                    self.nativeObject.shadowImage = undefined;
                    self.nativeObject.backgroundImage = undefined;
                } else {
                    var emptyImage = __SF_UIImage.getInstance();
                    self.nativeObject.shadowImage = emptyImage;
                    self.nativeObject.backgroundImage = emptyImage;
                }
                _borderVisibility = value;
            }
        },
        enumerable: true,
        configurable: true
    });

    var _selectionIndicatorImage;
    Object.defineProperty(self.ios, 'selectionIndicatorImage', {
        get: function() {
            return _selectionIndicatorImage;
        },
        set: function(value) {
            if (typeof value === "object") {
                _selectionIndicatorImage = value;
                self.nativeObject.selectionIndicatorImage = _selectionIndicatorImage.nativeObject;
            }
        },
        enumerable: true,
        configurable: true
    });

    self.itemColor = {
        normal: Color.GRAY,
        selected: Color.create("#00a1f1")
    }; // Do not remove. COR-1931 describes what happening.

    if (params) {
        for (var param in params) {
            this[param] = params[param];
        }
    }
};

module.exports = TabBar;