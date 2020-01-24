Ext.data.JsonP.UI_SelectablePicker({"tagname":"class","name":"UI.SelectablePicker","autodetected":{},"files":[{"filename":"analysis.js","href":null}],"since":"4.0.5","members":[{"name":"backgroundColor","tagname":"property","owner":"UI.SelectablePicker","id":"property-backgroundColor","meta":{"android":true}},{"name":"cancelButtonColor","tagname":"property","owner":"UI.SelectablePicker","id":"property-cancelButtonColor","meta":{"android":true}},{"name":"cancelButtonFont","tagname":"property","owner":"UI.SelectablePicker","id":"property-cancelButtonFont","meta":{"android":true}},{"name":"cancelButtonText","tagname":"property","owner":"UI.SelectablePicker","id":"property-cancelButtonText","meta":{"android":true}},{"name":"cancelable","tagname":"property","owner":"UI.SelectablePicker","id":"property-cancelable","meta":{"android":true}},{"name":"checkedItems","tagname":"property","owner":"UI.SelectablePicker","id":"property-checkedItems","meta":{"android":true}},{"name":"doneButtonColor","tagname":"property","owner":"UI.SelectablePicker","id":"property-doneButtonColor","meta":{"android":true}},{"name":"doneButtonFont","tagname":"property","owner":"UI.SelectablePicker","id":"property-doneButtonFont","meta":{"android":true}},{"name":"doneButtonText","tagname":"property","owner":"UI.SelectablePicker","id":"property-doneButtonText","meta":{"android":true}},{"name":"items","tagname":"property","owner":"UI.SelectablePicker","id":"property-items","meta":{"android":true}},{"name":"multiSelectEnabled","tagname":"property","owner":"UI.SelectablePicker","id":"property-multiSelectEnabled","meta":{"android":true}},{"name":"title","tagname":"property","owner":"UI.SelectablePicker","id":"property-title","meta":{"android":true}},{"name":"titleColor","tagname":"property","owner":"UI.SelectablePicker","id":"property-titleColor","meta":{"android":true}},{"name":"titleFont","tagname":"property","owner":"UI.SelectablePicker","id":"property-titleFont","meta":{"android":true}},{"name":"show","tagname":"method","owner":"UI.SelectablePicker","id":"method-show","meta":{"android":true}},{"name":"onSelected","tagname":"event","owner":"UI.SelectablePicker","id":"event-onSelected","meta":{"android":true}}],"alternateClassNames":[],"aliases":{},"id":"class-UI.SelectablePicker","short_doc":"SelectablePicker is a dialog where users are able to pick item/items on. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>SelectablePicker is a dialog where users are able to pick item/items on.</p>\n\n<pre class='inline-example '><code>const SelectablePicker = require('sf-core/ui/selectablepicker');\nvar items = [\n     \"item1\",\n     \"item2\",\n     \"item3\",\n     \"item4\",\n     \"item5\"\n];\n\nvar checkedItems = [3,2]\nvar mySelectablePicker = new SelectablePicker({\n     multiSelectEnabled: true,\n     items: items,\n     checkedItems: checkedItems\n});\nvar doneCallback = function(params){\n     <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(params.items);\n}\nvar cancelCallback = function(params){\n     <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(\"Canceled\");\n}\nmySelectablePicker.show(doneCallback,cancelCallback);\n</code></pre>\n        <p>Available since: <b>4.0.5</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-backgroundColor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-backgroundColor' class='name expandable'>backgroundColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets backgroundColor of the SelectablePicker. ...</div><div class='long'><p>Gets/sets backgroundColor of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>Color.WHITE</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-cancelButtonColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-cancelButtonColor' class='name expandable'>cancelButtonColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets cancelButtonColor of the SelectablePicker. ...</div><div class='long'><p>Gets/sets cancelButtonColor of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-cancelButtonFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-cancelButtonFont' class='name expandable'>cancelButtonFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets cancelButtonFont of the SelectablePicker. ...</div><div class='long'><p>Gets/sets cancelButtonFont of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-cancelButtonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-cancelButtonText' class='name expandable'>cancelButtonText</a> : String<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets cancelButtonText of the SelectablePicker. ...</div><div class='long'><p>Gets/sets cancelButtonText of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>Cancel</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-cancelable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-cancelable' class='name expandable'>cancelable</a> : Boolean<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets cancelable of the SelectablePicker. ...</div><div class='long'><p>Gets/sets cancelable of the SelectablePicker. If click outside of dialog, it will be canceled.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>true</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-checkedItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-checkedItems' class='name expandable'>checkedItems</a> : Number|Array<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets checkedItems of the SelectablePicker. ...</div><div class='long'><p>Gets/sets checkedItems of the SelectablePicker.\nIf multiSelectEnabled is false, checkedItems must be a spesific index of the items array or array of index.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>-1</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-doneButtonColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-doneButtonColor' class='name expandable'>doneButtonColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets doneButtonColor of the SelectablePicker. ...</div><div class='long'><p>Gets/sets doneButtonColor of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-doneButtonFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-doneButtonFont' class='name expandable'>doneButtonFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets doneButtonFont of the SelectablePicker. ...</div><div class='long'><p>Gets/sets doneButtonFont of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-doneButtonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-doneButtonText' class='name expandable'>doneButtonText</a> : String<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets doneButtonText of the SelectablePicker. ...</div><div class='long'><p>Gets/sets doneButtonText of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>Ok</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-items' class='name expandable'>items</a> : Array<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets items of the SelectablePicker. ...</div><div class='long'><p>Gets/sets items of the SelectablePicker.</p>\n<p>Defaults to: <code>[]</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-multiSelectEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-multiSelectEnabled' class='name expandable'>multiSelectEnabled</a> : Boolean<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets multiSelectEnabled of the SelectablePicker. ...</div><div class='long'><p>Gets/sets multiSelectEnabled of the SelectablePicker. You must set this property in constructor<br/>\nand can not change this property on run-time. Otherwise SelectablePicker may not work properly.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets title of the SelectablePicker. ...</div><div class='long'><p>Gets/sets title of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>Picker</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-titleColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-titleColor' class='name expandable'>titleColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets titleColor of the SelectablePicker. ...</div><div class='long'><p>Gets/sets titleColor of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n<p>Defaults to: <code>Color.BLACK</code></p>        <p>Available since: <b>4.0.5</b></p>\n</div></div></div><div id='property-titleFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-property-titleFont' class='name expandable'>titleFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Gets/sets titleFont of the SelectablePicker. ...</div><div class='long'><p>Gets/sets titleFont of the SelectablePicker.\nThis property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>4.0.5</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-show' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-method-show' class='name expandable'>show</a>( <span class='pre'>done, cancel</span> )<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>This function shows SelectablePicker in a dialog. ...</div><div class='long'><p>This function shows SelectablePicker in a dialog.</p>\n        <p>Available since: <b>4.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>done</span> : Function<div class='sub-desc'><p>This event is called when user clicks done button.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>param</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>items</span> : Number|Array<div class='sub-desc'><p>If multiSelectEnabled is false, items will be index of selected item, otherwise array of selected items's indexs</p>\n</div></li></ul></div></li></ul></div></li><li><span class='pre'>cancel</span> : Function<div class='sub-desc'><p>This event is called when user clicks cancel button.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onSelected' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.SelectablePicker'>UI.SelectablePicker</span><br/></div><a href='#!/api/UI.SelectablePicker-event-onSelected' class='name expandable'>onSelected</a>( <span class='pre'>index, selected</span> )<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>This event is called when an item is selected/unselected on the SelectablePicker. ...</div><div class='long'><p>This event is called when an item is selected/unselected on the SelectablePicker.\nIf multiSelectEnabled is false, selected will be always true.</p>\n        <p>Available since: <b>4.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>selected</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});