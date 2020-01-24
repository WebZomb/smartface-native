Ext.data.JsonP.UI_AlertView({"tagname":"class","name":"UI.AlertView","autodetected":{},"files":[{"filename":"analysis.js","href":null}],"since":"0.1","members":[{"name":"cancellable","tagname":"property","owner":"UI.AlertView","id":"property-cancellable","meta":{"android":true}},{"name":"isShowing","tagname":"property","owner":"UI.AlertView","id":"property-isShowing","meta":{"readonly":true,"android":true,"ios":true}},{"name":"message","tagname":"property","owner":"UI.AlertView","id":"property-message","meta":{"android":true,"ios":true}},{"name":"textBoxes","tagname":"property","owner":"UI.AlertView","id":"property-textBoxes","meta":{"readonly":true,"android":true,"ios":true}},{"name":"title","tagname":"property","owner":"UI.AlertView","id":"property-title","meta":{"android":true,"ios":true}},{"name":"addButton","tagname":"method","owner":"UI.AlertView","id":"method-addButton","meta":{"android":true,"ios":true}},{"name":"addTextBox","tagname":"method","owner":"UI.AlertView","id":"method-addTextBox","meta":{"android":true,"ios":true}},{"name":"dismiss","tagname":"method","owner":"UI.AlertView","id":"method-dismiss","meta":{"android":true,"ios":true}},{"name":"show","tagname":"method","owner":"UI.AlertView","id":"method-show","meta":{"android":true,"ios":true}},{"name":"onDismiss","tagname":"event","owner":"UI.AlertView","id":"event-onDismiss","meta":{"android":true,"ios":true}}],"alternateClassNames":[],"aliases":{},"id":"class-UI.AlertView","short_doc":"AlertView is an alert box with buttons having custom behaviors. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>AlertView is an alert box with buttons having custom behaviors. You can\nuse AlertView for informing user or asking for confirmations. AlertView\nhas buttons with callbacks that you can take action for each of them separately.</p>\n\n<pre class='inline-example '><code>const AlertView = require('sf-core/ui/alertview');\n\nvar myAlertView = new AlertView({\n    title: \"Alert Title\",\n    message: \"Alert Message\"\n});\nmyAlertView.addButton({\n    type: AlertView.Android.ButtonType.NEGATIVE,\n    text: \"Cancel\"\n});\nmyAlertView.addButton({\n    type: AlertView.Android.ButtonType.POSITIVE,\n    text: \"Okay\",\n    onClick: function() {\n        <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(\"Okay clicked.\");\n    }\n});\n\nmyAlertView.show();\n</code></pre>\n        <p>Available since: <b>0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cancellable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-property-cancellable' class='name expandable'>cancellable</a> : Boolean<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets whether the alert view is cancelable or not when touched outside. ...</div><div class='long'><p>Gets/sets whether the alert view is cancelable or not when touched outside.</p>\n<p>Defaults to: <code>true</code></p>        <p>Available since: <b>0.1</b></p>\n</div></div></div><div id='property-isShowing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-property-isShowing' class='name expandable'>isShowing</a> : boolean<span class=\"signature\"><span class='readonly' >readonly</span><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets showing status of AlertView. ...</div><div class='long'><p>Gets showing status of AlertView. It is set to true if AlertView is\ncurrently displayed on screen, false otherwise.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>0.1</b></p>\n</div></div></div><div id='property-message' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-property-message' class='name expandable'>message</a> : String<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets message of AlertView. ...</div><div class='long'><p>Gets/sets message of AlertView.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p>        <p>Available since: <b>0.1</b></p>\n</div></div></div><div id='property-textBoxes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-property-textBoxes' class='name expandable'>textBoxes</a> : Object[]<span class=\"signature\"><span class='readonly' >readonly</span><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Returns object which contains text of added TextBox ...</div><div class='long'><p>Returns object which contains text of added TextBox</p>\n<p>Defaults to: <code>[]</code></p>        <p>Available since: <b>4.1.2</b></p>\n<ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text of added TextBox</p>\n</div></li></ul></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-property-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets title of AlertView. ...</div><div class='long'><p>Gets/sets title of AlertView.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p>        <p>Available since: <b>0.1</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addButton' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-method-addButton' class='name expandable'>addButton</a>( <span class='pre'>params</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Allows you to add button to AlertView. ...</div><div class='long'><p>Allows you to add button to AlertView. You can add maximum 3 buttons\non Android platform, on iOS there is no limitation.</p>\n\n<pre class='inline-example '><code>myAlertView.addButton({\n    type: AlertView.Android.ButtonType.POSITIVE,\n    text: \"Okay\",\n    onClick: function() {\n        <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(\"Okay clicked.\");\n    }\n});\n</code></pre>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>Object describing button properties</p>\n<ul><li><span class='pre'>index</span> : <a href=\"#!/api/UI.AlertView.ButtonType\" rel=\"UI.AlertView.ButtonType\" class=\"docClass\">UI.AlertView.ButtonType</a><div class='sub-desc'><p>[DEPRECATED since 1.1.10. Use 'type' instead] Button type, it is set to\n                                     <a href=\"#!/api/UI.AlertView.ButtonType-static-property-NEUTRAL\" rel=\"UI.AlertView.ButtonType-static-property-NEUTRAL\" class=\"docClass\">UI.AlertView.ButtonType.NEUTRAL</a> as default</p>\n</div></li><li><span class='pre'>type</span> : <a href=\"#!/api/UI.AlertView.Android.ButtonType\" rel=\"UI.AlertView.Android.ButtonType\" class=\"docClass\">UI.AlertView.Android.ButtonType</a><div class='sub-desc'><p>Button type, it is set to\n                                     <a href=\"#!/api/UI.AlertView.Android.ButtonType-static-property-NEUTRAL\" rel=\"UI.AlertView.Android.ButtonType-static-property-NEUTRAL\" class=\"docClass\">UI.AlertView.Android.ButtonType.NEUTRAL</a> as default</p>\n</div></li><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Button text. It's letter case behaves differently on the platforms.</p>\n</div></li><li><span class='pre'>onClick</span> : Function (optional)<div class='sub-desc'><p>Callback for button click action</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-addTextBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-method-addTextBox' class='name expandable'>addTextBox</a>( <span class='pre'>params</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Allows to add TextBox to AlertView. ...</div><div class='long'><p>Allows to add TextBox to AlertView. In iOS, maximum two textbox can be added. It is not applied to Android but 2 textboxes recommended.</p>\n\n<pre class='inline-example '><code>myAlertView.addTextBox({\n     text: \"Hello!\",\n     hint: \"Hint!\",\n     isPassword: false,\n     android: {\n         viewSpacings: { left: 50, right: 50 }\n     }\n});\n</code></pre>\n        <p>Available since: <b>4.1.2</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>Object describing TextBox's properties</p>\n<ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Sets the text of the TextBox.</p>\n</div></li><li><span class='pre'>hint</span> : String<div class='sub-desc'><p>Sets hint text that will be displayed when TextBox is empty.</p>\n</div></li><li><span class='pre'>isPassword</span> : Boolean<div class='sub-desc'><p>If it is true, content will be hidden</p>\n</div></li><li><span class='pre'>android</span> : Object<div class='sub-desc'><p>Android specific properties</p>\n<ul><li><span class='pre'>width</span> : Object<div class='sub-desc'><p>Width of view</p>\n</div></li><li><span class='pre'>height</span> : Object<div class='sub-desc'><p>Height of view</p>\n</div></li><li><span class='pre'>viewSpacings</span> : Object<div class='sub-desc'><p>Extra space to appearence of view</p>\n<ul><li><span class='pre'>left</span> : Number<div class='sub-desc'><p>Extra space to appear to the left of view</p>\n</div></li><li><span class='pre'>right</span> : Number<div class='sub-desc'><p>Extra space to appear to the right of view</p>\n</div></li><li><span class='pre'>top</span> : Number<div class='sub-desc'><p>Extra space to appear to the top of view</p>\n</div></li><li><span class='pre'>bottom</span> : Number<div class='sub-desc'><p>Extra space to appear to the bottom of view</p>\n</div></li></ul></div></li></ul></div></li></ul></div></li></ul></div></div></div><div id='method-dismiss' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-method-dismiss' class='name expandable'>dismiss</a>( <span class='pre'></span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Dismisses the AlertView, isShowing property set to false after this\noperation. ...</div><div class='long'><p>Dismisses the AlertView, isShowing property set to false after this\noperation.</p>\n        <p>Available since: <b>0.1</b></p>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Shows AlertView on the screen with specified properties, isShowing property\nset to true after this operation. ...</div><div class='long'><p>Shows AlertView on the screen with specified properties, isShowing property\nset to true after this operation.</p>\n        <p>Available since: <b>0.1</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onDismiss' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.AlertView'>UI.AlertView</span><br/></div><a href='#!/api/UI.AlertView-event-onDismiss' class='name expandable'>onDismiss</a>( <span class='pre'>alertView</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets dismiss callback function. ...</div><div class='long'><p>Gets/sets dismiss callback function.</p>\n\n<pre class='inline-example '><code>myAlertView.onDismiss = function(alertView) {\n    <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(\"Dismissed alert view with title: \" + alertView.title);\n};\n</code></pre>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alertView</span> : <a href=\"#!/api/UI.AlertView\" rel=\"UI.AlertView\" class=\"docClass\">UI.AlertView</a><div class='sub-desc'><p>Dismissed AlertView object</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});