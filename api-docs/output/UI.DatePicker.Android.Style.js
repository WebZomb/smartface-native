Ext.data.JsonP.UI_DatePicker_Android_Style({"tagname":"class","name":"UI.DatePicker.Android.Style","autodetected":{},"files":[{"filename":"analysis.js","href":null}],"enum":{"type":"Object","default":null,"doc_only":null},"android":true,"since":"3.1.3","members":[{"name":"DEFAULT","tagname":"property","owner":"UI.DatePicker.Android.Style","id":"static-property-DEFAULT","meta":{"readonly":true,"static":true,"android":true}},{"name":"DEFAULT_DARK","tagname":"property","owner":"UI.DatePicker.Android.Style","id":"static-property-DEFAULT_DARK","meta":{"readonly":true,"static":true,"android":true}},{"name":"DEFAULT_LIGHT","tagname":"property","owner":"UI.DatePicker.Android.Style","id":"static-property-DEFAULT_LIGHT","meta":{"readonly":true,"static":true,"android":true}},{"name":"MATERIAL_DARK","tagname":"property","owner":"UI.DatePicker.Android.Style","id":"static-property-MATERIAL_DARK","meta":{"readonly":true,"static":true,"android":true}},{"name":"MATERIAL_LIGHT","tagname":"property","owner":"UI.DatePicker.Android.Style","id":"static-property-MATERIAL_LIGHT","meta":{"readonly":true,"static":true,"android":true}}],"alternateClassNames":[],"aliases":{},"id":"class-UI.DatePicker.Android.Style","short_doc":"According to your requirements, you should choose of the theme enums. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>According to your requirements, you should choose of the theme enums.\nIf there is no theme specified then default them style will be applied. Theme enum must be given with constructor.</p>\n\n<pre class='inline-example '><code>const DatePicker = require('sf-core/ui/datepicker');\nvar myDatePicker = new DatePicker({\n   android: {\n     style: DatePicker.Android.Style.DEFAULT_DARK\n   }\n});\nmyDatePicker.onDateSelected = function(date) {\n    <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>('Year: ' + date.getFullYear() + ' Month: ' + date.getMonth() + ' Day' + date.getDate());\n};\nmyDatePicker.show();\n</code></pre>\n        <p>Available since: <b>3.1.3</b></p>\n<div class='rounded-box enum-box'><p><strong>ENUM:</strong> This enumeration defines a set of Object values.</p></div></div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-DEFAULT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker.Android.Style'>UI.DatePicker.Android.Style</span><br/></div><a href='#!/api/UI.DatePicker.Android.Style-static-property-DEFAULT' class='name expandable'>DEFAULT</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span><span class='android' >android</span></span></div><div class='description'><div class='short'><p>Native default DatePicker theme.</p>\n</div><div class='long'><p>Native default DatePicker theme.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='static-property-DEFAULT_DARK' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker.Android.Style'>UI.DatePicker.Android.Style</span><br/></div><a href='#!/api/UI.DatePicker.Android.Style-static-property-DEFAULT_DARK' class='name expandable'>DEFAULT_DARK</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span><span class='android' >android</span></span></div><div class='description'><div class='short'><p>Native default dark theme with a dark background.</p>\n</div><div class='long'><p>Native default dark theme with a dark background.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='static-property-DEFAULT_LIGHT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker.Android.Style'>UI.DatePicker.Android.Style</span><br/></div><a href='#!/api/UI.DatePicker.Android.Style-static-property-DEFAULT_LIGHT' class='name expandable'>DEFAULT_LIGHT</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span><span class='android' >android</span></span></div><div class='description'><div class='short'><p>Native default light theme with a light background.</p>\n</div><div class='long'><p>Native default light theme with a light background.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='static-property-MATERIAL_DARK' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker.Android.Style'>UI.DatePicker.Android.Style</span><br/></div><a href='#!/api/UI.DatePicker.Android.Style-static-property-MATERIAL_DARK' class='name expandable'>MATERIAL_DARK</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span><span class='android' >android</span></span></div><div class='description'><div class='short'><p>Material dark theme with two-tone backgrounds.</p>\n</div><div class='long'><p>Material dark theme with two-tone backgrounds.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='static-property-MATERIAL_LIGHT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker.Android.Style'>UI.DatePicker.Android.Style</span><br/></div><a href='#!/api/UI.DatePicker.Android.Style-static-property-MATERIAL_LIGHT' class='name expandable'>MATERIAL_LIGHT</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span><span class='static' >static</span><span class='android' >android</span></span></div><div class='description'><div class='short'><p>Material light theme  with two-tone backgrounds.</p>\n</div><div class='long'><p>Material light theme  with two-tone backgrounds.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div></div></div></div></div>","meta":{"android":true}});